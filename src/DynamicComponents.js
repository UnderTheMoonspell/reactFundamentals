import React from 'react'
import ReactDOM from 'react-dom'
import './styles/dynamiccomponent.scss'
class DynamicComponent extends React.Component{
    constructor() {
        super();
        this.state = {
            data : [
                {id:1, name:"Bernas"},
                {id:2, name:"Joao"},
                {id:3, name:"Ricardo"},
                {id:4, name:"Manel"},
                {id:5, name:"Diogo"},
                {id:6, name:"Ivo"}
            ]
        }
    }
    render(){
        let rows = this.state.data.map( person => 
        {
            return <PersonRow key={person.id} data={person}/>
        })
        return (
            <table>
                <tbody>
                    {rows}    
                </tbody>
            </table>
        )
    }
}

const PersonRow = (props) => { return <tr><td>{props.data.id}</td><td>{props.data.name}</td></tr> }

export default DynamicComponent;