
import './App.css';
import  calculatorLogo  from './imagenes/logocalculator.png';
import Boton from './componentes/Boton';
import Screen from './componentes/screen';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs'; // tenemos que instalar esta libreria su pagina es mathjs.org esto sirve para javascript y nodejs

function App() {

  const [ input, setInput ] = useState('');

  const addInput = (val) =>{
    setInput(input + val);  
  };

  const calculateResult = ()=>{
    if (input){
      setInput(evaluate(input));
    } else {
      alert('Ingrese valores para calcularlos')
    }
  };
  return (
    <div className="App">
      <div className="Calculator-logo-container">
        <img 
          src={calculatorLogo}
          className="Calculator-logo"
          alt="Logo de mi calculadora"
        />
      </div>
      <div className="container-calculator">
        <Screen input={input}/>
        <div className="fila">
          <Boton handlerClick={addInput}>1</Boton>
          <Boton handlerClick={addInput}>2</Boton>
          <Boton handlerClick={addInput}>3</Boton>
          <Boton handlerClick={addInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton handlerClick={addInput}>4</Boton>
          <Boton handlerClick={addInput}>5</Boton>
          <Boton handlerClick={addInput}>6</Boton>
          <Boton handlerClick={addInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton handlerClick={addInput}>7</Boton>
          <Boton handlerClick={addInput}>8</Boton>
          <Boton handlerClick={addInput}>9</Boton>
          <Boton handlerClick={addInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton handlerClick={calculateResult}>=</Boton>
          <Boton handlerClick={addInput}>0</Boton>
          <Boton handlerClick={addInput}>.</Boton>
          <Boton handlerClick={addInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear handlerClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
