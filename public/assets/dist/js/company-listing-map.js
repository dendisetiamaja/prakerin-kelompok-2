initialize = (function() {
  var info2 =
    '<div class="map-marker-custom">' +
    '<div class="marker-img"> <img src="../assets/dist/img/company/map-info.jpg" alt="Map info"/></div>' +
    '<div class="marker-info">' +
    '<h4>Location</h4>' +
    '<p class="rq-address-text">79 Orchard St,New York<br>NY 10002, USA</p>' +
    '<p class="">(0096) 8645 234 438</p>' +
    '<div>' +
    '</div>';

  var locations = [
    [info2, 40.718197475736154, -74.04308003198241, 4],
    [info2, 40.69776757042028, -73.9845435024414, 5],
    [info2, 40.702973236831774, -74.0120093227539, 3],
    [info2, 40.72808486001849, -74.00917691003417, 2],
    [info2, 40.72079956137196, -73.98608845483398, 1],
    [info2, 40.69893888083242, -74.07312077294921, 6],
    [info2, 40.69086943580506, -74.01767414819335, 7],
    [info2, 40.700370454478595, -73.98025196801757, 8],
    [info2, 40.69060911485452, -73.93922489892577, 9],
    [info2, 40.676940836738595, -73.95639103662108, 10],
    [info2, 40.696271660016826, -73.91274386801751, 11],
    [info2, 40.72242660691282, -73.91188556113275, 12],
    [info2, 40.72216640928681, -73.93711978354486, 13],
    [info2, 40.707593718871706, -73.94484454550775, 14],
    [info2, 40.72658963059296, -74.08268863120111, 15],
    [info2, 40.71240826405595, -74.09607821860345, 16],
    [info2, 40.67817840000003, -74.11049777426751, 17],
  ];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: new google.maps.LatLng(40.708699, -74.01166599999999),
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });

  var infowindow = new google.maps.InfoWindow({});

  var marker, i;
  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      icon:
        '../assets/dist/img/company/listing-plain-heading/map/icon-' +
        (i % 6) +
        '.png',
      map: map,
      animation: google.maps.Animation.DROP,
    });

    google.maps.event.addListener(
      marker,
      'click',
      (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
          var iwOuter = $('.gm-style-iw');
          var iwBackground = iwOuter.prev();
          iwBackground.children(':nth-child(2)').css({ display: 'none' });
          iwBackground.children(':nth-child(4)').css({ display: 'none' });
          iwBackground.children(':first-child').css({ display: 'none' });
          //iwBackground.css({'display' : 'none'});
          var iwCloseBtn = iwOuter.next();
          iwCloseBtn.css({ opacity: '1', right: '40px', top: '25px' });
        };
      })(marker, i)
    );
  }
})();
