let turnOn = document.getElementById('turnOn');
let turnOff = document.getElementById('turnOff');
let lamp = document.getElementById('lamp');

function islampbroken () {
    return lamp.src.indexOf('quebrada') > - 1
}
function lampon ()  {
    if (!islampbroken ()) {
    
 lamp.src = "./img/ligada.jpg";
    }   
}

function lampoff ()  {
    if (!islampbroken ()) {
    lamp.src = "./img/desligada.jpg";
}
}

function lampbroken () {
    lamp.src = "./img/quebrada.jpg";
        
}
turnOn.addEventListener('click',lampon);
turnOff.addEventListener('click',lampoff);
lamp.addEventListener('dblclick',lampbroken);
lamp.addEventListener('mouseover',lampon);
lamp.addEventListener('mouseleave',lampoff);