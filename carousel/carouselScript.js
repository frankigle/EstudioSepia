/* nosotros */
const nosotrosButtonLeft = document.getElementById("nosotrosButtonLeft");
const nosotrosButtonRight = document.getElementById("nosotrosButtonRight");
const nosotrosCarousel = document.getElementById("nosotrosCarousel");
const nosotrosContent = document.getElementById("nosotrosContent");
/* shelter */
const shelterButtonLeft = document.getElementById("shelterButtonLeft");
const shelterButtonRight = document.getElementById("shelterButtonRight");
const shelterCarousel = document.getElementById("shelterCarousel");
const shelterContent = document.getElementById("shelterContent");
/* domes */
const domesButtonLeft = document.getElementById("domesButtonLeft");
const domesButtonRight = document.getElementById("domesButtonRight");
const domesCarousel = document.getElementById("domesCarousel");
const domesContent = document.getElementById("domesContent");
/* bricks */
const bricksButtonLeft = document.getElementById("bricksButtonLeft");
const bricksButtonRight = document.getElementById("bricksButtonRight");
const bricksCarousel = document.getElementById("bricksCarousel");
const bricksContent = document.getElementById("bricksContent");
/* Array de imagenes carousel */
const nosotrosCarouselImg = ['url(./pictures/Casa-prefabricada-madera.webp)', 'url(./pictures/medioambiente-300x162.jpg)', 'url(./pictures/SuiteDomeInside-Webp.webp)'];
const shelterCarouselImg = ['url(./pictures/preFabric/preFabricadaBackClose.jpg)', 'url(./pictures/preFabric/preFabricadaBackk.jpg)', 'url(./pictures/preFabric/preFabricadaFrente.jpg)'];
const domesCarouselImg = ['url(./pictures/domos/domoChillingCordillera.jpg)', 'url(./pictures/domos/domoEvent.jpg)', 'url(./pictures/domos/domoHabitacionSalamandra.jpg)'];
const bricksCarouselImg = ['url(./pictures/bricks/bricksDuplex.jpg)', 'url(./pictures/bricks/bricksHouse.jpg)', 'url(./pictures/bricks/bricksHouse1.jpg)'];
/* estructura Carousel */
const textNosotrosMovile = ['<h1>Nosotros</h1>', '<h3> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>', '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam alias dolorum minima sapiente exercitationem eaque, ab ea harum tempora quae temporibus sed voluptas, odio magnam aliquid accusamus hic, nulla ipsum.</p>'];
const textShelterMovile = ['<h1>Shelter</h1>', '<h3> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>', '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam alias dolorum minima sapiente exercitationem eaque, ab ea harum tempora quae temporibus sed voluptas, odio magnam aliquid accusamus hic, nulla ipsum.</p>'];
const textBricksMovile = ['<h1>Bricks</h1>', '<h3> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>', '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam alias dolorum minima sapiente exercitationem eaque, ab ea harum tempora quae temporibus sed voluptas, odio magnam aliquid accusamus hic, nulla ipsum.</p>'];
const textDomesMovile = ['<h1>Domes</h1>', '<h3> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>', '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam alias dolorum minima sapiente exercitationem eaque, ab ea harum tempora quae temporibus sed voluptas, odio magnam aliquid accusamus hic, nulla ipsum.</p>'];
const textNosotros = [`<h1>Nosotros</h1>
        <h3> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam alias dolorum minima sapiente exercitationem eaque, ab ea harum tempora quae temporibus sed voluptas, odio magnam aliquid accusamus hic, nulla ipsum.</p>`, `<h1>Nosotros 2</h1>
        <h3> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam alias dolorum minima sapiente exercitationem eaque, ab ea harum tempora quae temporibus sed voluptas, odio magnam aliquid accusamus hic, nulla ipsum.</p>`, `<h1>Nosotros 3</h1>
        <h3> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam alias dolorum minima sapiente exercitationem eaque, ab ea harum tempora quae temporibus sed voluptas, odio magnam aliquid accusamus hic, nulla ipsum.</p>`];
const textShelter = [`<h1>Shelter</h1>
        <h3> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam alias dolorum minima sapiente exercitationem eaque, ab ea harum tempora quae temporibus sed voluptas, odio magnam aliquid accusamus hic, nulla ipsum.</p>`, `<h1>Shelter 2</h1>
        <h3> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam alias dolorum minima sapiente exercitationem eaque, ab ea harum tempora quae temporibus sed voluptas, odio magnam aliquid accusamus hic, nulla ipsum.</p>`, `<h1>Shelter 3</h1>
        <h3> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam alias dolorum minima sapiente exercitationem eaque, ab ea harum tempora quae temporibus sed voluptas, odio magnam aliquid accusamus hic, nulla ipsum.</p>`];
