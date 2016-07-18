import React from 'react';
import ReactDOM from 'react-dom';
import App from './ColorSlider';
import ButtonView from './AppPart2';
import App3 from './AppPart3';
import App4 from './AppPart4';
import DynamicComponent from './DynamicComponents';
// ReactDOM.render(<ButtonView />, document.getElementById('app'))
// ReactDOM.render(<App3 />, document.getElementById('app'))
console.log("env: " + process.env.NODE_ENV);
ReactDOM.render(<DynamicComponent />, document.getElementById('app'))