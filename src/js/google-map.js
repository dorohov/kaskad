/*function initMap() {     
	var coordMapOfficeOne = {lat: 52.980467, lng: 36.049066},
		zoomMapOfficeOne = 17, 
		styleMapOfficeOne = [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry","stylers":[{"lightness":"0"},{"saturation":"4"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#c7dae2"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#7bc3e4"}]}],
		optionsMapOfficeOne = {
			zoom: zoomMapOfficeOne,
			center: new google.maps.LatLng(coordMapOfficeOne.lat, coordMapOfficeOne.lng),
			//scrollwheel: false,	
			//styles: styleMapOfficeOne
		},
		idOfficeOne = document.getElementById('map-kaskad'),
		mapOfficeOne = new google.maps.Map(idOfficeOne, optionsMapOfficeOne),		
		//iconOfficeOne = '/img/default/icon-map.png',
		iconOfficeOne = {        
	        path: "M71.3,236.2C-11,236.2-78,303.2-78,385.5c0,34,11.1,66,32.2,92.5c27.3,34.4,106.6,116,109.9,119.5l7.2,7.4 l7.2-7.4c3.4-3.5,82.7-85.1,110-119.5c21-26.5,32.2-58.5,32.2-92.5C220.6,303.2,153.7,236.2,71.3,236.2z M172.8,465.6	c-22,27.7-80.9,89.3-101.5,110.6C50.8,554.9-8.1,493.3-30.1,465.6c-18.2-23-27.9-50.7-27.9-80.1c0-71.3,58-129.3,129.3-129.3 c71.3,0,129.3,58,129.3,129.3C200.6,414.9,191,442.6,172.8,465.6z M71.3,295.5c-48.7,0-88.4,39.6-88.4,88.4s39.6,88.4,88.4,88.4 s88.4-39.6,88.4-88.4S120.1,295.5,71.3,295.5z M71.3,452.2C33.6,452.2,3,421.6,3,383.9c0-37.7,30.7-68.4,68.4-68.4 s68.4,30.7,68.4,68.4C139.7,421.6,109,452.2,71.3,452.2z",
	        fillColor: '#399fda',
	        strokeColor: '#000000',
	        fillOpacity: 1,
	        //anchor: new google.maps.Point(200,350),
	        anchor: new google.maps.Point(100,450),
	        strokeWeight: 0,
	        scale: 0.2
	    },
	    iconCoordOfficeOne = {lat: 52.980551, lng: 36.049066}, 
	    OfficeOne = new google.maps.Marker({
			position: iconCoordOfficeOne,
			map: mapOfficeOne,
			icon: iconOfficeOne
		});
};
$(function () {
	$(document.body).on('shown.bs.modal', '.modal', {}, function(event){
		event.preventDefault();
		$(window).trigger('resize');      
	});  
});
*/
function initMap() {  
  var map_container_div_id = 'map-google';
  var cont = $('#' + map_container_div_id);  
  var CMS__TPL_PATH = '/wp-content/themes/azbn7theme';  
  if(cont.length) {    
    var map_data = JSON.parse(cont.attr('data-map') || '{}');
    var coordMapOfficeOne = map_data.center;
    var zoomMapOfficeOne = map_data.zoom; 
    var styleMapOfficeOne = [{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry","stylers":[{"lightness":"0"},{"saturation":"4"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#c7dae2"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"poi.business","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#7bc3e4"}]}],
        optionsMapOfficeOne = {
          zoom: zoomMapOfficeOne, 
          center: new google.maps.LatLng(coordMapOfficeOne[0], coordMapOfficeOne[1]), 
          //styles: styleMapOfficeOne
        }, 
      idOfficeOne = document.getElementById(map_container_div_id),
      mapOfficeOne = new google.maps.Map(idOfficeOne, optionsMapOfficeOne);
      var iconOfficeOne = {        
	        path: "M31.9913 0C17.6639 0 6 11.6301 6 25.9159C6 31.8177 7.93237 37.3724 11.6056 41.9723C16.3582 47.9436 30.1634 62.1079 30.7379 62.7155L31.9913 64L33.2447 62.7155C33.8366 62.1079 47.6418 47.9436 52.3944 41.9723C56.0502 37.3724 58 31.8177 58 25.9159C57.9826 11.6301 46.3361 0 31.9913 0ZM49.6612 39.8199C45.8313 44.6282 35.5775 55.3209 31.9913 59.0182C28.4225 55.3209 18.1687 44.6282 14.3388 39.8199C11.1704 35.8275 9.48175 31.0193 9.48175 25.9159C9.48175 13.5395 19.5788 3.47166 31.9913 3.47166C44.4037 3.47166 54.5008 13.5395 54.5008 25.9159C54.5008 31.0193 52.8296 35.8275 49.6612 39.8199ZM31.9913 10.2935C23.5132 10.2935 16.6019 17.1673 16.6019 25.6382C16.6019 34.109 23.4958 40.9829 31.9913 40.9829C40.4868 40.9829 47.3806 34.109 47.3806 25.6382C47.3806 17.1673 40.4868 10.2935 31.9913 10.2935ZM31.9913 37.4939C25.4282 37.4939 20.1011 32.1823 20.1011 25.6382C20.1011 19.0941 25.4456 13.7651 32.0087 13.7651C38.5718 13.7651 43.9163 19.0941 43.9163 25.6382C43.8989 32.1823 38.5544 37.4939 31.9913 37.4939Z",
	        fillColor: '#399fda',
	        strokeColor: '#000000',
	        fillOpacity: 1,
	        //anchor: new google.maps.Point(200,350),
	        anchor: new google.maps.Point(32,64),
	        strokeWeight: 0,
	        //scale: 0.2
	    };
      if(map_data.placemarks.length) {
        for(var i = 0; i < map_data.placemarks.length; i++) {
          var iconCoordOfficeOne = {lat: map_data.placemarks[i].coord[0],  lng: map_data.placemarks[i].coord[1]}, 
          OfficeOne = new google.maps.Marker({
            position: iconCoordOfficeOne,
            map: mapOfficeOne,
            icon: iconOfficeOne,
            title: map_data.placemarks[i].title,
              //animation: google.maps.Animation.DROP
          });
        }
      }
      
      $(document.body).on('click.azbn7', '.azbn__office__map__set-center-btn', null, function(event){
        event.preventDefault();
        var btn = $(this);
        var coord = btn.attr('data-coord');
        var coord_arr = coord.split(',');
        console.dir(coord_arr);
        mapOfficeOne.setCenter({
          lat : parseFloat((coord_arr[0] || '').trim()),
          lng : parseFloat((coord_arr[1] || '').trim()),
        });
        
      });
      
    
  }
  
}; 
$(function () {
  $(document.body).on('shown.bs.modal', '.modal', {}, function(event){
    event.preventDefault();
    $(window).trigger('resize');    
  });  
});