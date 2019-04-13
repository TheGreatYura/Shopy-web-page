var mid = document.getElementById("middle");
var featuredItems = 
	document.getElementsByClassName("featured__item");
var flen = featuredItems.length;
var id = "display";

featuredItems[0].setAttribute("id", id);

document.getElementById("bottom").addEventListener("click",
	addAnimationBottom);
document.getElementById("bottom").addEventListener("click", 
	showNextItem);
document.getElementById("top").addEventListener("click", 
	addAnimationTop);
document.getElementById("top").addEventListener("click", 
	showPreviousItem);


function addAnimationTop() {
	mid.classList.add("animation_top");
	mid.addEventListener("animationend", 
		removeAnimationTop);
}

function removeAnimationTop() {
	this.classList.remove("animation_top");
}

function addAnimationBottom() {
	mid.classList.add("animation_bottom");
	mid.addEventListener("animationend", removeAnimationBottom);
}

function removeAnimationBottom() {
	this.classList.remove("animation_bottom");
}

function showNextItem() {
	let i = 0;
	for(i = 0; i < flen; i++) {
		if(i == flen - 1) {
			featuredItems[i].removeAttribute("id");
			featuredItems[0].setAttribute("id", "display")
			break;
		}
		if (featuredItems[i].id == id) {
			featuredItems[i].removeAttribute("id");
			featuredItems[i+1].setAttribute("id", "display")
			break;
		}
	}
}

function showPreviousItem() {
	let i = 0;
	for(i = 0; i < flen; i++) {
		if( i == 0 && featuredItems[i].id == id) {
			featuredItems[i].removeAttribute("id");
			featuredItems[flen-1].setAttribute("id", 
				"display"); 
			break;
		}
		if (featuredItems[i].id == id) {
			featuredItems[i].removeAttribute("id");
			featuredItems[i-1].setAttribute("id", "display")
			break;
		}
	}
}