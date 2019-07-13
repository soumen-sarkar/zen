$(window).load(function(){
	
	//Image carousel
	$('.carousel').carousel({
		//interval: 4000
	})
	
	$('.togaleButton').click(function(){
		$(this).toggleClass('clickButton');
	});
	
	//Script of equal height
	$(function(cash) {
		$('.equal').responsiveEqualHeightGrid(); 
	});
	
	//Script for sticky header	
	$(function() {
    var header = $(".navigationWide");
    var toppos = $('.navigationWide').offset().top;
		$(window).scroll(function() {    
			var scroll = $(window).scrollTop();	 
			if (scroll > toppos) {
				header.addClass("sticky");
			} else {            
			 header.removeClass("sticky");	
			}
		});
	});
	
	
	//Script for info rollover in
	$('.hoverBackground').mouseenter(function() {        
		$(this).prepend($("<div class='overlay'></div>").hide().fadeIn('fast'));
		
		$(this).find('.pull-right').find('.overlayContent div').addClass('slideRight');
		
		$(this).find('.pull-right').find('.overlayContent div').removeClass('slideLeftOut');
		
		$(this).find('.pull-left').find('.overlayContent div').addClass('slideLeft');
		
		$(this).find('.pull-left').find('.overlayContent div').removeClass('slideRightOut');		
    });
	
	//Script for info rollover out
	$('.hoverBackground').mouseleave(function() {
		$('.overlay').remove();		
		
		$(this).find('.pull-right').find('.overlayContent div').removeClass('slideRight');
		
		$(this).find('.pull-right').find('.overlayContent div').addClass('slideLeftOut');		
		
		$(this).find('.pull-left').find('.overlayContent div').removeClass('slideLeft');
		
		$(this).find('.pull-left').find('.overlayContent div').addClass('slideRightOut');
    });	
		
});

jQuery(document).ready(function(){
	/*================= SCRIPT FOR TAB MENU ========================*/	
	$('#navigationTrigger, .navigationClose').sidr();	
});

//Animation on scroll
$(window).scroll(function() {
	$('.ansWide, .leWebWide, .responsiveDesignWide, .CMSdrupalWide, .CMSmagentoWide, .webSolutionWide, .seoWide, .EmarketingWide, .workWithZEDWide').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+750) {
			$(this).addClass("pullUp");
		}
	});
	
	$('.ctaBox').each(function(){
	var imagePos = $(this).offset().top;

	var topOfWindow = $(window).scrollTop();
		if (imagePos < topOfWindow+750) {
			$(this).addClass("fadeIn");
		}
	});	
});

