function changeTextZoom() {
	document.getElementById("myButton").innerHTML = "Zoom to U.S. Full Extent";
	//let's zoom all the way out
	map.fitBounds(states.getBounds());
}
