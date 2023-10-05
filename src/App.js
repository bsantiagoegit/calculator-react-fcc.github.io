import { evaluate } from 'mathjs';
import { useState } from 'react';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ClearButtonComponent from './components/ClearButtonComponent';
import ScreenComponent from './components/ScreenComponent';
import freeCodeCampLog from './img/freecodecamp-logo.png';

function App() {
	const [input, setInput] = useState('');

	const addInput = (value) => {
		setInput(input + value);
	};

	const calculateResult = () => {
		if (input) setInput(evaluate(input));
		else alert('Por favor ingrese los valores para hacer los cálculos');
	};

	return (
		<div className="App">
			<div className="freecodecamp-logo-container">
				<img className="freecodeCamp-logo" src={freeCodeCampLog} alt="Logo de freeCodeCamp" />
			</div>
			<div className="calculator-container">
				<ScreenComponent input={input} />
				<div className="row">
					<ButtonComponent handleClick={addInput}>1</ButtonComponent>
					<ButtonComponent handleClick={addInput}>2</ButtonComponent>
					<ButtonComponent handleClick={addInput}>3</ButtonComponent>
					<ButtonComponent handleClick={addInput}>+</ButtonComponent>
				</div>
				<div className="row">
					<ButtonComponent handleClick={addInput}>4</ButtonComponent>
					<ButtonComponent handleClick={addInput}>5</ButtonComponent>
					<ButtonComponent handleClick={addInput}>6</ButtonComponent>
					<ButtonComponent handleClick={addInput}>-</ButtonComponent>
				</div>
				<div className="row">
					<ButtonComponent handleClick={addInput}>7</ButtonComponent>
					<ButtonComponent handleClick={addInput}>8</ButtonComponent>
					<ButtonComponent handleClick={addInput}>9</ButtonComponent>
					<ButtonComponent handleClick={addInput}>*</ButtonComponent>
				</div>
				<div className="row">
					<ButtonComponent handleClick={calculateResult}>=</ButtonComponent>
					<ButtonComponent handleClick={addInput}>0</ButtonComponent>
					<ButtonComponent handleClick={addInput}>.</ButtonComponent>
					<ButtonComponent handleClick={addInput}>/</ButtonComponent>
				</div>
				<div className="row">
					<ClearButtonComponent handleClear={() => setInput('')}>Clear</ClearButtonComponent>
				</div>
			</div>
		</div>
	);
}

export default App;
