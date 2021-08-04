initMap = (function(){
  var myLatLng = {lat: 47.6205588, lng: -122.3212725};

  var customMapType = new google.maps.StyledMapType([
      {
        featureType: 'water',
        elementType: 'geometry.fill',
        stylers: [
          { color: '#a6a6a0' }
        ]
      },{
        featureType: "all",
        stylers: [
          { saturation: -80 },
          {lightness: 20}
        ]
      },{
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [
          { hue: "#f6f6f6" },
          { saturation: 0 }
        ]
      },{
        featureType: "poi.business",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      }

    ], {
      name: 'Custom Style'
    });
  var customMapTypeId = 'custom_style';

 //main map section
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: myLatLng,
    scrollwheel: false,
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
        }
  });

  map.mapTypes.set(customMapTypeId, customMapType);
  map.setMapTypeId(customMapTypeId);

//info window section
  var info = '<div class="map-marker-custom">' +
    '<div class="marker-img"> <img src="../assets/dist/img/company/map-info.jpg" alt=""/></div>'+
                '<div class="marker-info">'+
                  '<h4>Location</h4>'+
                  '<p class="rq-address-text">79 Orchard St,New York<br>NY 10002, USA</p>'+
                  '<p class="">(0096) 8645 234 438</p>'+
                '<div>'+
              '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: info
  });


//marker section
  var icon = '../assets/dist/img/company/map-marker.png'
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: icon,
    title: 'Hello World!'
  });

//adding event listener to marker
  marker.addListener('click', function() {
    infowindow.open(map, marker);
    var iwOuter = $('.gm-style-iw');
    var iwBackground = iwOuter.prev();
    iwBackground.children(':nth-child(2)').css({'display' : 'none'});
    iwBackground.children(':nth-child(4)').css({'display' : 'none'});
    var iwCloseBtn = iwOuter.next();
    iwCloseBtn.css({ opacity: '1', right: '40px', top: '25px' });

  });
}());
