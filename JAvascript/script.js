let turon = document.getElementById("turon");
let turof = document.getElementById("turof");
let lamp = document.getElementById("lamp");

function islampbroken () {
    return lamp.src.indexOf("quebrada") > - 1
}
function lampon ()  {
    if (!islampbroken ()) {
    
 lamp.src = "./img/ligada.jpg";
    }   
}

function lampof ()  {
    if (!islampbroken ()) {
    lamp.src = "./img/desligada.jpg";
}
}

function lampbroken () {
    lamp.src = "./img/quebrada.jpg";
        
}
turon.addEventListener("click",lampon);
turof.addEventListener("click",lampof);
lamp.addEventListener("dblclick",lampbroken);
lamp.addEventListener("mouseover",lampon);
lamp.addEventListener("mouseleave",lampof);