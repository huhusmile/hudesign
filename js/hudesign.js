$(function(){
	setInterval("showimg();",5000);
	initEvent();
});


function showimg(){
	var flag = $(".honepage").attr("flag");
	if (flag == 1) {
		$("#img1").fadeOut("slow");
		$("#img2").fadeIn("slow");
		$(".honepage").attr("flag","2");
	}else{
		$("#img2").fadeOut("slow");
		$("#img1").fadeIn("slow");
		$(".honepage").attr("flag","1");
	}
}

function initEvent(){
	$(".imgholder").hover(function(){
		$(this).find("span").fadeIn("fast");
	},function(){
		$(this).find("span").fadeOut("fast");
	});
}