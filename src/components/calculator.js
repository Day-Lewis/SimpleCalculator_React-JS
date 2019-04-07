import React from "react";

import '../styles/buttons.scss';
import '../styles/calc.scss';
import '../styles/field.scss';

class Calculator extends React.Component {
	constructor(props) {
		super(props);
	}
    render() {
        return (
            <div className="calculator">
               <Field />
			   <ButtonsNumbers />
			   <ButtonsMath />


            </div>
        );
    }
}
class Field extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<input type="text" className='calculator__field'/>
		);
	}
}

class Button extends React.Component {
	constructor(props) {
		super(props);
	}
	handlerClick()  {
		alert(this.refs.newElem.innerHTML);
	}
	rendNumb() {
		return (
			<div ref="newElem"  className={this.props.nameClass} data-number={this.props.data}>{this.props.children}</div>
		);
	}
	rendMath() {
		return (
			<div ref="operation" className={this.props.nameClass} data-math={this.props.data}>{this.props.children}</div>
		);
	}
	render() {
		if(this.props.data === 'number') {
			return this.rendNumb();
		} else if(this.props.data  === 'math') {
			return this.rendMath();
		}
	}
}


class ButtonsNumbers extends React.Component {
	constructor(props) {
		super(props);
	}

	
	render() {
		return (
			<div className="calculator__buttons_numbers">
			   <Button  ref="newElem" nameClass="calculator__buttons_one" data="number">1</Button>
			   <Button nameClass="calculator__buttons_two" data="number">2</Button>
			   <Button nameClass="calculator__buttons_three" data="number">3</Button>
			   <Button nameClass="calculator__buttons_four" data="number">4</Button>
			   <Button nameClass="calculator__buttons_five" data="number">5</Button>
			   <Button nameClass="calculator__buttons_six" data="number">6</Button>
			   <Button nameClass="calculator__buttons_seven" data="number">7</Button>
			   <Button nameClass="calculator__buttons_eight" data="number">8</Button>
			   <Button nameClass="calculator__buttons_nine" data="number">9</Button>
			   <Button nameClass="calculator__buttons_zero" data="number">0</Button>
			   <Button nameClass="calculator__buttons_result" data="number">=</Button>

			  </div>
		);
	}
}

class ButtonsMath extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="calculator__buttons_math">
			<Button nameClass="calculator__buttons_add" data="math">+</Button>
			<Button nameClass="calculator__buttons_multiple" data="math" >x</Button>
			<Button nameClass="calculator__buttons_sub" data="math" >-</Button>
			<Button nameClass="calculator__buttons_divis" data="math" >/</Button>
			<Button nameClass="calculator__buttons_clear"  data="math">c</Button>

			<Button nameClass="calculator__buttons_point"  data="math">.</Button>

	
		   </div>
		);
	}
}
export default Calculator;


