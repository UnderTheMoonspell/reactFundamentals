import React from 'react';
import ReactDOM from 'react-dom'

class App3 extends React.Component{
    constructor(){
        super();
        this.state = { increasing : false};
        this.update = this.update.bind(this);
    }
    update(){
        ReactDOM.render(<App3 val={this.props.val + 1}/>, document.getElementById('app'));
    }
    componentWillReceiveProps(nextProps){
        this.setState({increasing: nextProps.val > this.props.val});
    }
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.val % 5 === 0;
    }
    render(){
        console.log(this.state.increasing);
        return (
            <button onClick={this.update}>{this.props.val}</button>
        )
    }
    componentDidUpdate(prevProps, prevState){
        console.log(prevProps);
    }
}

App3.defaultProps = {val : 0}

export default App3