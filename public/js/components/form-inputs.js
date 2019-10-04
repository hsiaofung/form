//form inputs ===================================
(function(){
	
//spinner
$.fn.spinner = function() {
	this.each(function() {
		var el = $(this);
		// add elements
		// el.wrap('<span class="spinner"></span>');     
		// el.before('<span class="sub">-</span>');
		// el.after('<span class="add">+</span>');

		// substract
		el.parent().on('click', '.sub', function () {
			//console.log("sub " + el.val());
			if (el.val() > parseInt(el.attr('min')))
			el.val( function(i, oldval) { return --oldval; });
		});

		// increment
		el.parent().on('click', '.add', function () {
			//console.log("add " + el.val());
			//if (el.val() < parseInt(el.attr('max')))
			el.val( function(i, oldval) { return ++oldval; });
		});
    });
};


$(document).ready(function() {

	$('.spinner input[type=number]').spinner();

});


})();
