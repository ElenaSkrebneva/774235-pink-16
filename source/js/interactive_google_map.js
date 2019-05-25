var staticMap = document.querySelector(".contacts__map-static");
staticMap.style.display = "none";
  function myMap() {
    var myLatLng = {lat: 59.936342, lng: 30.321039};
    var map = new google.maps.Map(document.getElementById("googleMap"), {
      zoom: 15,
      center: myLatLng
    });
    var markerImage = {
      url: "../img/icon-map-marker.svg",
      scaledSize: new google.maps.Size(40, 40)
    };
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: markerImage,
      title: "Pink Map"
    });
  }
