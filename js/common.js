$(document).ready(function() {
	
	$("#portfolio_grid").mixItUp();
	
	$(".portfolio_m li").on("click",function(){
		$(".portfolio_m li").removeClass("active");
		$(this).addClass("active");
	});
	
	$(".top_text h1,.head_animate").animated("fadeInDown","fadeOutUp");
	$(".top_text p,.head_animate").animated("fadeInUp","fadeOutDown");
	$(".left_animate").animated("fadeInLeft","fadeOutLeft");
	$(".right_animate").animated("fadeInRight","fadeOutRight");
	$(".person").animated("bounceIn","bounceOut")
	$(".popup").magnificPopup({type:'image'});
	$(".popup_content").magnificPopup();
	$(".left .resume_wrap").animated("fadeInLeft","fadeOutDown");
	$(".right .resume_wrap").animated("fadeInRight","fadeOutDown")
	
	
	function heightDetect(){
		$(".main_head").css("height",$(window).height())
	};
	heightDetect();
	$(window).resize(function(){
		heightDetect();
	});

	$(".main_menu ul a").on('click',function(){
		$(".menu").removeClass('active');
		$(".main_menu").fadeOut(600);
		$(".top_text").removeClass("text_opacity");
	})
	$('.menu').on('click',function(){
		$('.menu').toggleClass('active');
		if ($(".main_menu").is(':visible')){
			$(".main_menu li a").removeClass("fadeInUp animated");
			$('.main_menu').fadeOut(600);
			$(".top_text").removeClass("text_opacity");
		} else {
			$(".top_text").addClass("text_opacity");
			$(".main_menu").fadeIn(600);
			$(".main_menu li a").addClass("fadeInUp animated");
		}

	});
		
	
	
});

$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow");
}); 
