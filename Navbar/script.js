const navToggle = document.getElementById('navToggle')
const links = document.getElementById("links")
var linksOn = 0
navToggle.addEventListener('click',
function() {
  if(linksOn == 0){
    links.classList.add('show-links')
    linksOn = 1
  }
  else {
    links.classList.remove('show-links')
    linksOn = 0
  }
})
