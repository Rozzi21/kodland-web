const menu = document.querySelector(".navcontainer");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".humberbutton");
const closeIcon= document.querySelector(".icon-close");
const menuIcon = document.querySelector(".icon-menu");

function toggleMenu() {
  if (menu.classList.contains("show-menu")) {
    menu.classList.remove("show-menu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("show-menu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);
menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)