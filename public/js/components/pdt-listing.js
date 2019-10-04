(function(){


$(document).ready(function() {
	alignSubmenuToMenuTitle();

	$(".filterNSortMenu_wrap .menu, .filterNSortOptions_wrap .menu").on("mouseover", function(){
		$(this).children(".menuTitle").addClass("showingSubmenu");
		var submenuSelector = $(this).attr("data-submenu");
		$(submenuSelector).addClass("show");
		console.log("menu menter");
	});
	$(".filterNSortMenu_wrap .menu, .filterNSortOptions_wrap .menu").on("mouseout", function(){
		$(this).children(".menuTitle").removeClass("showingSubmenu");
		var submenuSelector = $(this).attr("data-submenu");
		$(submenuSelector).removeClass("show");
		console.log("menu mleave");
	});


	$(".filterNSortOptions_wrap .submenu_wrap, .filterNSortOptions_wrap .inner_submenu_wrap").on("mouseenter", function(){
		var menuTitleSelector = $(this).attr("data-menutitle");
		$(menuTitleSelector).addClass("showingSubmenu");
		$(this).addClass("show");
		console.log("submenu_wrap menter");
	});
	$(".filterNSortOptions_wrap .submenu_wrap, .filterNSortOptions_wrap .inner_submenu_wrap").on("mouseleave", function(){
		var menuTitleSelector = $(this).attr("data-menutitle");
		$(menuTitleSelector).removeClass("showingSubmenu");
		$(this).removeClass("show");
		console.log("submenu_wrap mleave");
	});

	$(".filterNSortOptions_wrap .filterOptions a, .filterNSortOptions_wrap .filterOptions a").on("click", function(){
		var $closetFilterOptions = $(this).closest(".filterOptions");
		$closetFilterOptions.find("a").removeClass("active");
		$(this).addClass("active");
		console.log("filterOptions click");
	});

	$(".pdtListing_wrap .colBtn").on("click", function(){
		$(".pdtListing_wrap .colBtn").removeClass("active");
		$(this).addClass("active");
		if( $(this).attr("data-colnum") == "1" ){
			$(".pdtResult_wrap").addClass("oneColLayout");
		}else{			
			$(".pdtResult_wrap").removeClass("oneColLayout");
		}
	});


	$(".pdtListing_wrap .applyFilter_btn").on("click", function(){
		$(".pdtListing_wrap .filterNSortModal").modal('hide')
	});


});


function alignSubmenuToMenuTitle(){

	$(".filterOptions_wrap .submenu_wrap").each( function( index ) {
		var menuTitleSelector = $(this).attr("data-menutitle");
		$(this).css("padding-left", $(menuTitleSelector).position().left);
		//$(this).css("padding-right", $(".filterNSortMenu_wrap").offset().left);//.filterNSortMenu_wrap should be centered
	});
	/*
	$(".sortingOptions_wrap .submenu_wrap").each( function( index ) {
		var menuTitleSelector = $(this).attr("data-menutitle");
		$(this).css("padding-right", 
			$(menuTitleSelector + "+.arrow_container").outerWidth()
		);
	});
	*/
}

$(window).on("resize", alignSubmenuToMenuTitle);


})();



