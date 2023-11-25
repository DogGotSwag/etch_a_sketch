function createGrid( numberOfSquaresPerSide ){
    let fragment = new DocumentFragment();

    let container = document.createElement("div");
    container.style.cssText = "border: solid 2px black; width: 480px; height: 480px; display: flex; flex-wrap: wrap;";

    let html = document.querySelector('html');
    html.style.cssText = "height: 100%;";
    let body = document.querySelector("body");

    body.style.cssText = "height: 100%; display: flex; align-items: center; justify-content: center; flex-direction: column;"
    fragment.appendChild(container);



    for(let i = 0; i < numberOfSquaresPerSide*numberOfSquaresPerSide; i++){
        let pixelsPerSquare = 480/numberOfSquaresPerSide;
        let gridBox = document.createElement('div');
        gridBox.style.cssText = `box-sizing: border-box; width: ${pixelsPerSquare}px; height: ${pixelsPerSquare}px; border: 1px solid black;`;

        gridBox.addEventListener('mouseover', () =>{
            gridBox.style.cssText += "background-color: black;";
        })
        container.appendChild(gridBox);
    }
    
    return fragment;
}

let body = document.querySelector('body');

let button = document.createElement('button');
button.textContent = "Change Size";
button.style.cssText = 'margin-bottom: 100px;';

button.addEventListener('click', () =>{
    let newSize = prompt("How many sqaures per side?");
});

body.appendChild(button);
body.appendChild( createGrid(16) );