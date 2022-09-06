function init() {
    const button = document.querySelector(".click-btn");
    logButtonAsArrowFunction(button);
    logButtonAsDeclaredFunction(button);
}

const logButtonAsArrowFunction = button => {
    button.addEventListener("click", (event) => {
        console.log("Arrow function output");
        console.log(button)
    });
}

function logButtonAsDeclaredFunction(button) {
    button.addEventListener("click", clickHandler);
}

function clickHandler() {
    console.log("Declared function output");
    console.log(this);
}

init()
