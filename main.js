const mobile_menu = document.getElementById("mobile_menu");
const nav_sidebar = document.getElementById("nav_sidebar");
const dropdown = document.getElementById("dropdown");
const collapse_down = document.getElementById("collapse_down");
const collapse__menu = document.getElementById("collapse__menu");
const collapse_SubLink1 = document.getElementById("collapse_sublink1");
const collapse_SubLink2 = document.getElementById("collapse_sublink2");
const collapse_SubLink3 = document.getElementById("collapse_sublink3");

let drop = true;

mobile_menu.addEventListener("click", sidebarHidden);
nav_sidebar.style.display = "block";
dropdown.addEventListener("click", dropdownVisible);

function sidebarHidden() {
  console.log("clicked");
  
  if (nav_sidebar.style.display == "block") {
    nav_sidebar.style.display = "none";
  } else {
    nav_sidebar.style.display = "block";
  }
}

function dropdownVisible() {
  console.log("clicked", drop);

  if (drop) {
    collapse__menu.classList.remove("hidden");
    collapse_SubLink1.classList.remove("hidden");
    collapse_SubLink2.classList.remove("hidden");
    collapse_SubLink3.classList.remove("hidden");
    collapse_down.classList.add("collapseBg");
    collapse__menu.classList.add("collapse__menu");
    collapse_SubLink1.classList.add("collapse_sublink");
    collapse_SubLink2.classList.add("collapse_sublink");
    collapse_SubLink3.classList.add("collapse_sublink");

    drop = false;
  } else {
    collapse__menu.classList.add("hidden");
    collapse_SubLink1.classList.add("hidden");
    collapse_SubLink2.classList.add("hidden");
    collapse_SubLink3.classList.add("hidden");
    collapse_down.classList.remove("collapseBg");

    drop = true;
  }
}
