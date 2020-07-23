

/* Toggle Completed */
$("ul").on("click", "li", function () { //use onClick since click only checks the pre existing lis
	$(this).toggleClass("completed");
});

/* Click on X to remove li */
$("ul").on("click", "span", function(event) {
	/* Removes li entirely with a fade out */
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	/* Stops bubbling up to other elements */
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	/* Checks for the enter key */
	if(event.which === 13) {
		/* Grabbing new todo text from input */	
		var todoText = $(this).val();
		$("ul").append("<li><span><i class=\"fa fa-trash\"></i></span> " + todoText +"</li>");
		/* Clear text box */
		$(this).val("");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});