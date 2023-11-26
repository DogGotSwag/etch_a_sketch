function createGrid( numberOfSquaresPerSide ){
    let fragment = new DocumentFragment();
    
    let container = document.createElement("div");
    container.classList = "containerBox";
    container.style.cssText = "border: solid 10px black; width: 600px; height: 600px; display: flex; flex-wrap: wrap; padding: 0; background-color:black;";

    let html = document.querySelector('html');
    html.style.cssText = "height: 100%;";
    let body = document.querySelector("body");

    body.style.cssText = "height: 100%; display: flex; align-items: center; justify-content: center; flex-direction: column;"
    fragment.appendChild(container);



    for(let i = 0; i < numberOfSquaresPerSide*numberOfSquaresPerSide; i++){
        let pixelsPerSquare = 600/numberOfSquaresPerSide;
        let gridBox = document.createElement('div');
        gridBox.style.cssText = `box-sizing: border-box; width: ${pixelsPerSquare}px; height: ${pixelsPerSquare}px; border: 1px solid black; background-color:wheat;`;

        gridBox.addEventListener('mouseover', () =>{
            
            if( gridBox.classList == ''){
                let randomColor = random_rgba();
                gridBox.style.backgroundColor = 'rgba('+randomColor+')';
                gridBox.setAttribute('class', randomColor);

                let rgbaValues = gridBox.className.split(',');
                let tenPercentLess = '';
                for(let i = 0; i < rgbaValues.length; i++){
                    if( i < rgbaValues.length-1){
                        tenPercentLess += `${rgbaValues[i]/10},`
                    }
                    else{
                        tenPercentLess += `${rgbaValues[i]/10}`
                    }
                    
                }
                
                gridBox.setAttribute('id', tenPercentLess);
            }
            else{
                let currentColorValue = gridBox.className.split(',');
                let tenPerLess = gridBox.id.split(',');

                let newColor = '';
                for(let i = 0; i < currentColorValue.length; i++){
                    if( i < currentColorValue.length-1){
                        newColor += `${currentColorValue[i]-tenPerLess[i]},`
                    }
                    else{
                        newColor += `${currentColorValue[i]-tenPerLess[i]}`
                    }
                }
                gridBox.setAttribute('class', newColor);
                let setNewColor = newColor.split(',');

                gridBox.style.backgroundColor = 'rgba('+setNewColor[0] + ',' + setNewColor[1] + ',' + setNewColor[2] + ',' +setNewColor[3]+')';
                
            }
        })
        container.appendChild(gridBox);
    }
    
    body.appendChild(fragment);
}

function random_rgba() {
    let o = Math.round, r = Math.random, s = 255;
    return o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1);
}

let body = document.querySelector('body');

let button = document.createElement('button');
button.textContent = "Change Size";
button.style.cssText = 'margin-bottom: 100px;';

button.addEventListener('click', () =>{
    let newSize = prompt("How many sqaures per side?");
    if( newSize > 100){
        alert('Number too big will destroy CPU');
    }
    else{
        let container = document.querySelector('.containerBox');
        body.removeChild(container);
        createGrid(newSize);
    }
   
});

body.appendChild(button);
createGrid(16);