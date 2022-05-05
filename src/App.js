import React from 'react';
import './App.css';


import Button from './components/Button';
import Ball from "./components/Ball"
import {useState} from "react"

import { useSelector } from 'react-redux';
function App() {
    const [animate, setAnimate] = useState("")
    const getNumber = useSelector((state)=> state.counter)

    return (
        <div className="App">
            <header className="App-header">
               
                    <Ball animate={animate}>{getNumber && getNumber.number}</Ball>
                
                <div className="container">
                    <Button  setAnimate={setAnimate} valor={getNumber && getNumber.number} />
                    <Button  setAnimate={setAnimate} valor={getNumber && getNumber.number} decrease={true} />
                </div>
                
            </header>
        </div>
    );
}

export default App;
