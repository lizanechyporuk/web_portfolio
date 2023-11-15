<!-- script.js -->
/*eslint-env browser*/

function moveYear(forward) {
	var list = document.getElementById('dates').getElementsByTagName('a');

	var el = null;

	for (var i = 0; i < list.length; i++) {
		if (list[i].classList.contains('active')) {
			el = list[i];

			break;
		}
	}

	var li = el?.closest('li');

	if (!li) {
		return;
	}

	var link = null;

	if (forward) {
		link = li.nextElementSibling?.getElementsByTagName('a');
	} else {
		link = li.previousElementSibling?.getElementsByTagName('a');
	}

	if (link && link.length) {
		link[0].click();
	}
}

function uaShowHidden (){
	var uaHideNumber = document.getElementById("ua-hide-number");
	var uaAddCircle = document.getElementById("ua-add-circle");
	if(uaHideNumber.innerHTML === "**********"){
		uaHideNumber.innerHTML = "0689827158";
		uaAddCircle.innerHTML = "cancel";
		uaAddCircle.style.color = "black";
	} else{
		uaHideNumber.innerHTML = "**********";
		uaAddCircle.innerHTML = "add_circle";
		uaAddCircle.style.color = "#ce93d8";
	}
}

function plShowHidden (){
	var plHideNumber = document.getElementById("pl-hide-number");
	var plAddCircle = document.getElementById("pl-add-circle");
	if(plHideNumber.innerHTML === "*********"){
		plHideNumber.innerHTML = "791321609";
		plAddCircle.innerHTML = "cancel";
		plAddCircle.style.color = "black";
	} else{
		plHideNumber.innerHTML = "*********";
		plAddCircle.innerHTML = "add_circle";
		plAddCircle.style.color = "#ce93d8";
	}
}

document.getElementById("next").onclick = function(event) {event.preventDefault(); moveYear(true);};
document.getElementById("prev").onclick = function(event) {event.preventDefault(); moveYear(false);};
document.getElementById("ua-add-circle").onclick = function() {uaShowHidden();};
document.getElementById("pl-add-circle").onclick = function() {plShowHidden();};
document.getElementById("next").style.transition ="all 0.5s";
document.getElementById("prev").style.transition ="all 0.5s";

var list = document.getElementById("dates").getElementsByTagName("a");
var issuesElements = document.getElementById("issues").getElementsByTagName("li");
	
for(var i=0; i<list.length; i++){
	list[i].addEventListener("click", function(e){
		e.preventDefault();
		var url = new URL(e.target.href);
		url = url.hash.substr(1);
		
		for(var j=0; j<issuesElements.length; j++){
			if(issuesElements[j].id != url){
				issuesElements[j].classList.add("d-none");
			} else{
				issuesElements[j].className = issuesElements[j].className.replace("d-none", "");
			}
		}
		
		for(var j = 0; j < list.length; j++) {
			list[j].classList.remove('active');
		}

		e.target.classList.add('active');
	});	
}

