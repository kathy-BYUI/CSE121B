let temples = [];

function outputHome(data) {
	const listElement = document.getElementById('container-card');
	listElement.innerHTML += `
	<div class="card">
		<figure>
			<img src='${data.imageUrl}'>
		</figure>
		<div class="contenido-card">
			<h3>${data.templeName}</h3>
			<h4>Dedication Date:</h4><h4>${data.dedicated}</h4>
			<a href=${data.imageUrl} target="_blank">View Full Screen</a>
		</div>
	</div>`;
}

async function getTemples() {
	const response = await fetch(
		'https://byui-cse.github.io/cse121b-course/week05/temples.json'
	);
	const data = await response.json();
	temples = data;
	console.log(temples);
	temples.forEach(outputHome);
}
getTemples();
