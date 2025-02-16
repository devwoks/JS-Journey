function returnChoice() {
    let choicesArray = ["left", "straight", "right"];
    let choice = choicesArray[Math.floor(Math.random() * choicesArray.length)];
    return choice;
}

let choice = returnChoice();
console.log(choice);
