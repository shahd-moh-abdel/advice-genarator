let adviceId = document.getElementById('adviceId');
let adviceText = document.getElementById('adviceText');
let dice = document.getElementById('dice');
let devider = document.getElementById('devider') 

const url = 'https://api.adviceslip.com/advice'

async function getAdvice(){
    const response = await fetch(url);
    const adviceData = await response.json();
    adviceId.innerHTML = adviceData.slip.id;
    adviceText.innerHTML = adviceData.slip.advice;
}
getAdvice();

dice.addEventListener('click',getAdvice);

function updateImage() {
    const image = document.getElementById('responsive-image');
    if (window.innerWidth <= 375) {
        devider.src = 'images/pattern-divider-mobile.svg';
        console.log('small')
    } else {
        devider.src = 'images/pattern-divider-desktop.svg';
    }
}


updateImage();

window.addEventListener('resize', updateImage);