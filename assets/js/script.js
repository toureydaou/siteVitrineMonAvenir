
const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
const body = document.querySelector('body')
const slides = document.querySelectorAll('.slide')
const images = document.querySelectorAll('.carousel-image')



body.style.overflow = 'hidden'

let load = 0

let int = setInterval(blurring, 20)


function blurring() {
    load++

    if (load > 99) {
        clearInterval(int)
        body.style.overflowY = 'scroll'
        loadText.style.display = 'none';
    }


    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`

}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min) / (in_max - in_min)) + out_min
}












let j = 0;

function imageSuiv() {
    images.forEach(image => {
        if (image.classList.value === 'carousel-image active') {
            image.classList.remove('active')
            
        }
    });

    j++;

    if (j > images.length - 1) {
        j = 0;
    }

    images[j].classList.add('active')   
}



function imagePred() {
    images.forEach(image => {
        if (image.classList.value === 'carousel-image active') {
            image.classList.remove('active')
            
        }
    });

    j--;

    if (j < 0) {
        j =  images.length - 1;
    }

    images[j].classList.add('active')   
}





setInterval(imageSuiv, 10000)