import React from "react";
import Spinner from "./components/Spinner"

 const App = () => {
    return (
    <div>
        <h4>This is a boilerplate by @jeyloh from 07.04.18</h4>
        <ol>
            <li>Using Webpack 4</li>
            <li>CSS/JS loaders are setup</li>
            <li>React 16.3.1 with babel ^6</li>
            <li>Jest testing is setup</li>
            <li></li>
        </ol>
        <h4>Additional setup required</h4>
        <ul>
            <li>Install router if needed<code>npm i react-router-dom -S</code> </li>
            <li>Setup other style components 
                <ul>
                    <li><code> npm i styled-components -S</code></li>
                    <li><code> npm i sass-loader node-sass -S</code> 
                        <a href="https://appdividend.com/2018/01/12/sass-styles-reactjs-application/">Remember the loader here</a>
                    </li>
                </ul>
            </li>
            <li>Setup state management
                <ul>
                    <li><code> npm i redux react-redux -S</code></li>
                    <li><code> npm i mobx mobx-react -S</code></li>
                </ul>
            </li>
        </ul>
        <Spinner />
        <h4> Remove this code from App.js and happy coding!</h4>
    </div>
    )
}

export default App;