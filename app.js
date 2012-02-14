window.addEventListener('load', function() {
	var map = new L.Map('map');

	var cloudmadeUrl = 'http://{s}.tile.cloudmade.com/608b04f44fe84757a013356d5485cf43/997/256/{z}/{x}/{y}.png';
	var cloudmadeAttrib = 'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade';
	var cloudmade = new L.TileLayer(cloudmadeUrl, {maxZoom: 18, attribution: cloudmadeAttrib});

	var center = new L.LatLng(25, 0);
	map.setView(center, 2).addLayer(cloudmade);

	jQuery.getJSON('places.json', function(data) {
		var sidebar = $('#sidebar');

		for (var i = 0; i < data.length; i++) {
			var place = data[i];
			var position = new L.LatLng(place.location.latitude, place.location.longitude);
			var marker = new L.Marker(position);
			map.addLayer(marker);
			marker.bindPopup("<h1>" + place.name + "</h1><p>" + place.description + "</p>");
	
/*			sidebar.append(
				'<div>' + 
					'<h1>' + place.name + '</h1>' +
					'<p>' + place.description + '</p>' +
				'</div>'
			);
*/		}
	});
}, false);
