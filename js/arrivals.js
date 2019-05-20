var arrItems = document.getElementsByClassName("arr-item");
var arrLen = arrItems.length;
var showBtn = document.getElementById("show-more");
var allArrivalsShown = false;

showBtn.addEventListener("click", handleArrivals);

window.onload = showArrivals();

for(let i = 0; i < arrLen; i++) {
	arrItems[i].addEventListener("mouseover", showMenu);
	arrItems[i].addEventListener("mouseout", hideMenu);
}

function showArrivals() {
	if(allArrivalsShown) {
		return;
	}
	var w = window.outerWidth;
	// var width = window.innerWidth
	// || document.documentElement.clientWidth
	// || document.body.clientWidth;
	// console.log(width);
	for(let i = 0; i < 4; i++) {
			arrItems[i].style.display = "block";
		}
	if(w <= 1384 && w >= 1012) {
		arrItems[3].style.display = "none";
	}
}

function handleArrivals() {
	var w = window.outerWidth;
	
	if(w <= 1384 && w >= 1012) {
		if(arrItems[3].style.display == "none") {
		for(let i = 3; i < arrLen; i++) {
			arrItems[i].style.display = "block";
		}
		allArrivalsShown = true;
	}
	else {
		for(let i = 3; i < arrLen; i++) {
			arrItems[i].style.display = "none";
		}
		allArrivalsShown = false;
	}
}
else {
		if(arrItems[4].style.display == "none") {
			for(let i = 4; i < arrLen; i++) {
				arrItems[i].style.display = "block";
			}
			allArrivalsShown = true;
		}
		else {
			for(let i = 4; i < arrLen; i++) {
				arrItems[i].style.display = "none";
			}
			allArrivalsShown = false;
		}
	}
}

function showMenu() {
	this.classList.add("arr-item__menu");
}

function hideMenu() {
	this.classList.remove("arr-item__menu");
}