const textDomes = [`<h1>Domes</h1>
        <h3> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam alias dolorum minima sapiente exercitationem eaque, ab ea harum tempora quae temporibus sed voluptas, odio magnam aliquid accusamus hic, nulla ipsum.</p>`, `<h1>Domes 2</h1>
        <h3> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam alias dolorum minima sapiente exercitationem eaque, ab ea harum tempora quae temporibus sed voluptas, odio magnam aliquid accusamus hic, nulla ipsum.</p>`, `<h1>Domes 3</h1>
        <h3> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam alias dolorum minima sapiente exercitationem eaque, ab ea harum tempora quae temporibus sed voluptas, odio magnam aliquid accusamus hic, nulla ipsum.</p>`];
const textBricks = [`<h1>Bricks</h1>
        <h3> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam alias dolorum minima sapiente exercitationem eaque, ab ea harum tempora quae temporibus sed voluptas, odio magnam aliquid accusamus hic, nulla ipsum.</p>`, `<h1>Bricks 2</h1>
        <h3> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam alias dolorum minima sapiente exercitationem eaque, ab ea harum tempora quae temporibus sed voluptas, odio magnam aliquid accusamus hic, nulla ipsum.</p>`, `<h1>Bricks 3</h1>
        <h3> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam alias dolorum minima sapiente exercitationem eaque, ab ea harum tempora quae temporibus sed voluptas, odio magnam aliquid accusamus hic, nulla ipsum.</p>`];

let nosotrosIndex = 0;
let shelterIndex = 0;
let domesIndex = 0;
let bricksIndex = 0;
/* contenido inicial */
/* nosotrosContent.innerHTML = `<h1>Nosotros</h1>
        <h3> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam alias dolorum minima sapiente exercitationem eaque, ab ea harum tempora quae temporibus sed voluptas, odio magnam aliquid accusamus hic, nulla ipsum.</p>`
shelterContent.innerHTML = `<h1>Shelter</h1>
        <h3> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam alias dolorum minima sapiente exercitationem eaque, ab ea harum tempora quae temporibus sed voluptas, odio magnam aliquid accusamus hic, nulla ipsum.</p>`;
domesContent.innerHTML = `<h1>Domes</h1>
        <h3> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam alias dolorum minima sapiente exercitationem eaque, ab ea harum tempora quae temporibus sed voluptas, odio magnam aliquid accusamus hic, nulla ipsum.</p>`;
bricksContent.innerHTML = `<h1>Bricks</h1>
        <h3> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam alias dolorum minima sapiente exercitationem eaque, ab ea harum tempora quae temporibus sed voluptas, odio magnam aliquid accusamus hic, nulla ipsum.</p>`; */
