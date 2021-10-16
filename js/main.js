

//sidebar
const mobile_menu = document.getElementById("mobile_menu");
const nav_sidebar = document.getElementById("nav_sidebar");
const navConatiner = document.getElementById("navConatiner");

//Payment
const Paymentdropdown = document.getElementById("Paymentdropdown");
const Paymentcollapse_down = document.getElementById("Paymentcollapse_down");
const Paymentcollapse__menu = document.getElementById("Paymentcollapse__menu");
const Paymentcollapse_SubLink1 = document.getElementById("Paymentcollapse_sublink1");
const Paymentcollapse_SubLink2 = document.getElementById("Paymentcollapse_sublink2");

 //Tenant
const Tenantdropdown = document.getElementById("Tenantdropdown");
const Tenantcollapse_down = document.getElementById("Tenantcollapse_down");
const Tenantcollapse__menu = document.getElementById("Tenantcollapse__menu");
const Tenantcollapse_SubLink1 = document.getElementById("Tenantcollapse_sublink1");
const Tenantcollapse_SubLink2 = document.getElementById("Tenantcollapse_sublink2");


//Apartment
const Apartmentdropdown = document.getElementById("Apartmentdropdown");
const Apartmentcollapse_down = document.getElementById("Apartmentcollapse_down");
const Apartmentcollapse__menu = document.getElementById("Apartmentcollapse__menu");
const Apartmentcollapse_SubLink1 = document.getElementById("Apartmentcollapse_sublink1");
const Apartmentcollapse_SubLink2 = document.getElementById("Apartmentcollapse_sublink2");


//Other reports
const Otherdropdown = document.getElementById("Otherdropdown");
const Othercollapse_down = document.getElementById("Othercollapse_down");
const Othercollapse__menu = document.getElementById("Othercollapse__menu");
const Othercollapse_SubLink1 = document.getElementById("Othercollapse_sublink1");
const Othercollapse_SubLink2 = document.getElementById("Othercollapse_sublink2");
const Othercollapse_SubLink3 = document.getElementById("Othercollapse_sublink3");
 
//sidebar
let drop = true;
let Tenant = true;
let Apartment = true;
let Otherreports = true;

mobile_menu.addEventListener("click", sidebarHidden);
nav_sidebar.style.display = "none";
function sidebarHidden() {
  console.log("clicked");


  if (nav_sidebar.style.display == "block") {
    nav_sidebar.style.display = "none";
  } else {
    nav_sidebar.style.display = "block";
  }
}




if (Paymentdropdown){
Paymentdropdown.addEventListener("click",dropdownVisible);
}

if(Tenantdropdown){
  Tenantdropdown.addEventListener('click',TenantdropdownVisible);
}

if(Apartmentdropdown){
  Apartmentdropdown.addEventListener('click',ApartmentdropdownVisible);
}

if(Otherdropdown){
  Otherdropdown.addEventListener('click',OtherdropdownVisible);
}



function dropdownVisible() {
  console.log("clicked", drop);
  
  if (drop) {
    Paymentcollapse__menu.classList.remove("hidden");
    Paymentcollapse_SubLink1.classList.remove("hidden");
    Paymentcollapse_SubLink2.classList.remove("hidden");
    Paymentcollapse_down.classList.remove("collapse");
    Paymentcollapse_down.classList.add("collapseBg");
    Paymentcollapse__menu.classList.add("collapse__menu");
    Paymentcollapse_SubLink1.classList.add("collapse_sublink");
    Paymentcollapse_SubLink2.classList.add("collapse_sublink");
    drop = false;
  } else {
    Paymentcollapse__menu.classList.add("hidden");
    Paymentcollapse_SubLink1.classList.add("hidden");
    Paymentcollapse_SubLink2.classList.add("hidden");
    Paymentcollapse_down.classList.remove("collapseBg");

    drop = true;
  }
}
 
//Tenant
function TenantdropdownVisible() {
  console.log("clicked", Tenant);
  
  if (Tenant) {
    Tenantcollapse__menu.classList.remove("hidden");
    Tenantcollapse_SubLink1.classList.remove("hidden");
    Tenantcollapse_SubLink2.classList.remove("hidden");
    Tenantcollapse_down.classList.remove("collapse");
    Tenantcollapse_down.classList.add("collapseBg");
    Tenantcollapse__menu.classList.add("collapse__menu");
    Tenantcollapse_SubLink1.classList.add("collapse_sublink");
    Tenantcollapse_SubLink2.classList.add("collapse_sublink");
    Tenant = false;
  } else {
    Tenantcollapse__menu.classList.add("hidden");
    Tenantcollapse_SubLink1.classList.add("hidden");
    Tenantcollapse_SubLink2.classList.add("hidden");
    Tenantcollapse_down.classList.remove("collapseBg");
    Tenantcollapse_down.classList.add("collapse");
    Tenant = true;
  }
}

//Apartment
function ApartmentdropdownVisible() {
  console.log("clicked", Apartment);
  
  if (Apartment) {
    Apartmentcollapse__menu.classList.remove("hidden");
    Apartmentcollapse_SubLink1.classList.remove("hidden");
    Apartmentcollapse_down.classList.remove("collapse");
    Apartmentcollapse_down.classList.add("collapseBg");
    Apartmentcollapse__menu.classList.add("collapse__menu");
    Apartmentcollapse_SubLink1.classList.add("collapse_sublink");
    
    Apartment = false;
  } else {
    Apartmentcollapse__menu.classList.add("hidden");
    Apartmentcollapse_SubLink1.classList.add("hidden");
    Apartmentcollapse_down.classList.remove("collapseBg");
    Apartmentcollapse_down.classList.add("collapse");

    Apartment = true;
  }
}


//Other Reports

function OtherdropdownVisible() {
  console.log("clicked", Otherreports);
  
  
  if (Otherreports) {
    Othercollapse__menu.classList.remove("hidden");
    Othercollapse_SubLink1.classList.remove("hidden");
    Othercollapse_SubLink2.classList.remove("hidden");
    Othercollapse_SubLink3.classList.remove("hidden");
    Othercollapse_down.classList.remove("collapse");
    Othercollapse_down.classList.add("collapseBgOther");    
    Othercollapse__menu.classList.add(".collapse__menu");
    Othercollapse_SubLink1.classList.add("collapse_sublinkOther");
    Othercollapse_SubLink2.classList.add("collapse_sublinkOther");
    Othercollapse_SubLink3.classList.add("collapse_sublinkOther");
    
    Otherreports = false;
  } else {
    Othercollapse__menu.classList.add("hidden");
    Othercollapse_SubLink1.classList.add("hidden");
    Othercollapse_SubLink2.classList.add("hidden");
    Othercollapse_SubLink3.classList.add("hidden");
    Othercollapse_down.classList.remove("collapseBgOther");
    Othercollapse_down.classList.add("collapse");

    Otherreports = true;
  }
}
 
//nav
const master = document.getElementById("master");
const process = document.getElementById("process");
const report = document.getElementById("report");
const settings = document.getElementById("settings ");


