window.addEventListener('load', function() {
	wax.tilejson('http://api.tiles.mapbox.com/v2/mapbox.geography-class.jsonp', function(tilejson) {
		var map = new L.Map('map');
		map.addLayer(new wax.leaf.connector(tilejson));

		var center = new L.LatLng(25, 0);
		map.setView(center, 2);

		jQuery.getJSON('places.json', function(data) {
			var sidebar = $('#sidebar');

			for (var i = 0; i < data.length; i++) {
				var place = data[i];
				var position = new L.LatLng(place.location.latitude, place.location.longitude);
				var marker = new L.Marker(position);
				map.addLayer(marker);
				marker.bindPopup("<h1>" + place.name + "</h1><p>" + place.description + "</p>");

			}
		});
	});
}, false);
