$(function() {
	
	$("a.topopup").click(function() {
			loading(); 
			setTimeout(function(){ 
				loadPopup();  
			}, 700); 
	return false;
	});
	
	
	$("div.close").hover(
					function() {
						$('span.ecs_tooltip').show();
					},
					function () {
    					$('span.ecs_tooltip').hide();
  					}
				);
	
	$("div.close").click(function() {
		disablePopup();  
	});
	
	$(this).keyup(function(event) {
		if (event.which == 27) { 
			disablePopup();  
		}  	
	});
	
	$("div#backgroundPopup").click(function() {
		disablePopup();  
	});
	
	
	


	function loading() {
		$("div.loader").show();  
	}
	function closeloading() {
		$("div.loader").fadeOut('normal');  
	}
	
	var popupStatus = 0; 
	
	function loadPopup() { 
		if(popupStatus == 0) { 
			closeloading(); 
			$("#toPopup").fadeIn(0500); 
			$("#backgroundPopup").css("opacity", "0.7"); 
			$("#backgroundPopup").fadeIn(0001); 
			popupStatus = 1; 
		}	
	}
		
	function disablePopup() {
		if(popupStatus == 1) { 
			$("#toPopup").fadeOut("normal");  
			$("#backgroundPopup").fadeOut("normal");  
			popupStatus = 0;  
		}
	}
	
}); 