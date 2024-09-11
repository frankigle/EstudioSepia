const navButton = document.querySelector("#navButton");
const options = document.querySelector("#options");
const lista = document.querySelector("#lista");
const navBar = document.querySelector("#navBar");
let count = 0;
let start = 0;
const collapsedMenu = () => {
    if(start == 0)
    {
        if (count == 0) {
            lista.style.display = 'flex';
            lista.style.position = 'fixed';
            navBar.style.flexWrap = 'wrap';
            options.style.position = 'relative'
    
            count++;
        } else {
            lista.style.display = 'none';
            count = 0;
    
        }
        start ++;
    }
    else
    {
        if (count == 0) {
            lista.style.display = 'flex';
            lista.style.position = 'fixed';
            navBar.style.flexWrap = 'wrap';
            options.style.position = 'relative'
            count++;
        } else {
            lista.style.display = 'none';
            count = 0;
        }
    }
}
const scrollNavBar = () => {
    lista.style.display = 'none';
    count = 0;
}


navButton.addEventListener("click", collapsedMenu);
window.addEventListener("scroll", scrollNavBar);

/* function myFunction(x) {
    if (x.matches) { // If media query matches
        #navButton{
                 width: 25vw;
                height: 15vh; 
            width: 25vw;
            display: block;
            background - color: black;
            color: aliceblue;
            font - size: 30px;
            opacity: 0.6;
            right: 5px;
        }
    } else {
        navButton.style.display = 'none';
        lista.style.display = 'flex';
        lista.style.flexDirection = 'row';
        lista.style.width = '60vw';
        lista.style.height = '25vh';
        options.style.width = '60vw';
        navBar.style.flexWrap = 'wrap';
        options.style.position = 'relative';
    }
}

// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 768px)")

// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function () {
    myFunction(x);
}); */
