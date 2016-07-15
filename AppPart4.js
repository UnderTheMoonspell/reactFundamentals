import React from 'react';
import ReactDOM from 'react-dom'

//serve para atribuit funcionalidades comuns adiferentes componentes
//recebe um inner component e devolve um novo componente(stateless) que recebe como props
//as props e o state definidos no mixin (o aux e o val do Button veem do state do Mixin, o txt vem da prop da App)
let Mixin = LALALAComponent => class extends React.Component{
    constructor(){
        super();
        this.state = { val: 0, aux: "Auxiliar" };
        this.update = this.update.bind(this);
    }
    update(){
        this.setState({val: this.state.val + 1});
    }
    render(){
        return (
            <LALALAComponent 
            update={this.update}
            {...this.state}
            {...this.props} />
        )
    }
}

const Button = (props) => <button onClick={props.update}>{props.txt} - {props.val} - {props.aux}</button>
const Label = (props) => <label onMouseMove={props.update}>{props.txt} - {props.val}</label>

let ButtonMixed = Mixin(Button), 
    LabelMixed = Mixin(Label);

class App4 extends React.Component{
    render(){
        return (
            <div>
                <ButtonMixed txt="Button"/>
                <LabelMixed txt="Label"/>
            </div>    
        );
    }
}

export default App4
