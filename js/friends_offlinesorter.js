function offlinesorter(url) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	xhr.onreadystatechange = validate;
	console.log(url, xhr);
	xhr.send();
}

function validate(e) {
	if(e.target.readyState == 4 && e.target.status == 200) {
		document.getElementById("response").firstChild.nodeValue = e.target.responseText;
	}
}