
const navtoggler = document.querySelector(".nav-toggler");
navtoggler.addEventListener("click",togglenav);

function togglenav(){
    navtoggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}

document.addEventListener("click", function(e){
    if(e.target.closest(".navitem")){
        togglenav();
    }
})