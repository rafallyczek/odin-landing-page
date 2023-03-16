const navSwitch = document.querySelector(".nav-switch");
const nav = document.querySelector(".primary-navigation");

navSwitch.addEventListener("click", () => {

    if(nav.getAttribute("data-hidden")=="true"){
        nav.setAttribute("data-hidden",false)
        navSwitch.setAttribute("aria-expanded",true);
    }else{
        nav.setAttribute("data-hidden",true)
        navSwitch.setAttribute("aria-expanded",false);
    }

});