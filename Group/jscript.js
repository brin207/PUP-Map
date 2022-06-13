function showModal(imgsrc, name, description){
	let modal = document.getElementById("modal")
	modal.style.display = "block";
	modal.style.left = event.clientX + "px";
	modal.style.top = event.clientY + "px";
	modal.innerHTML = "<div id='container'><img id='pic' src='"+imgsrc+"'/><p>"+name+"</p><p>"+description+"</p></div>";
	}
function closeModal(){
	let modall = document.getElementById("modal");
	modall.style.display = "none";
	}