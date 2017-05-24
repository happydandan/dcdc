$(function(){
	var page=1;
	$(".focus_right").click(function(){
		var parent=$(this).parents(".banner_bar");
		var banner_cont=parent.find(".banner_cont");
		if(!banner_cont.is(":animated")){
			if(page===4){
				banner_cont.animate({left:"0px"},"slow");
				page=1;
			}else{
				banner_cont.animate({left:"-=811px"},"slow");
				page++;
			}
			parent.find(".active").removeClass("active");
			parent.find(".imgNum span").eq((page-1)).addClass("active");
		}
	});
	$(".focus_left").click(function(){
		var parent=$(this).parents(".banner_bar");
		var banner_cont=parent.find(".banner_cont");
		if(!banner_cont.is(":animated")){
			if(page===1){
				banner_cont.animate({left:"-2433px"},"slow");
				page=4;
			}else{
				banner_cont.animate({left:"+=811px"},"slow");
                page--;
			}
			parent.find(".active").removeClass("active");
			parent.find(".imgNum span").eq((page-1)).addClass("active");
		}
	});
	$(".imgNum span").eq(0).click(function(){
		page=1;
		var parent=$(this).parents(".banner_bar");
		var banner_cont=parent.find(".banner_cont");
		if(!banner_cont.is(":animated")){
			banner_cont.animate({left:"0"},"slow");
		}
		$(this).addClass("active").siblings().removeClass("active");
	});
	$(".imgNum span").eq(1).click(function(){
		page=2;
		var parent=$(this).parents(".banner_bar");
		var banner_cont=parent.find(".banner_cont");
		if(!banner_cont.is(":animated")){
			banner_cont.animate({left:"-811px"},"slow");
		}
		$(this).addClass("active").siblings().removeClass("active");
	})
	$(".imgNum span").eq(2).click(function(){
		page=3;
		var parent=$(this).parents(".banner_bar");
		var banner_cont=parent.find(".banner_cont");
		if(!banner_cont.is(":animated")){
			banner_cont.animate({left:"-1622px"},"slow");
		}
		$(this).addClass("active").siblings().removeClass("active");
	})
	$(".imgNum span").eq(3).click(function(){
		page=4;
		var parent=$(this).parents(".banner_bar");
		var banner_cont=parent.find(".banner_cont");
		if(!banner_cont.is(":animated")){
			banner_cont.animate({left:"-2433px"},"slow");
		}
		$(this).addClass("active").siblings().removeClass("active");
	})
})