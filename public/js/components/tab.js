//tab ===================================
(function(){
	
$(document).on("click", ".tabLinks", function(){
	$(".tabContent").removeClass("active");
	$(".tabLinks").removeClass("active");

	var selector = $(this).attr("data-target");
	$(selector).addClass("active");
	$(this).addClass("active");
});


/*
$(document).ready(function() {

	var swiper_tab = new Swiper('.tab_wrap .swiper-container-tab', {
		slidesPerView: 'auto',
		grabCursor: true,
		freeMode: true,
	});

});
*/



})();