/* Responsive */
function myFunction(x) {
        if (x.matches) { // If media query matches
                nosotrosContent.innerHTML = `<h1>Nosotros</h1>`;
                shelterContent.innerHTML = `<h1>Shelter</h1>`;
                domesContent.innerHTML = `<h1>Domes</h1>`;
                bricksContent.innerHTML = `<h1>Bricks</h1>`;
                
                /* Nosotros */
                nosotrosButtonRight.addEventListener("click", () => { nosotrosIndex = changeBackgroundRight(nosotrosIndex, nosotrosCarouselImg, nosotrosCarousel, nosotrosContent, textNosotrosMovile) });
                nosotrosButtonLeft.addEventListener("click", () => { nosotrosIndex = changeBackgroundLeft(nosotrosIndex, nosotrosCarouselImg, nosotrosCarousel, nosotrosContent, textNosotrosMovile) });

                /* Shelter */
                shelterButtonRight.addEventListener("click", () => { shelterIndex = changeBackgroundRight(shelterIndex, shelterCarouselImg, shelterCarousel, shelterContent, textShelterMovile) });
                shelterButtonLeft.addEventListener("click", () => { shelterIndex = changeBackgroundLeft(shelterIndex, shelterCarouselImg, shelterCarousel, shelterContent, textShelterMovile) });

                /* Domes */
                domesButtonRight.addEventListener("click", () => { domesIndex = changeBackgroundRight(domesIndex, domesCarouselImg, domesCarousel, domesContent, textDomesMovile) });
                domesButtonLeft.addEventListener("click", () => { domesIndex = changeBackgroundLeft(domesIndex, domesCarouselImg, domesCarousel, domesContent, textDomesMovile) });

                /* Bricks */
                bricksButtonRight.addEventListener("click", () => { bricksIndex = changeBackgroundRight(bricksIndex, bricksCarouselImg, bricksCarousel, bricksContent, textBricksMovile) });
                bricksButtonLeft.addEventListener("click", () => { bricksIndex = changeBackgroundLeft(bricksIndex, bricksCarouselImg, bricksCarousel, bricksContent, textBricksMovile) });
        } else {
                /* Nosotros */
                nosotrosButtonRight.addEventListener("click", () => { nosotrosIndex = changeBackgroundRight(nosotrosIndex, nosotrosCarouselImg, nosotrosCarousel, nosotrosContent, textNosotros) });
                nosotrosButtonLeft.addEventListener("click", () => { nosotrosIndex = changeBackgroundLeft(nosotrosIndex, nosotrosCarouselImg, nosotrosCarousel, nosotrosContent, textNosotros) });

                /* Shelter */
                shelterButtonRight.addEventListener("click", () => { shelterIndex = changeBackgroundRight(shelterIndex, shelterCarouselImg, shelterCarousel, shelterContent, textShelter) });
                shelterButtonLeft.addEventListener("click", () => { shelterIndex = changeBackgroundLeft(shelterIndex, shelterCarouselImg, shelterCarousel, shelterContent, textShelter) });

                /* Domes */
                domesButtonRight.addEventListener("click", () => { domesIndex = changeBackgroundRight(domesIndex, domesCarouselImg, domesCarousel, domesContent, textDomes) });
                domesButtonLeft.addEventListener("click", () => { domesIndex = changeBackgroundLeft(domesIndex, domesCarouselImg, domesCarousel, domesContent, textDomes) });

                /* Bricks */
                bricksButtonRight.addEventListener("click", () => { bricksIndex = changeBackgroundRight(bricksIndex, bricksCarouselImg, bricksCarousel, bricksContent, textBricks) });
                bricksButtonLeft.addEventListener("click", () => { bricksIndex = changeBackgroundLeft(bricksIndex, bricksCarouselImg, bricksCarousel, bricksContent, textBricks) });

                nosotrosContent.innerHTML = `<h1>Nosotros</h1>
                <h3> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam alias dolorum minima sapiente exercitationem eaque, ab ea harum tempora quae temporibus sed voluptas, odio magnam aliquid accusamus hic, nulla ipsum.</p>`
                shelterContent.innerHTML = `<h1>Shelter</h1>
                <h3> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam alias dolorum minima sapiente exercitationem eaque, ab ea harum tempora quae temporibus sed voluptas, odio magnam aliquid accusamus hic, nulla ipsum.</p>`;
                domesContent.innerHTML = `<h1>Domes</h1>
                <h3> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam alias dolorum minima sapiente exercitationem eaque, ab ea harum tempora quae temporibus sed voluptas, odio magnam aliquid accusamus hic, nulla ipsum.</p>`;
                bricksContent.innerHTML = `<h1>Bricks</h1>
                <h3> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam alias dolorum minima sapiente exercitationem eaque, ab ea harum tempora quae temporibus sed voluptas, odio magnam aliquid accusamus hic, nulla ipsum.</p>`;
        }
}

// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 768px)")

// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function () {
        myFunction(x);
});
const changeBackgroundRight = (i, image, contenedor, contentCar, textContent) => {
        i += 1;
        if (i < 3) {
                console.log(i);
                contenedor.style.backgroundImage = image[i];
                let contenido = textContent[i];
                contentCar.innerHTML = `${contenido}`;
                /* document.contentCar.appendchild(content); */
        }
        else {
                i = 0;
                contenedor.style.backgroundImage = image[i];
                let contenido = textContent[i]
                contentCar.innerHTML = `${contenido}`;
                /* document.contentCar.appendchild(contentCar); */

        }
        return i;
}
const changeBackgroundLeft = (i, image, contenedor, contentCar, textContent) => {
        i -= 1;
        if (i < 0) {
                i = 2;
                contenedor.style.backgroundImage = image[i];
                let contenido = textContent[i]
                contentCar.innerHTML = `${contenido}`;
        }
        else {
                contenedor.style.backgroundImage = image[i];
                let contenido = textContent[i]
                contentCar.innerHTML = `${contenido}`;
        }
        return i;
}

