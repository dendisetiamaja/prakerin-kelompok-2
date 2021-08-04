initMap = (function(){
  var myLatLng = {lat: 47.6205588, lng: -122.3212725};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: myLatLng,
    scrollwheel: false,
  });
  var icon = '../assets/dist/img/company/map-marker.png'
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: icon,
    title: 'Hello World!'
  });
}());
