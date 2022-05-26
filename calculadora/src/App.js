
import './App.css';
import  calculatorLogo  from './imagenes/logocalculator.png';
import Boton from './componentes/Boton';


function App() {
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
        <div className="fila">
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>
        <div className="fila">
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>-</Boton>
        </div>
        <div className="fila">
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>*</Boton>
        </div>
        <div className="fila">
          <Boton>=</Boton>
          <Boton>0</Boton>
          <Boton>.</Boton>
          <Boton>/</Boton>
        </div>
        <div className="fila"></div>
      </div>
    </div>
  );
}

export default App;
