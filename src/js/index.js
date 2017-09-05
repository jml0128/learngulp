
window.onload = function(){
	//阻止默认事件
	function defaultEvent(e) {
		e.preventDefault();
	}
	//阻止移动端滑动事件
   document.addEventListener("touchmove",defaultEvent,false);
}