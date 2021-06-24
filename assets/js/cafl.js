//* Global Variables *//
   var jsfileversion = "0018";
   var map;
var src1 = 'https://etiennedevaux.github.io/CAfL/assets/kml/Cycleroutes.kml';
var src2 = 'https://etiennedevaux.github.io/CAfL/assets/kml/Route_02.kml';
var src3 = 'https://etiennedevaux.github.io/CAfL/assets/kml/Route_03.kml';
   
//* Function aiming to consolidate onload scripts into a single place, keeping the HTML cleaner *//
function domLoaded() {

   //* Add Event Listeners *//
   window.addEventListener("hashchange",function (event) {
      showMenuComponent(location.hash.substring(1,location.hash.length-5));
   })

   var clapse = document.getElementsByClassName("cafl-collapse");

   for (var i=0; i < clapse.length; i++) {
      clapse[i].addEventListener("click",function () {collapseText(this.parentElement.parentElement.id);});
   }

   var xpand = document.getElementsByClassName("cafl-expand");

   for (var i=0; i < xpand.length; i++) {
      xpand[i].addEventListener("click",function () {expandText(this.parentElement.parentElement.id);});
   }

  showMenuComponent("home");
  
}

function showMenuComponent(sect) {
   var elements = document.getElementsByClassName('menu-section');

   for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = 'none';
   }
   
   var x = document.getElementById(sect);
   x.style.display = 'block';
   var menuElements = document.getElementsByClassName('cafl-nav');

   for (i = 0; i < menuElements.length; i++) {
      menuElements[i].style.textDecoration = '';
   }

   var y = document.getElementById(sect + '-button');
   y.style.textDecoration = 'underline';
   window.history.pushState("", "Clean Air", "#" + sect + "-link");
   document.getElementById('JSSerNo').textContent = '.' + jsfileversion;
 }



function helpVideo() {
     //* Open Help Video in popup *//
     var win = window.open('', '_blank', "top=20,left=50,width=660,height=370");
     win.document.body.innerHTML = '<iframe width="640" height="360" src="https://www.youtube.com/embed/au0WZ7WSiQg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}

function collapseText(sectID) {
   var paras=document.querySelectorAll("#" + sectID + "  .cafl-improve-detail")
   
   for (var j=0; j < paras.length; j++) {paras[j].style.display="none";}
   document.querySelectorAll("#" + sectID + " button.cafl-collapse")[0].style.display="none";
   document.querySelectorAll("#" + sectID + " button.cafl-expand")[0].style.display="inline";

}

function expandText(sectID) {
   var paras=document.querySelectorAll("#" + sectID + "  .cafl-improve-detail")

   for (var j=0; j < paras.length; j++) {paras[j].style.display="block";}
   document.querySelectorAll("#" + sectID + " button.cafl-collapse")[0].style.display="inline";
   document.querySelectorAll("#" + sectID + " button.cafl-expand")[0].style.display="none";

}

function initMap() {

   
  map = new google.maps.Map(document.getElementById('map'), {
    center: new google.maps.LatLng(52.289261, -1.5347124),
    zoom: 15,
    mapTypeId: 'terrain'
    });

  var kmlLayer = new google.maps.KmlLayer(src1, {
    suppressInfoWindows: false,
    preserveViewport: true,
    map: map
  });

  var customStyled = [
   {
   featureType: "poi",
   elementType: "labels",
   stylers: [
   { visibility: "off" }
   ]
   }
   ];
   map.set('styles',customStyled);   

 
}