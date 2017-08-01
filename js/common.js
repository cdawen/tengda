window.onscroll = function() {
	var i=0;
	var tenda_product = document.querySelector('.tenda_product');
	var fh_top = document.querySelector('.fh_top');
	var height = document.body.scrollTop;
	var tenda_product_height = tenda_product.offsetTop;
	if(height > tenda_product_height) {
		fh_top.style.animationPlayState = 'running';
	}else{
		fh_top.style.display = 'none';
	}
}