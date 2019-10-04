//model engraving ===================================
(function(){

$(document).on("click", "#modal_engraving .fontBtn", function(){
	$("#modal_engraving .fontBtn").removeClass("select");
	$(this).addClass("select");
	$("#input_engrave_text").attr("data-font", $(this).attr("data-font") );
})

var maxEngravingTextCount = 15;
$(document).on("click", "#modal_engraving .insertTxtBtn", function(){
	if ( $("#input_engrave_text").val().length == 15 ){
		return;
	}
	$("#input_engrave_text").val( $("#input_engrave_text").val() + $(this).attr("data-text") );
	engravingTextCount();

})

function engravingTextCount(){
	$("#modal_engraving .textCount .num").text( maxEngravingTextCount - $("#input_engrave_text").val().length );
}

$(document).ready(function() {
	$("#input_engrave_text").on("input", engravingTextCount);

});



})();
