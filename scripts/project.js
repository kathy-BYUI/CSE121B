function getTests() {
	const xhttp = new XMLHttpRequest();
	xhttp.open('GET', 'global_tests.json');
	xhttp.send();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			console.log(this.responseText);
			let data = JSON.parse(this.responseText);
			console.log(data);
		}
	};
}

let temples = [];

function output(data) {
	const listElement = document.getElementById('card');
	listElement.innerHTML += `<article><h3>${data.templeName}</h3><h4>${data.location}</h4><h4>${data.dedicated}</h4><img src='${data.imageUrl}' alt='${data.imageUrl}'><article>`;
}

async function getTemples() {
	const response = await fetch(
		'https://byui-cse.github.io/cse121b-course/week05/temples.json'
	);
	const data = await response.json();
	temples = data;
	console.log(temples);
	temples.forEach(output);
}
//getTemples();
