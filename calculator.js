export default class Calculator {
	OPERATIONS = ["+", "-", "×", "÷","%"]
	currentExpression = "";

	constructor(result, expression) {
		this.result = result;
		this.expression = expression;
	}

	clear() {
		this.currentExpression = "";
		this.expression.innerText = "";
	}

	delete() {
		this.currentExpression = this.currentExpression.substring(
			0,
			this.currentExpression.length - 1
		);
	}

	calc() {
		this.expression.innerText = this.currentExpression;
		console.log(this.expression.innerText);
		this.currentExpression = Function(
			"return (" +
				this.currentExpression.replace("×", "*").replace("÷", "/") +
				");"
		)();
		this.render();
	}

	updateOperand(operand) {
		// Each number can have only one decimal
		if (operand === "." && this.currentExpression.includes(".")) return;
		const lastInput = this.currentExpression?.slice?.(-1);
		if (this.OPERATIONS.includes(lastInput) && this.OPERATIONS.includes(operand))
			return (this.currentExpression =
				this.currentExpression.substring(0, this.currentExpression.length - 1) +
				operand);
		this.currentExpression += operand;
	}

	render() {
		this.result.innerText = this.currentExpression;
	}
}
