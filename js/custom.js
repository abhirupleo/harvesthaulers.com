$(document).ready(function(){
	$('.fa-bars').on('click',function(){
		$('.mininav2').css("display","block");
	});
	$('.close').on('click',function(){
		$('.mininav2').css("transform","none");
	});
});