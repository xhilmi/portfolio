 var mymap = L.map('mapid').setView([-7.7131214,110.6170972], 13);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiaGlsbWlhZmlmaSIsImEiOiJjam42N3A2amUzc25nM3BuMWoyejJ5ejU1In0.hbJ8dvuwneK9eJXgUfqr2A'
    }).addTo(mymap);

    var marker = L.marker([-7.7131214,110.6170972]).addTo(mymap);

    var circle = L.circle([-7.7131214,110.6170972], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(mymap);

    var polygon = L.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047]
    ]).addTo(mymap);

    marker.bindPopup("<b>Hilmi's House</b><br>OMG!").openPopup();
    circle.bindPopup("<b><i>Hit X Button.</i></b>");
    polygon.bindPopup("This Is Polygon.");

    var popup = L.popup()
      .setLatLng([-7.7131214,110.6170972])
      .setContent("Come Here Now!")
      .openOn(mymap);

    var popup = L.popup();
    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("<b>Coordinate :</b> " + e.latlng.toString())
            .openOn(mymap);
    }
    mymap.on('click', onMapClick);