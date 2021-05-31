//* Global Variables *//
   var jsfileversion = "00001";
   
//* Function aiming to consolidate onload scripts into a single place, keeping the HTML cleaner *//
function domLoaded() {
   //* Add Event Listeners *//
   window.addEventListener("hashchange",function (event) {
      showMenuComponent(location.hash.substring(1,location.hash.length-5));
   })

  showMenuComponent("home");
}

function showMenuComponent(sect) {
   var elements = document.getElementsByClassName('menu-section');

   for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = 'none';
   }
   
   var x = document.getElementById(sect);
   x.style.display = 'block';
   var menuElements = document.getElementsByClassName('MenuButton');

   for (i = 0; i < menuElements.length; i++) {
      menuElements[i].style.textDecoration = '';
   }

   var y = document.getElementById(sect + 'Button');
   y.style.textDecoration = 'underline';
   document.getElementById('navbarNavDropdown').className='navbar-collapse show';
   document.getElementById('JSSerNo').textContent = '.' + jsfileversion;
   window.history.pushState("", "UAV Flight Planner Home", "#" + sect + "-Top");
   document.getElementById(sect).scrollIntoView();
}



function helpVideo() {
     //* Open Help Video in popup *//
     var win = window.open('', '_blank', "top=20,left=50,width=660,height=370");
     win.document.body.innerHTML = '<iframe width="640" height="360" src="https://www.youtube.com/embed/au0WZ7WSiQg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
}