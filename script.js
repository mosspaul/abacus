const FIVER = document.querySelector(".fiver");
const ONES = document.querySelector(".ones");

function makeRod(parentNode) {
    let rod = document.createElement("div");
    rod.setAttribute("class", "rod");
    parentNode.appendChild(rod);
}

for (let i = 0; i < 17; i++) {
    makeRod(ONES);
    makeRod(FIVER);
}