<?
function textClear($var){ //чуть безопасности
	foreach ($var as $val){
				$val = trim($val);
				$val = strip_tags($val);
				$valclaer[] = (int)($val);				
	}
	return $valclaer;
}
function in_isset_arr($var,$arr)
{
	foreach ($arr as $key)
	{
		if ($key == $var){
		return true;
		}
	}
	return false;
}
function clear_weight($var)
{
	$var = textClear($var);
	$var = max($var);
	return ($var);
}
function clear_and_string()
{
	extract($_GET);//opersis,name_proiz,color,weight
	if (isset($opersis)) {$array['opersis'] = implode(",",textClear($opersis));}
	if (isset($name_proiz)) { $array['name_proiz'] = implode(",",textClear($name_proiz));}
	if (isset($color)) { $array['color'] = implode(",",textClear($color));}
	if (isset($weight)) { $array['weight'] = clear_weight($weight);}
	return ($array);
}

class DB {
	static $instance = NULL;
	protected $db;
	
	static function get_instance(){
		if (self::$instance != NULL){
			return self::$instance;
		}
		return self::$instance = new DB();
	}
	
	private function __construct(){
		
		$this->db = mysql_connect(HOST,USER,PASSWORD);
		if(!$this->db) {
			exit("Ошибка соединения с базой данных");
		}
		if(!mysql_select_db(DB,$this->db)) {
			exit("Нет такой базы данных".DB);
		}
		mysql_query("SET NAMES 'UTF8'");	
	}
	
	private function __clone(){
		
	}
	public function get_item($item){
		extract($item);
		$query = "SELECT glav.id,
					name_proiz.name as name_proiz,
					opersis.name as opersis,
					color.name as color,
					weight.name as weight,
					glav.price as price
					FROM glav JOIN name_proiz ON name_proiz.key = glav.name_proiz 
								JOIN opersis ON opersis.key = glav.opersis
								JOIN color ON color.key = glav.color 
								JOIN weight ON weight.key = glav.weight
				WHERE ";
			isset($opersis) ? $query.= "opersis IN (".mysql_real_escape_string($opersis).")" : $query.= "  ";
			isset($name_proiz) and (isset($opersis))? $query.= " AND name_proiz IN (".mysql_real_escape_string($name_proiz).") " : $query.= "name_proiz IN (".mysql_real_escape_string($name_proiz).") ";
			isset($color) and (isset($opersis) or isset($name_proiz))? $query.= "AND color IN (".mysql_real_escape_string($color).")  " : $query.= "color IN (".mysql_real_escape_string($color).") ";
			isset($weight) and (isset($opersis) or isset($name_proiz) or isset($color))? $query.= "AND weight.name  <= ".mysql_real_escape_string($weight)." " : $query.= "weight.name <= ".mysql_real_escape_string($weight)." ";
		$query.= ";";

		$res = $this->my_mysql_query_accos_array($query);
		if (!$res){
			return false;
		}else{
			$res = $this->view($res);
			return $res;
		}

		
	}
	protected function my_mysql_query($query)
	{
		$result = mysql_query($query);
		if (!$result){
			exit;
		}else{
			return $result;	
		}
	}
	protected function my_mysql_query_accos_array($res)
	{
		$query = $this->my_mysql_query($res);
		if (mysql_num_rows($query)<=0){
			return false;
		}else{
			for($i=0;$i<mysql_num_rows($query);$i++)
			{
				$row []= mysql_fetch_assoc($query,true);
			}
		return($row);
		}
			
	}
	protected function view($res) {
		foreach ($res as $key)
		{
			$contenttmp .= $this->get_view($key);
		}
		return $contenttmp;
	}

	protected function get_view($key){
		ob_start();
		include 'view/content.php';
		return ob_get_clean();
	}
}




?>