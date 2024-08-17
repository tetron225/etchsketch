//creating a 16 x 16 div grid through DOM methods

//calling the container div and adding it to the container variable
let container = document.querySelector("#container");
container.setAttribute("style", "max-width: 1000px; max-height: 1000px; display: flex; flex-direction: row; flex-wrap: nowrap; align-items: center; justify-content:center; margin: auto; margin-top: 100px; outline-style: solid;")
//using a loop to make the 16x16 div boxes
let wh = 1000;
/*for(let i = 1; i <= 256; i++) {
    let boxdiv = document.createElement("div");
    boxdiv.setAttribute("style", "width:100 px; height:100 px; background-color: gray; padding: 30px; margin: 1px; flex-basis: 1%; flex-grow: 1;");
    boxdiv.addEventListener("mouseover", () => {
        boxdiv.style.backgroundColor = "blue";
    })
    container.appendChild(boxdiv);
}*/

for(let i = 1; i <= 16; i++) {
    let boxdiv = document.createElement("div");
    for(let j = 1; j <= 16; j++) {
        let boxdiv2 = document.createElement("div");
        
        boxdiv2.setAttribute("style", "background-color: white; padding: 0px; margin: 0px;");
        boxdiv2.style.width = 1000/16 + "px";
        boxdiv2.style.height = 1000/16 + "px";
        boxdiv2.addEventListener("mouseover", () => {
            let random = Math.random() * 255;
            boxdiv2.style.backgroundColor = `rgb(${random}, ${Math.random() * 255}, ${Math.random() * 255})`;
        })
        boxdiv.appendChild(boxdiv2);
    }
    container.appendChild(boxdiv);
}

let button = document.querySelector("#abutton");
let input = document.querySelector("#number");

button.addEventListener("click", () => {
    let num = input.value;
    if(num > 100) {
        let msg = window.prompt("Please pick a number less than 100.");
        return msg;
    }
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for(let k = 1; k <= num; k++) {
        let boxdiv = document.createElement("div");
        for(let l = 1; l <= num; l++) {
            let boxdiv2 = document.createElement("div");
            boxdiv2.setAttribute("style", "background-color: white; padding: 0px; margin: 0px;");
            boxdiv2.style.width = 1000/num + "px";
            boxdiv2.style.height = 1000/num + "px";
            boxdiv2.addEventListener("mouseover", () => {
                let random = Math.random() * 255;
                boxdiv2.style.backgroundColor = `rgb(${random}, ${Math.random() * 255}, ${Math.random() * 255})`;
            })
            boxdiv.appendChild(boxdiv2);
        }
        container.appendChild(boxdiv);
    }
});
