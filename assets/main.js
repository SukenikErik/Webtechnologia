var openbutton = document.getElementById("left-button");
var sidebar = document.getElementById("sidebar");
var closebutton = document.getElementById("closingButton");

openbutton.addEventListener("click", () => {
    sidebar.style.width = '250'+"px";
    openbutton.style.marginLeft = '250'+"px";
    openbutton.style.opacity = '0';
    sidebar.style.left = '0';
    
});

closebutton.addEventListener("click", () => {
    sidebar.style.width = '0'+"px";
    openbutton.style.marginLeft = '0'+"px";
    openbutton.style.opacity = '1';
    sidebar.style.left = '-10'+"px";
})

const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {
    constructor(container, items, controls){
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateGallery(){
        this.carouselArray.forEach(e1 => {
            e1.classList.remove('gallery-item-1');
            e1.classList.remove('gallery-item-2');
            e1.classList.remove('gallery-item-3');
            e1.classList.remove('gallery-item-4');
            e1.classList.remove('gallery-item-5');
        });

        this.carouselArray.slice(0, 5).forEach((e1, i) => {
            e1.classList.add(`gallery-item-${i+1}`);
        });
    }

    setCurrentState(direction){
        if(direction.className == 'gallery-controls-previous'){
            this.carouselArray.unshift(this.carouselArray.pop());
        }
        else{
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateGallery();
    } 

    setControls(){
        this.carouselControls.forEach(control => {
            galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
            

        });
    }

    useControls(){
        const triggers = [...galleryControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
exampleCarousel.useControls();

document.getElementById("form-button").onclick = function(){
    location.href = "assets/form.html"
}

document.getElementById("info-button").onclick = function(){
    location.href = "assets/aboutme.html"
}