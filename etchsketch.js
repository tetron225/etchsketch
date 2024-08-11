//creating a 16 x 16 div grid through DOM methods

//calling the container div and adding it to the container variable
let container = document.querySelector("#container");
//using a loop to make the 16x16 div boxes
for(let i = 1; i < 17; i++) {
    let boxdiv = document.createElement("div");
    boxdiv.setAttribute("style", "background-color: gray; padding: 10px; margin: 10px;");
    container.appendChild(boxdiv);
}

