
function startDrag (e){
	e.dataTransfer.setData('imgCode', this.outerHTML);
	e.dataTransfer.setData('containerId', this.parentElement.id);

}

function dragEntered(e){
	e.preventDefault();
	this.style.backgroundColor = "#CDCDCD"; 
	this.style.opacity = "0.3"; 
}
function dragLeave(){
	this.style.backgroundColor = ""; 
	this.style.opacity = "1"; 
}
function endDrag(e){
	e.preventDefault();
		var leftbox =document.getElementById("leftbox");
	var rightbox =document.getElementById("rightbox");
	leftbox.style.backgroundColor = ""; 
	leftbox.style.opacity = "1"; 
	rightbox.style.backgroundColor = ""; 
	rightbox.style.opacity = "1"; 
}


function dragOvered(e){
	e.preventDefault();

}

function dropped(e){
	e.preventDefault();
	var dropSection = null;
	var sourceSection = null;
	sourceSection = document.getElementById(e.dataTransfer.getData('containerId'));
	dropSection = document.getElementById(e.currentTarget.id);


	var temp = dropSection.innerHTML;
	dropSection.innerHTML = e.dataTransfer.getData('imgCode');
	sourceSection.innerHTML = temp;
    
    dropSection.removeEventListener("dragenter", dragEntered,false);
	dropSection.removeEventListener("dragover",dragOvered,false);
	dropSection.addEventListener("dragleave", dragLeave,false);
	dropSection.removeEventListener("drop",dropped,false);

	sourceSection.addEventListener("dragenter", dragEntered,false);
	sourceSection.addEventListener("dragleave", dragLeave,false);
	sourceSection.addEventListener("dragover",dragOvered,false);
	sourceSection.addEventListener("drop",dropped,false);
	
	var dragImg = document.getElementById("dragImg");
	dragImg.addEventListener("dragstart", startDrag, false);
	dragImg.addEventListener("dragend", endDrag,false);
}

function start(){
	var dragImg = document.getElementById("dragImg");
	var leftbox =document.getElementById("leftbox");
	var rightbox =document.getElementById("rightbox");

	dragImg.addEventListener("dragstart", startDrag, false);
	dragImg.addEventListener("dragend", endDrag,false);
	leftbox.addEventListener("dragenter", dragEntered,false);
	leftbox.addEventListener("dragleave", dragLeave,false);
	leftbox.addEventListener("dragover",dragOvered,false);
	leftbox.addEventListener("drop",dropped,false);
}

