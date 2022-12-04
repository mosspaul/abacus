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

/*
Here I'll add the beads functionality

1. Build the beads programatically
2. Separate the fives and ones and give them the respective values
3. Make a resetter that resets the count and the ui
4. Have a rolling count that tracks the numbers
*/