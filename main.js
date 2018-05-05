// Hamburger transform to X
function hamburger(x){
    x.classList.toggle("change")
}

var menu = document.getElementById('menu')
var hamham = document.getElementById('hamham')


//Display Menu 
hamham.addEventListener('click', toggle)
var toggleOn = false;

function toggle(){
    if (toggleOn === false){
        menu.style.display = 'block';
        toggleOn = true;
    }
    else if (toggleOn === true){
        menu.style.display = "none";
        toggleOn = false;
    }
}
