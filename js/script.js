 $(document).ready(function () {
		function get_checked(locthis,tmp, a) {
			nameattrib = $(locthis).attr('name');
			if (a != undefined){
				var a =	a.split(',');
				for (i=0;i<tmp.length;i++){
					if ($(locthis).prop('checked')){
						$('.' + tmp[i]).attr('disabled', false).prop('checked', true);
						
					}else{
						
						if ($.inArray(tmp[i],a) == -1){
							$('.' + tmp[i]).attr('disabled', true).prop('checked', false);
						}
					}
				}
			}else{
				
				for (i=0;i<tmp.length;i++){
					if ($(locthis).prop('checked')){
						$('.' + tmp[i]).attr('disabled', false).prop('checked', true);
						
						$("input:checkbox[name!='" + nameattrib + "']:not(:checked)").attr('disabled', true);
						
					}else{
						$('.' + tmp[i]).attr('disabled', false).prop('checked', false);
						$("input:checkbox[name!='" + nameattrib + "']:not(:checked)").attr('disabled', false);
						
					}
				}
			}
		}	
      $("input:checkbox[type='checkbox']").on('change', function () {	
			var locthis = $(this);
			var enabled = $(this).data('type');
			var nameattribtmp = $(this).attr('name');
			var tmp =  enabled.split(',');
			
			if ($("input:checkbox[name='" + nameattribtmp + "']").filter("input:checkbox[name='" + nameattribtmp + "']:checked").data('type') != $(this).data('type')){
				var a = $("input:checkbox[name='" + nameattribtmp + "']").filter("input:checkbox[name='" + nameattribtmp + "']:checked").data('type');
				get_checked(locthis,tmp,a);
			}else{		
				get_checked(locthis,tmp);
				}
	
	  });  
  });