// console.log("here")
// var imgs = document.querySelectorAll("img");
// var msg = "Hover over an image below."
// for (let i = 0; i < imgs.length;i++){
// 	imgs[i].onmouseover = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
// 	 	document.querySelector('#image').innerHTML= imgs[i].alt;
// 	 }
//
// 	 imgs[i].onfocus = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
// 	 	document.querySelector('#image').innerHTML= imgs[i].alt;
// 	 }
//
// 	 imgs[i].onmouseleave = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('')";
// 	 	document.querySelector('#image').innerHTML= msg;
// 	 }
//
// 	 imgs[i].onblur = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('')";
// 	 	document.querySelector('#image').innerHTML= msg;
// 	 }
// }
console.log("here");
var imgs = $(".preview");
var msg = "Hover over an image below";
for (let i = 0; i< imgs.length; i++) {
	$(imgs[i]).mouseover(function() {
		console.log("over");
		console.log(imgs);
		$("#image").css("backgroundImage", "url('"+imgs[i].src+"')");
		$("#image").text(imgs[i].alt);
	})
	$(imgs[i]).focus(function(){
		console.log("focus");
		$("#image").css("backgroundImage", "url('"+imgs[i].src+"')");
		$("#image").text(imgs[i].alt);
	})
	$(imgs[i]).mouseout(function(){
		console.log("out");
		$("#image").css("backgroundImage", "url('')");
		$("#image").text(msg);
	})
	$(imgs[i]).blur(function(){
		console.log("blur");
		$("#image").css("backgroundImage", "url('')");
		$("#image").text(msg);
	})

}
