

var photos = [<a data-flickr-embed="true"  href="https://www.flickr.com/photos/journalistickmedia/5469046184/in/dateposted-public/" title="SlightlyStoopid"><img src="https://farm6.staticflickr.com/5180/5469046184_4b9bc872a1_b.jpg" width="683" height="1024" alt="SlightlyStoopid"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8", 
<a data-flickr-embed="true"  href="https://www.flickr.com/photos/journalistickmedia/5468935716/in/dateposted-public/" title="SlightlyStoopid"><img src="https://farm6.staticflickr.com/5097/5468935716_61db0f2b70_b.jpg" width="683" height="1024" alt="SlightlyStoopid"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>];

var i=0;

function previousImage(){
	/* 
		I am not sure what the line below is supposed to do.  This is actually shorthand for an if 
		statement, but it is difficult to read.  I would write out the full if statement to clarify.

		Also, if your conditional - (i>0) is true, it is calling a function called changeImage(), which is not
		defined.

		I know you are working on a carousel here - check out the Bootstrap carousel after we go over
		it in class tomorrow.  I think that would work well for what you are trying to do here.
	 */

	i>0 ? changeImage(--i):0;
$(document).ready(function(){
	$("#your-vote").on("change",function(){
		if(i<images.length){
			votes[i]=$("#your-vote").val();
			nextImage();
		}
	});

	// These lines are god, but you need to define your nextImage() and previousImage() function in order for them to work.
	$("#buttons-wrapper .btn[value='Previous Photo']").on("click",nextImage);
	$("#buttons-wrapper .btn[value='Next Photo']").on("click",previousImage);

	});