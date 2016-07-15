import React from 'react';
import ReactDOM from 'react-dom'
// class App extends React.Component{
//     render(){
//         return (<div>Hello <i>ma friend!</i></div>)
//     }
// }

// const App = () => <h1>Isto nao tem state ao contrario da classe anterior</h1>

class App extends React.Component{
    constructor() {
        super();
        this.state = {
            red: 0,
            green: 0,
            blue: 0,
        }
        this.update = this.update.bind(this);
    }  
    update(e) {
        this.setState(
            {
                red:  ReactDOM.findDOMNode(this.refs.red.refs.input).value,
                green:  ReactDOM.findDOMNode(this.refs.green.refs.input).value,
                blue:  ReactDOM.findDOMNode(this.refs.blue.refs.input).value
            })
    }
    getResultColorStyle(){
        debugger;
        return {
                backgroundColor: 'rgb('+this.state.red+','+this.state.green+','+this.state.blue+')',
                width: "20px", 
                height: "20px"
            }
    }        
    render() {
        return (
            <div>
                R:{this.state.red} G:{this.state.green} B:{this.state.blue}
                <br />
                Color: <div style={this.getResultColorStyle()}></div>
                <br />
                R<Slider ref="red" updateProp={this.update} />
                G<Slider ref="green" updateProp={this.update} />
                B<Slider ref="blue" updateProp={this.update} />
            </div>
        )
    }
    // render(){
    //     let props = this.props, state = this.state
    //     return (
    //     <div>
    //         <input type="text" onChange={this.update} />
    //         <h1>{state.txt}</h1>
    //     </div>)
    // }
    // render(){
    //     let props = this.props
    //     return (<div>{props.txt} : {props.cat}</div>)
    // }    
}

class Slider extends React.Component{
    render(){
        return (
            <div>
                <input type="range" ref="input"
                min="0" max="255" onChange={this.props.updateProp} />
            </div>
        );
    }
}
// const Widget = (props) => {
//     return (
//         <div>
//             <input type="text" onChange={props.update} />
//             <h1>{props.txt}</h1>
//         </div>
//     )
// }

// App.propTypes = {
//     txt: React.PropTypes.string,
//     cat: React.PropTypes.number.isRequired
// }

// App.defaultProps = {
//     txt : "defaut text",
//     cat : 4
// }

// ReactDOM.render(
//     <App cat={4} txt="teste das props com let" />, document.getElementById('app')
// );

ReactDOM.render(
    <App/>, document.getElementById('app')
);

export default App