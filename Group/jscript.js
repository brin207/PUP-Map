function showModal(imgsrc, name, description){
	let modal = document.getElementById("modal")
	modal.style.display = "block";
	modal.style.left = event.clientX+100 + "px";
	if(event.clientY>=563){
		modal.style.top = event.clientY-300 + "px";
	}
	else if(563>event.clientY && event.clientY >=320){
		modal.style.top = event.clientY-200 + "px";
	}
	else if(event.clientY<320){
		modal.style.top = event.clientY-50 + "px";
	}
	modal.innerHTML = "<div id='container'><img id='pic' src='"+imgsrc+"'/><p id='title'>"+name+"</p><p>"+description+"</p></div>";
	}
function closeModal(){
	let modall = document.getElementById("modal");
	modall.removeAttribute("style");
	modall.innerHTML = "";
	}