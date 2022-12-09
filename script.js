const FIVER = document.querySelector(".fiver");
const ONES = document.querySelector(".ones");
// General function for creating divs and classifying them
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
// counter object
let counter = {
    value: 0,
    element: document.querySelector("p"),
}
/* fiverBead constructor and first instantiation of it
TODO: make a better one that inherits from a general object and then
*/
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
// element listener for making the count
// TODO: Make the listener reversible
fiverBead.element.addEventListener("click", () => {
    fiverBead.element.parentNode.style.justifyContent = "end";
    counter.element.textContent = `Count: ${counter.value += fiverBead.value}`;
});