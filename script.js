const FIVER = document.querySelector(".fiver");
const ONES = document.querySelector(".ones");
const ROD = document.createElement("div");
ROD.setAttribute("class", "rod");

for (let i = 0; i < 17; i++) {
    ONES.appendChild(ROD);
    FIVER.appendChild(ROD);
}