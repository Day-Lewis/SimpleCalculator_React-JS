
import React from "react";
import ReactDOM from "react-dom";
import Calculator from "./components/calculator.js";

ReactDOM.render(<Calculator />, document.getElementById("root"));



const field = document.querySelector('.calculator__field');
const calculator = document.querySelector('.calculator');
var firstNumber, secondNumber, operation;
function handlerClickForButtons(e) {
	var target = e.target;
	if(!target.dataset.number && !target.dataset.math) return;
	if(target.innerHTML === '=') {
		if(field.value.includes('x')) {
			field.value = field.value.replace('x', '*');
		}
		var f = new Function('', `return ${field.value}`);
		return field.value = f();
	};
	if(target.innerHTML === 'c') { return field.value = ''};
    field.value += target.innerHTML;
	

}


calculator.onmousedown = calculator.onselectstart = () => {return false};
calculator.addEventListener('click', handlerClickForButtons);

