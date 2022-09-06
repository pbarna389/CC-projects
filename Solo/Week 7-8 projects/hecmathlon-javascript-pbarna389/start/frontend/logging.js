
import hECMAthlon from "./script.js";

const loadEvent = () => {

    const maxValueBtn = document.querySelector(".maxValue__btn");
    const greaterThanBtn = document.querySelector(".greaterThan__btn");
    const fizzBuzzBtn = document.querySelector(".fizzBuzz__btn");

    const maxValueInput = document.querySelector(".maxValue__input");
    const greaterThanInput = document.querySelector(".greaterThan__input");
    const fizzBuzzInput = document.querySelector(".fizzBuzz__input");

    const maxValueRoot = document.querySelector(".maxValue__container");
    const greaterThanRoot = document.querySelector(".greaterThan__container");
    const fizzBuzzRoot = document.querySelector(".fizzBuzz__container");

    maxValueBtn.addEventListener("click", () => {
        let maxValue = getOutput(hECMAthlon.getMaxValue(maxValueInput.value));
        logResult(maxValueRoot, maxValue);
    });
    greaterThanBtn.addEventListener("click", () => {
        let greaterValues = getOutput(
            hECMAthlon.getGreaterThan(greaterThanInput.value)
        );
        logResult(greaterThanRoot, greaterValues);
    });
    fizzBuzzBtn.addEventListener("click", () => {
        let result = getOutput(hECMAthlon.fizzBuzz(fizzBuzzInput.value));
        logResult(fizzBuzzRoot, result);
    });

    const getOutput = output => {
        // let returnValue = ["The function starts"];
        // for (var i = 0; i < output.length; i++) {
        // 	returnValue.push(output[i]);
        // }
        // returnValue.push("The function ends");
        // return returnValue;
        return ["The function starts", `${[...output]}`, "The function ends"]
    }

    // function getOutputMap(output) {
    // 	// let returnValue = ["The function starts"];
    // 	// for (var i = 0; i < output.length; i++) {
    // 	// 	returnValue.push(output[i]);
    // 	// }

    // 	// returnValue.push("The function ends");
    // 	// return returnValue;
    // 	return ["The function starts", output, "The function ends"]
    // }

    const logResult = (place, values) => {
        while (place.firstChild) {
            place.firstChild.remove();
        }
        for (let j = 0; j < values.length; j++) {
            place.insertAdjacentHTML("beforeend", "<div>" + values[j] + "</div>");
        }
    }
}
loadEvent();
