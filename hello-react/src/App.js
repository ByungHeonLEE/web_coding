/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    /*
    const name = "react";
    return <div>hello {name}!</div>;
    */
    /*
    //false일 때 아무것도 보여주지 않고 싶을 때
    return <div>{1 + 1 === 2 && <div>맞다!</div>}</div>;
    */
    /*
   //3항연산자를 이용함(false 값)
    return <div>{1 + 2 === 2 ? <div>맞아요!</div> : <div>틀려요!</div>}</div>;
    */
    const value = 1;
    const style = {
      backgroundColor: "black",
      padding: "16px",
      color: "white",
      fontSize: "12px",
    };
    return (
      // <div>
      //   {(function () {
      //     if (value === 1) return <div className="App">하나</div>;
      //     if (value === 2) return <div>둘</div>;
      //     if (value === 3) return <div>셋</div>;
      //   })()}
      // </div>
      <div className="App">리액트</div>
    );
  }
}

export default App;
