const FIVER = document.querySelector(".fiver");
const ONES = document.querySelector(".ones");


function makeDiv(parentNode, cssClass, returnable) {
    let div = document.createElement("div");
    div.setAttribute("class", cssClass);
    parentNode.appendChild(div);
    if (returnable === true) {
        return parentNode.appendChild(div);
    }
}

for (let i = 0; i < 17; i++) {
    makeDiv(ONES, "rod", false);
    makeDiv(FIVER, "rod", false);
}
const FIVER_ROD = document.querySelector(".fiver > .rod");
const ONES_ROD = document.querySelector(".ones > .rod");
/*
Here I'll add the beads functionality

1. Build the beads programatically
2. Separate the fives and ones and give them the respective values
3. Make a resetter that resets the count and the ui
4. Have a rolling count that tracks the numbers
*/

let counter = {
    value: 0,
    element: document.querySelector("p"),
}


function Bead(value, cssClass, parentNode, element) {
    this.value = value;
    this.cssClass = cssClass,
    this.parentNode = parentNode,
    this.element = element
}

let fiverBead = new Bead(
    value = 5, 
    cssClass = "bead",
    parentNode = FIVER_ROD,   
    element = makeDiv(this.parentNode, this.cssClass, true),
);

fiverBead.element.addEventListener("click", () => {
    fiverBead.element.parentNode.style.justifyContent = "end";
    counter.element.textContent = `Count: ${counter.value += fiverBead.value}`;
});