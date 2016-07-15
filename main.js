import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import ButtonView from './src/AppPart2';
import App3 from './src/AppPart3';
import App4 from './src/AppPart4';
// ReactDOM.render(<ButtonView />, document.getElementById('app'))
// ReactDOM.render(<App3 />, document.getElementById('app'))
console.log("env: " + process.env.NODE_ENV);
ReactDOM.render(<App4 />, document.getElementById('app'))