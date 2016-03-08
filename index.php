<?
require_once "./config.php"; 
require_once "./function.php"; 
	if ($_GET){ 
				$tmp = clear_and_string();
				$db = DB::get_instance();
				$items = $db->get_item($tmp);
				}
?>
<!DOCTYPE HTML">
<html>
<head>
<title>Поиск по базе</title>

<link href="css/reset.css" media="screen" rel="stylesheet" type="text/css"/>
<link href="css/style.css" media="screen" rel="stylesheet" type="text/css"/>
<script src="js/jquery-2.2.1.min.js"></script>
<script src="js/script.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">

</head>
<body>
	<div id="container">
		<h1>Параметрический поиск</h1>
		<form action="" class="form" method="GET">
			<div id="field1" class="field">
				<div class="left">
					<label for="field1">
							Операционная система:
					</label>
				</div>
				<div class="right">
					<input type="checkbox" name="opersis[]" data-type="apple,white,140" id="field1-1" <?if (isset($_GET['opersis']) && (in_isset_arr('1',$_GET['opersis']))==true) echo "checked";?> value="1" class="chek iOS5">
                    <span class="option-title">
                         iOS 5
                    </span>
				  <input type="checkbox" name="opersis[]" data-type="apple,white,black,140" id="field1-2" <?if (isset($_GET['opersis']) && (in_isset_arr('2',$_GET['opersis']))==true) echo "checked";?> value="2" class="chek iOS6">
                    <span class="option-title">
                         iOS 6
                    </span>
					 <input type="checkbox" name="opersis[]" data-type="nokia,white,190" id="field1-7" <?if (isset($_GET['opersis']) && (in_isset_arr('7',$_GET['opersis']))==true) echo "checked";?> value="7" class="chek win">
                    <span class="option-title">
                         Windows Phone
                    </span>

                    <input type="checkbox" name="opersis[]" data-type="samsung,blue,140" id="field1-3" <?if (isset($_GET['opersis']) && (in_isset_arr('3',$_GET['opersis']))==true) echo "checked";?> value="3" class="chek android40">
                    <span class="option-title">
                         Android 4.0
                    </span>

                    <input type="checkbox" name="opersis[]" data-type="htc,sony,black,white,150" id="field1-5" <?if (isset($_GET['opersis']) && (in_isset_arr('5',$_GET['opersis']))==true) echo "checked";?> value="5" class="chek android41">
                    <span class="option-title">
                         Android 4.1
                    </span>

                    <input type="checkbox" name="opersis[]" data-type="samsung,yellow,140" id="field1-4" <?if (isset($_GET['opersis']) && (in_isset_arr('4',$_GET['opersis']))==true) echo "checked";?> value="4" class="chek android42">
                    <span class="option-title">
                         Android 4.2
                    </span>
				</div> <!--end right-->
			</div> <!--end field1-->
			
			<div id="field2" class="field">
				<div class="left">
					<label for="field2">
						Производитель:
					</label>
				</div> <!--end left-->
				<div class="right">
                    <input type="checkbox" name="name_proiz[]" data-type="iOS5,iOS6,white,black,140" id="field2-1" <?if (isset($_GET['name_proiz']) && (in_isset_arr('1',$_GET['name_proiz']))==true) echo "checked";?> value="1" class="chek2 apple">
                    <span class="option-title">
                         Apple
                    </span>
 
                    <input type="checkbox" name="name_proiz[]" data-type="android40,android41,android42,blue,yellow,140,180" id="field2-2" <?if (isset($_GET['name_proiz']) && (in_isset_arr('2',$_GET['name_proiz']))==true) echo "checked";?> value="2" class="chek2 samsung">
                    <span class="option-title">
                         Samsung
                    </span>

                    <input type="checkbox" name="name_proiz[]" data-type="android41,white,150" id="field2-3" <?if (isset($_GET['name_proiz']) && (in_isset_arr('3',$_GET['name_proiz']))==true) echo "checked";?> value="3" class="chek2 sony">
                    <span class="option-title">
                         Sony
                    </span>

                    <input type="checkbox" name="name_proiz[]" data-type="android41,black,150" id="field2-4" <?if (isset($_GET['name_proiz']) && (in_isset_arr('4',$_GET['name_proiz']))==true) echo "checked";?> value="4" class="chek2 htc">
                    <span class="option-title">
                         HTC
                    </span>

                    <input type="checkbox" name="name_proiz[]" data-type="win,white,190" id="field2-5" <?if (isset($_GET['name_proiz']) && (in_isset_arr('5',$_GET['name_proiz']))==true) echo "checked";?> value="5" class="chek2 nokia">
                    <span class="option-title">
                         Nokia
                    </span>
				</div><!--end right-->
          </div>
			
			  <div id="field3" class="field">
				<div class="left">
					<label for="field3">
						Цвет:
					</label>
				</div> <!---end left-->
                
                <div class="right">
                    <input type="checkbox" name="color[]" id="field3-1" data-type="iOS5,iOS6,android41,win,apple,sony,nokia,white,140,150,190" <?if (isset($_GET['color']) && (in_isset_arr('1',$_GET['color']))==true) echo "checked";?> value="1" class="white chek3">
                    <span class="option-title">
                         Белый
                    </span>

                    <input type="checkbox" name="color[]" id="field3-2" data-type="iOS6,android41,apple,htc,black,140,150" <?if (isset($_GET['color']) && (in_isset_arr('2',$_GET['color']))==true) echo "checked";?> value="2" class="black chek3">
                    <span class="option-title">
                         Черный
                    </span>


                    <input type="checkbox" name="color[]" id="field3-3" data-type="android40,samsung,blue,140" <?if (isset($_GET['color']) && (in_isset_arr('3',$_GET['color']))==true) echo "checked";?> value="3" class="blue chek3">
                    <span class="option-title">
                         Синий
                    </span>


                    <input type="checkbox" name="color[]" id="field3-4" data-type="android41,android42,samsung,yellow,140,180" <?if (isset($_GET['color']) && (in_isset_arr('4',$_GET['color']))==true) echo "checked";?> value="4" class="yellow chek3">
                    <span class="option-title">
                         Желтый
                    </span>
                    <br>
			    </div><!---end right-->
             </div><!-- end field3-->
			 
          <div id="field4" class="field">
				<div class="left">
					<label for="field4">
						Вес:
					</label>
				</div> <!-- end left -->
				
				<div class="right">
                    <input type="checkbox" name="weight[]" id="field4-1" data-type="yellow" <?if (isset($_GET['weight']) && (in_isset_arr('140',$_GET['weight']))==true) echo "checked";?> value="140" class="140">
                    <span class="option-title">
                         до 140
                    </span>

                    <input type="checkbox" name="weight[]" id="field4-2" data-type="yellow" <?if (isset($_GET['weight']) && (in_isset_arr('150',$_GET['weight']))==true) echo "checked";?> value="150" class="150">
                    <span class="option-title">
                         до 150
                    </span>
                
                    <input type="checkbox" name="weight[]" id="field4-3" data-type="yellow" <?if (isset($_GET['weight']) && (in_isset_arr('160',$_GET['weight']))==true) echo "checked";?> value="160" class="160">
                    <span class="option-title">
                         до 160
                    </span>

                    <input type="checkbox" name="weight[]" id="field4-4" data-type="yellow" <?if (isset($_GET['weight']) && (in_isset_arr('170',$_GET['weight']))==true) echo "checked";?> value="170" class="170">
                    <span class="option-title">
                         до 170
                    </span>


                    <input type="checkbox" name="weight[]" id="field4-5" data-type="yellow" <?if (isset($_GET['weight']) && (in_isset_arr('180',$_GET['weight']))==true) echo "checked";?> value="180" class="180">
                    <span class="option-title">
                         до 180
                    </span>
					
					 <input type="checkbox" name="weight[]" id="field4-6" data-type="yellow" <?if (isset($_GET['weight']) && (in_isset_arr('190',$_GET['weight']))==true) echo "checked";?> value="190" class="190">
                    <span class="option-title">
                         до 190
                    </span>
				</div> <!--end right -->
          </div> <!--end field4 -->
          
		<div id="field" class="field">
				<div class="right">
					<div id="form-submit" class="submit">
						<input type="submit" value="Искать">
					</div>
					</br>
					<a href="/">Главная </a>
				</div>
			</div>
		</form>
		
		<div id="resultat">
			<table id="table_res">
				<? if ($items===false) { echo "Нет данных удовлетвораящие поиск" ;}else{echo $items;}?>
			</table>
		</div>
		
	</div>

</body>
</html>