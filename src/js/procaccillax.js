function getWindowScrollTop() {
	var windowScrollTop = $(window).scrollTop();
	return windowScrollTop;
}
function getWindowScrollBottom() {
	var windowScrollTop = getWindowScrollTop();
	var windowHeight = $(window).height();
	var windowScrollBottom = (windowScrollTop + windowHeight);
	return windowScrollBottom;
}
function getElementScrollTop(element) {
	var offset = $(element).offset().top;
	return offset;
}
function getElementScrollBottom(element) {
	var elementScrollTop = getElementScrollTop(element);
	var elementHeight = $(element).height();
	var elementScrollBottom = (elementScrollTop + elementHeight);
	return elementScrollBottom;
}
function procaccillaxEffect(element, windowScrollTop, windowScrollBottom, elementScrollTop, elementScrollBottom, rate) {
	var keyValue = windowScrollBottom - elementScrollTop; // without this, translateY affects all subsequent parallax divs
	var translate = (keyValue/(rate*10)).toFixed(2); // round to two decimal points for better performance (src: https://medium.com/@dhg/parallax-done-right-82ced812e61c#.uys7dhw3x)
	$(element).css({'transform' : 'translateY(' + translate + '%)'});
}
function procaccillax(containerID, bgImgUrl, rate) {
	var windowScrollTop;
	var windowScrollBottom;
	var elementScrollTop;
	var elementScrollBottom;
	$(document).ready(function() {
		var container = ('#' + containerID);
		$(container).css({'position' : 'relative'});
		$(container).css({'height' : '100vh'});
		$(container).css({'overflow' : 'hidden'});
		$(container).append("<div id='" + containerID + "bg'></div>");
		var bg = ('#' + containerID + 'bg');
		$(bg).css({'background' : "url('" + bgImgUrl + "') no-repeat center"});
		$(bg).css({'background-size' : 'auto 200vh'});
		$(bg).css({'position' : 'absolute'});
		$(bg).css({'bottom' : '-20vh'});
		$(bg).css({'z-index' : '-1'});
		$(bg).css({'height' : '200vh'});
		$(bg).css({'width' : '100%'});
		windowScrollTop = getWindowScrollTop();
		windowScrollBottom = getWindowScrollBottom();
		elementScrollTop = getElementScrollTop(container);
		elementScrollBottom = getElementScrollBottom(container);
		// initial parallax
		if(((windowScrollTop >= elementScrollTop) && (windowScrollTop < elementScrollBottom)) 
			|| ((windowScrollBottom > elementScrollTop) && (windowScrollBottom < elementScrollBottom))){
			procaccillaxEffect(bg, windowScrollTop, windowScrollBottom, elementScrollTop, elementScrollBottom, rate);
		}
		$(window).scroll(function() {
			// call requestanimationframe() for better performance (src: https://medium.com/@dhg/parallax-done-right-82ced812e61c#.uys7dhw3x)
			window.requestAnimationFrame(function() {
				windowScrollTop = getWindowScrollTop();
				windowScrollBottom = getWindowScrollBottom();
				elementScrollTop = getElementScrollTop(container);
				elementScrollBottom = getElementScrollBottom(container);
				if(((windowScrollTop >= elementScrollTop) && (windowScrollTop < elementScrollBottom)) 
					|| ((windowScrollBottom > elementScrollTop) && (windowScrollBottom < elementScrollBottom))){
					procaccillaxEffect(bg, windowScrollTop, windowScrollBottom, elementScrollTop, elementScrollBottom, rate);
				}
			});
		});
	});
}