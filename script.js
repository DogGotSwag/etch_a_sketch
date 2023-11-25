let container = document.createElement("div");
container.style.cssText = "border: solid 2px black";

let html = document.querySelector('html');
html.style.cssText = "height: 100%;";
let body = document.querySelector("body");

body.style.cssText = "height: 100%; display: flex; align-items: center; justify-content: center;"
body.appendChild(container);