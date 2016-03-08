 $(document).ready(function () {
	 function activation_all(tmp,locthis){
		count = tmp.length;
		for(i=0;i<count;i++){
			if (locthis.is(':checked')) {
			$('.' + tmp[i]).prop('checked', true);
				}else{
			$('.' + tmp[i]).prop('checked', false);
			} 
		}
	 }
	 function activation_color(tmp,locthis){
		$('#field1 input:not(:checked)').attr('disabled', true);
		$('#field2 input:not(:checked)').attr('disabled', true);
		$('#field3 input:not(:checked)').attr('disabled', true);
		$('#field4 input:not(:checked)').attr('disabled', true);
		count = tmp.length;
		for(i=0;i<count;i++){
			if (locthis.is(':checked')) {
			$('.' + tmp[i]).attr('disabled', false).prop('checked', true);
				}else{
			$('.' + tmp[i]).attr('disabled', true).prop('checked', false);
			$('#field1 input:not(:checked)').attr('disabled', false);
			$('#field2 input:not(:checked)').attr('disabled', false);
			$('#field3 input:not(:checked)').attr('disabled', false);
			$('#field4 input:not(:checked)').attr('disabled', false);
			} 
		}
	 }
	 function activation_opersis(tmp,locthis){
		 
		
		 
		$('#field2 input:not(:checked)').attr('disabled', true);
		$('#field3 input:not(:checked)').attr('disabled', true);
		$('#field4 input:not(:checked)').attr('disabled', true);
		count = tmp.length;
		for(i=0;i<count;i++){
			if (locthis.is(':checked')) {
			$('.' + tmp[i]).attr('disabled', false).prop('checked', true);
				}else{
					if($("#field1-1").prop('checked')){
						$('#field3-2').prop('checked', false).attr('disabled', true);
						$('#field2-5').prop('checked', false).attr('disabled', true);
						$('#field4-6').prop('checked', false).attr('disabled', true);
						$('#field3-3').prop('checked', false).attr('disabled', true);
						$('#field2-2').prop('checked', false).attr('disabled', true);
						$('#field4-2').prop('checked', false).attr('disabled', true);
						$('#field2-3').prop('checked', false).attr('disabled', true);
						$('#field2-4').prop('checked', false).attr('disabled', true);
						$('#field3-4').prop('checked', false).attr('disabled', true);
					
					}else 
						if($("#field1-2").prop('checked')){
						$('#field2-5').prop('checked', false).attr('disabled', true);
						$('#field4-6').prop('checked', false).attr('disabled', true);
						$('#field2-2').prop('checked', false).attr('disabled', true);
						$('#field3-3').prop('checked', false).attr('disabled', true);
						$('#field2-3').prop('checked', false).attr('disabled', true);
						$('#field2-4').prop('checked', false).attr('disabled', true);
						$('#field4-2').prop('checked', false).attr('disabled', true);
						$('#field3-4').prop('checked', false).attr('disabled', true);
					}else 
						if ($("#field1-7").prop('checked')){
							$('#field2-2').prop('checked', false).attr('disabled', true);
							$('#field3-3').prop('checked', false).attr('disabled', true);
							$('#field4-1').prop('checked', false).attr('disabled', true);
							$('#field2-3').prop('checked', false).attr('disabled', true);
							$('#field2-4').prop('checked', false).attr('disabled', true);
							$('#field4-2').prop('checked', false).attr('disabled', true);
							$('#field3-2').prop('checked', false).attr('disabled', true);
							$('#field3-4').prop('checked', false).attr('disabled', true);
					}else 
					  if ($("#field1-3").prop('checked')){
							$('#field2-1').prop('checked', false).attr('disabled', true);
							$('#field3-1').prop('checked', false).attr('disabled', true);
							$('#field3-2').prop('checked', false).attr('disabled', true);
							$('#field2-5').prop('checked', false).attr('disabled', true);
							$('#field4-6').prop('checked', false).attr('disabled', true);
							$('#field4-2').prop('checked', false).attr('disabled', true);
							$('#field2-3').prop('checked', false).attr('disabled', true);
							$('#field2-4').prop('checked', false).attr('disabled', true);
							$('#field3-4').prop('checked', false).attr('disabled', true);
					}else
						if ($("#field1-5").prop('checked')){
							$('#field2-1').prop('checked', false).attr('disabled', true);
							$('#field2-2').prop('checked', false).attr('disabled', true);
							$('#field2-5').prop('checked', false).attr('disabled', true);
							$('#field3-3').prop('checked', false).attr('disabled', true);
							$('#field3-4').prop('checked', false).attr('disabled', true);
							$('#field4-1').prop('checked', false).attr('disabled', true);
							$('#field4-4').prop('checked', false).attr('disabled', true);
							$('#field4-5').prop('checked', false).attr('disabled', true);
							$('#field4-6').prop('checked', false).attr('disabled', true);
					}else
						if ($("#field1-4").prop('checked')){
							$('#field2-1').prop('checked', false).attr('disabled', true);
							$('#field2-3').prop('checked', false).attr('disabled', true);
							$('#field2-4').prop('checked', false).attr('disabled', true);
							$('#field2-5').prop('checked', false).attr('disabled', true);
							$('#field3-1').prop('checked', false).attr('disabled', true);
							$('#field3-2').prop('checked', false).attr('disabled', true);
							$('#field3-3').prop('checked', false).attr('disabled', true);
							$('#field4-2').prop('checked', false).attr('disabled', true);
							$('#field4-3').prop('checked', false).attr('disabled', true);
							$('#field4-4').prop('checked', false).attr('disabled', true);
							$('#field4-5').prop('checked', false).attr('disabled', true);
							$('#field4-6').prop('checked', false).attr('disabled', true);
					}
					              
					else{
				
						$('.' + tmp[i]).attr('disabled', true).prop('checked', false);
						$('#field1 input:not(:checked)').attr('disabled', false);
						$('#field2 input:not(:checked)').attr('disabled', false);
						$('#field3 input:not(:checked)').attr('disabled', false);
						$('#field4 input:not(:checked)').attr('disabled', false);
					}
			} 
		}
	 }
	 
	 
	 function activation_proiz(tmp,locthis){
		$('#field1 input:not(:checked)').attr('disabled', true);
		$('#field3 input:not(:checked)').attr('disabled', true);
		$('#field4 input:not(:checked)').attr('disabled', true);
		count = tmp.length;
		for(i=0;i<count;i++){
			if (locthis.is(':checked')) {
			$('.' + tmp[i]).attr('disabled', false).prop('checked', true);
				}else{
			$('.' + tmp[i]).attr('disabled', true).prop('checked', false);
			$('#field1 input:not(:checked)').attr('disabled', false);
			$('#field3 input:not(:checked)').attr('disabled', false);
			$('#field4 input:not(:checked)').attr('disabled', false);
			} 
		}
	 }
	 
	 	if($("input:checked").prop('checked')){
			var locthis = $('input:checked');
			var enabled = locthis.data('type');
			var tmp =  enabled.split(',');
			//activation_all(tmp,locthis);
		}
		
		
      $('.chek').on('change', function () {	 
			var locthis = $(this);
			var enabled = $(this).data('type');
			var tmp =  enabled.split(',');
			activation_opersis(tmp,locthis);
	  });
	  
	   $('.chek2').on('change', function () {
			var locthis = $(this);
			var enabled = $(this).data('type');
			var tmp =  enabled.split(',');
			activation_proiz(tmp,locthis);
      });
	   $('.chek3').on('change', function () {
			var locthis = $(this);
			var enabled = $(this).data('type');
			var tmp =  enabled.split(',');
			activation_color(tmp,locthis);
      });
	  
	  
  });