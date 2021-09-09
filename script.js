import Calculator from "./calculator.js";

// Define all buttons
const numbers = document.querySelectorAll("[data-operand]");
const result = document.querySelector(".result");
const expression = document.querySelector(".expression");
const clear = document.querySelector("[data-clear]");
const del = document.querySelector("[data-del]");
const operations = document.querySelectorAll("[data-operation]");

// Add click event for each number
numbers.forEach(number => {
	number.addEventListener("click", e => {
		calculator.updateOperand(e.target.innerText);
		calculator.render();
	});
});

// Add click event for clear operation
clear.addEventListener("click", e => {
	calculator.clear();
	calculator.render();
});

// Add click event for delete operation
del.addEventListener("click", e => {
	calculator.delete();
	calculator.render();
});

// Add click event for each operation
operations.forEach(operation => {
	operation.addEventListener("click", e => {
		const button = e.target;
		if (button.innerText === "+/-") return;
		if (button.innerText === "=") return calculator.calc();
		calculator.updateOperand(button.innerText);
		calculator.render();
	});
});

// Add keyboard event for each button
document.addEventListener("keydown", e => {
	if (!isNaN(parseInt(e.key))) {
		calculator.updateOperand(e.key);
		calculator.render();
		// quit listener
		return;
	}

	switch (e.key) {
		case "=":
		case "Enter":
			calculator.calc();
			break;
		case "%":
		case "-":
		case "+":
			calculator.updateOperand(e.key);
			calculator.render();
			break;
		case "*":
			calculator.updateOperand("×");
			calculator.render();
			break;
		case "/":
			calculator.updateOperand("÷");
			calculator.render();
			break;
		case "Backspace":
			calculator.delete();
			calculator.render();
			break;
		case "Escape":
			calculator.clear();
			calculator.render();
			break;
		default:
			console.log(e);
	}
});
const calculator = new Calculator(result, expression);
