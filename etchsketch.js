//creating a 16 x 16 div grid through DOM methods

//calling the container div and adding it to the container variable
let container = document.querySelector("#container");
container.setAttribute("style", "width: 1000px; height: 1000px; display: flex; flex-direction: row; flex-wrap: wrap;")
//using a loop to make the 16x16 div boxes
for(let i = 1; i <= 256; i++) {
    let boxdiv = document.createElement("div");
    boxdiv.setAttribute("style", "background-color: gray; padding: 30px; margin: 0px;");
    boxdiv.addEventListener("mouseover", () => {
        boxdiv.style.backgroundColor = "blue";
    })
    container.appendChild(boxdiv);
}

let button = document.querySelector("#abutton");

