$(document).ready(function(){


var photos = [", 



var i=0;

function changeImage(){
    $("#carousel-Img").attr("src",images[i]);
}

function previousImage(){
 i>0 ? changeImage(--i):0;
}

function nextImage(){
 i+1<images.length ? changeImage(++i):1;
}

	$("#buttons-wrapper .btn[value='Previous Photo']").on("click",nextImage);
	$("#buttons-wrapper .btn[value='Next Photo']").on("click",previousImage);

	});