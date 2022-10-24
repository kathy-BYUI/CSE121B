console.log('funciona');
function outputMenu(data) {
	const listElement = document.getElementById('cont-menu');
	listElement.innerHTML += `
	<nav>
		<a id=${data.location} href="#" target="_blank" name=${data.location} onClick=reset()>${data.location}</a>
	</nav>
	<label for="btn-menu">✖️</label>
	`;
}

async function getMenu() {
	const response = await fetch(
		'https://byui-cse.github.io/cse121b-course/week05/temples.json'
	);
	const data = await response.json();

	let locations = {};
	let uniqueLocations = temples.filter(function (data) {
		return locations[data.location] ? false : (locations[data.location] = true);
	});

	temples = uniqueLocations;
	console.log(uniqueLocations);
	temples.forEach(outputMenu);
}
getMenu();
