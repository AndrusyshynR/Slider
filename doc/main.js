var data = [
    '../img/slide-1.jpg',
    '../img/slide-2.jpg',
    '../img/slide-3.jpg',
    '../img/slide-4.jpg',
    '../img/slide-5.jpg',
]

function Slider (images, id) {

    this.index = 0;
    this.length = images.length;

    this.sliderRight =function () {
        this.index++;

        if (this.index > this.length-1){
            this.index = 0;
        } 
        
        this.img.src = images[this.index];
    }.bind(this)

    this.sliderLeft = function () {
        this.index--;

        if (this.index < 0) {
            this.index = this.length -1;
        }

        this.img.src = images[this.index];
    }.bind(this)

    this.init = function () {
        // get element by id slider
        this.container = document.querySelector(id);
        //sozdanie html dokum
        this.wrap = document.createElement('i');
        this.img = document.createElement('img');
        this.btnRight = document.createElement('i');
        this.btnLeft = document.createElement('i');
        //set events for buttons
        this.btnRight.onclick = this.sliderRight;
        this.btnLeft.onclick = this.sliderLeft;

        // set default images
        this.img.src = images[this.index];
    }

    this.render = function () {
        this.wrap.className = 'slider';
        this.btnLeft.innerHTML = '<';
        this.btnRight.innerHTML = '>';

        this.wrap.appendChild(this.btnLeft);
        this.wrap.appendChild(this.img);
        this.wrap.appendChild(this.btnRight);

        this.container.appendChild(this.wrap);
    }
    
}

var slider = new Slider(data, '#slider');
slider.init();
slider.render();

