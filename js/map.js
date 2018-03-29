function initMap() {
  var uluru = {
    lat: 34.8702109,
    lng: -111.7641827
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

