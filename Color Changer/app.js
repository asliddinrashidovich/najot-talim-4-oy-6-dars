const body = document.querySelector('body');
const btn = document.querySelector('button');


// random color;

const colorElements = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','f','e'];

let sixDigts = '#'

const colorFunc = () => {
    for(let i = 0; i < 6; i++) {
        let randomnum = Math.floor(Math.random() * 16);
        sixDigts += colorElements[randomnum];
    }
    body.style.backgroundColor = `${sixDigts}`
    sixDigts = '#'
}



btn.addEventListener('click', ()=>  colorFunc())