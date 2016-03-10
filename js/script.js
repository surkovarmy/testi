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
		
      $("input:checkbox[name='opersis[]']").on('change', function () {	
			var locthis = $(this);
			var enabled = $(this).data('type');
			var tmp =  enabled.split(',');
			
			if ($("input:checkbox[name='opersis[]']").filter("input:checkbox[name='opersis[]']:checked").data('type') != $(this).data('type')){
				var a = $("input:checkbox[name='opersis[]']").filter("input:checkbox[name='opersis[]']:checked").data('type');
				get_checked(locthis,tmp,a);
			}else{		
				get_checked(locthis,tmp);
				}
	
	  });
	  
	   $("input:checkbox[name='name_proiz[]']").on('change', function () {	
			var locthis = $(this);
			var enabled = $(this).data('type');
			var tmp =  enabled.split(',');
			var a = [];
			
			if ($("input:checkbox[name='name_proiz[]']").filter("input:checkbox[name='name_proiz[]']:checked").data('type') != $(this).data('type')){
				var a = $("input:checkbox[name='name_proiz[]']").filter("input:checkbox[name='name_proiz[]']:checked").data('type');
				get_checked(locthis,tmp,a);
			}else{		
				get_checked(locthis,tmp);
				}
	
	  });
	  
	    $("input:checkbox[name='color[]']").on('change', function () {	
			var locthis = $(this);
			var enabled = $(this).data('type');
			var tmp =  enabled.split(',');
			var a = [];
			
			if ($("input:checkbox[name='color[]']").filter("input:checkbox[name='color[]']:checked").data('type') != $(this).data('type')){
				var a = $("input:checkbox[name='color[]']").filter("input:checkbox[name='color[]']:checked").data('type');
				get_checked(locthis,tmp,a);
			}else{		
				get_checked(locthis,tmp);
				}
	
	  });
	  
	   $("input:checkbox[name='weight[]']").on('change', function () {	
			var locthis = $(this);
			var enabled = $(this).data('type');
			var tmp =  enabled.split(',');
			var a = [];
			
			if ($("input:checkbox[name='weight[]']").filter("input:checkbox[name='weight[]']:checked").data('type') != $(this).data('type')){
				var a = $("input:checkbox[name='weight[]']").filter("input:checkbox[name='weight[]']:checked").data('type');
				get_checked(locthis,tmp,a);
			}else{		
				get_checked(locthis,tmp);
				}
	
	  });
	  
  });