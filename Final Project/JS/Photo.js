var photos = [<a data-flickr-embed="true"  href="https://www.flickr.com/photos/journalistickmedia/5469046184/in/dateposted-public/" title="SlightlyStoopid"><img src="https://farm6.staticflickr.com/5180/5469046184_4b9bc872a1_b.jpg" width="683" height="1024" alt="SlightlyStoopid"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8", 
<a data-flickr-embed="true"  href="https://www.flickr.com/photos/journalistickmedia/5468935716/in/dateposted-public/" title="SlightlyStoopid"><img src="https://farm6.staticflickr.com/5097/5468935716_61db0f2b70_b.jpg" width="683" height="1024" alt="SlightlyStoopid"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>];

var i=0;

function previousImage(){
	i>0 ? changeImage(--i):0;
$(document).ready(function(){
	$("#your-vote").on("change",function(){
		if(i<images.length){
			votes[i]=$("#your-vote").val();
			nextImage();
		}
	});
	$("#buttons-wrapper .btn[value='Previous Photo']").on("click",nextImage);
	$("#buttons-wrapper .btn[value='Next Photo']").on("click",previousImage);

	});