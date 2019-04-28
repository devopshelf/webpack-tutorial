// import { sum } from './sum';
// import "./image-viewer";

// console.log(sum(1,7));

const button = document.createElement('button');
button.innerText = "Click";

button.onclick = () => {
    System.import('./image-viewer')
    .then(module => {
        console.log(module);
    })
}

document.body.appendChild(button);