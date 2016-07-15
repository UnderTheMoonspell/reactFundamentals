import React from 'react';
import ReactDOM from 'react-dom'

class App2 extends React.Component{
    constructor(){
        super();
        this.state = { val : 0};
        this.update = this.update.bind(this);
    }
    update(){
        this.setState({val: this.state.val +1});
    }
    componentWillMount(){
        console.log("mount");//apenas chamado uma vez
    }
    componentDidMount(){
        console.log("mounted");//apenas chamado uma vez
    }
    componentWillUnmount(){
        console.log("unmount");
    }
    render(){
        console.log('rendering');
        return (
            <button className={'display-' + this.props.visibility} onClick={this.update}>{this.state.val}</button>
        )
    }
}

class ButtonView extends React.Component{
    constructor(){
        super();
        this.state = { buttonDisplay : true};
        this.updateVisibility = this.updateVisibility.bind(this);
        this.destroyButton = this.destroyButton.bind(this);
    }
    // componentDidMount(){
    //     ReactDOM.render(<App2 visibility={this.state.buttonDisplay}/>, document.getElementById('buttonPlaceholder'));
    // }
    updateVisibility(e){
        this.setState({buttonDisplay: e.currentTarget.value});            
    }
    createButton(){
        ReactDOM.render(<App2 />, document.getElementById('creationButton'));
    }
    destroyButton(){
        ReactDOM.unmountComponentAtNode(document.getElementById('creationButton'));
    }    
    render(){
        return (
            <div>               
                <App2 ref="childButton" visibility={this.state.buttonDisplay}/>
                <div id="creationButton"></div>
                <hr/>
                <input type="radio" name="buttonVis" onClick={this.updateVisibility} value="true"/>Show
                <input type="radio" name="buttonVis" onClick={this.updateVisibility} value="false"/>Hide

                <input type="radio" name="buttonVis" onClick={this.createButton} value="true"/>Create
                <input type="radio" name="buttonVis" onClick={this.destroyButton} value="false"/>Destroy                
            </div>            
        )
    }
}

export default ButtonView