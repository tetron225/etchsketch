//creating a 16 x 16 div grid through DOM methods

//calling the container div and adding it to the container variable
let container = document.querySelector("#container");
container.setAttribute("style", "width: 500px; height: 500px; display: flex; flex-direction: row; flex-wrap: wrap;")
//using a loop to make the 16x16 div boxes
for(let i = 1; i < 17; i++) {
    let boxdiv = document.createElement("div");
    boxdiv.setAttribute("style", "background-color: gray; padding: 50px; margin: 1px;");
    container.appendChild(boxdiv);
}

