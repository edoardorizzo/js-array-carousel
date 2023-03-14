const images = [
  './assets/img/01.webp',
  './assets/img/02.webp',
  './assets/img/03.webp',
  './assets/img/04.webp',
  './assets/img/05.webp',
]

let activeImage = 0

// select the images dom element where place all element 
const imagesElement = document.querySelector('.slider > .images')

//loop over the image and add a new dom element
for (let i = 0; i < images.length; i++){
    const imgSrc = images[i];
    const imgElement = `<img class="w-100" src="${imgSrc}" alt="">`

    // insert adjacent html
    imagesElement.insertAdjacentHTML('beforeend', imgElement)
}

// listen con click up button
const upEl = document.querySelector('.up');
upEl.addEventListener('click', function(){
    console.log('cliccato prev');

    // select all slide
    const slideImagesElements = document.querySelectorAll('.slider > .images > img');
    console.log(slideImagesElements);

    //select the current slide
    const currentSlide = slideImagesElements[activeImage];
    console.log(currentSlide);

    //remove the active class from the active image
    currentSlide.classList.remove('active');

    //increment the value of the active image variable
    activeImage++ //increment the value of activeImage of 1 every time we click on the next button

    //check if the activeImage index exceeds the number of images available
    if(activeImage >= images.length) {
        activeImage = 0; //set the index to 0 to start from the beginning
    }

    //select the next slide
    const nextImage = slideImagesElements[activeImage];

    //add the active class
    console.log(nextImage);
    nextImage.classList.add('active')
}) 

// listen con click down button
const downEl = document.querySelector('.down');
downEl.addEventListener('click', function(){
    console.log('cliccato prev');

    // select all slide
    const slideImagesElements = document.querySelectorAll('.slider > .images > img');
    console.log(slideImagesElements);

    //select the current slide
    const currentSlide = slideImagesElements[activeImage];
    console.log(currentSlide);

    //remove the active class from the active image
    currentSlide.classList.remove('active');

    //increment the value of the active image variable
    activeImage-- //decrement the value of activeImage of 1 every time we click on the next button

    if(activeImage < 0) {
        activeImage = images.length - 1;
    }

    //select the next slide
    const nextImage = slideImagesElements[activeImage];

    //add the active class
    console.log(nextImage);
    nextImage.classList.add('active')
}) 