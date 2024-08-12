//creating a 16 x 16 div grid through DOM methods

//calling the container div and adding it to the container variable
let container = document.querySelector("#container");
container.setAttribute("style", "width: auto; height: 500 px; display: flex; flex-direction: row; flex-wrap: wrap; align-items: center; justify-content:center;")
//using a loop to make the 16x16 div boxes
for(let i = 1; i <= 256; i++) {
    let boxdiv = document.createElement("div");
    boxdiv.setAttribute("style", "background-color: gray; padding: 30px; margin: 0px; flex-basis: 1%; flex-grow: 1;");
    boxdiv.addEventListener("mouseover", () => {
        boxdiv.style.backgroundColor = "blue";
    })
    container.appendChild(boxdiv);
}

let button = document.querySelector("#abutton");
let input = document.querySelector("#number");

button.addEventListener("click", () => {
    let num = input.value;
    if(num > 100) {

    }
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for(let i = 1; i <= num * num; i++) {
        let boxdiv = document.createElement("div");
        boxdiv.setAttribute("style", "background-color: gray; padding: 30px; margin: 0px; flex-basis: 1%; flex-grow: 1;");
        boxdiv.addEventListener("mouseover", () => {
            boxdiv.style.backgroundColor = "blue";
        })
        container.appendChild(boxdiv);
    }
})

