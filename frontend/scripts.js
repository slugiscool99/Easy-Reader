//Observers
$(window).on('scroll', function(){
  var s = $(window).scrollTop(),
      d = $(document).height(),
      c = $(window).height();
  var scrollPercent = (s / (d-c)) * 100;
  $("#progress").css("width", scrollPercent+"%");
  console.log(scrollPercent);
})


//Actions
function switchVersion(id){
	var px = $(".middle#m"+id).height();
	$("#e"+id).hide();
	$(".spacer#s"+id).animate({
		'marginTop' : "+="+px+"px" 
	}, 200, function(){
		$(".spacer#s"+id).hide();
		$(".middle#m"+id).fadeIn();
	});
}


//Initializers
function setDifficulty(value){
	if(value < 25){
		$("#difficulty").css("color", "green");
	}
	else if(value > 75){
		$("#difficulty").css("color", "red");
	}
	else{
		$("#difficulty").css("color", "yellow");
	}
}

function populateData(json){

}