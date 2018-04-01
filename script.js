var button = document.querySelectorAll(".radio");

for (var i = 0; i < button.length; i++){
	button[i].addEventListener("click", function(ev){
	console.log(ev.target);
	ev.target.classList.toggle("radioStyle");
});
}
