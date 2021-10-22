import React, { Component } from 'react'
import CancelIcon from '@material-ui/icons/Cancel';
import {Consumer} from '../context'

export default class Todo extends Component {
    style=()=>{
        const {complete} = this.props.todo
        return { textDecoration : complete ? "line-through" : "none"}
    }
    toggle = (id, dispatch) =>{
        dispatch ({type: "TOGGLE", payload: id})
    }
    render() {
        const {title, id} = this.props.todo
        return (
            <Consumer>{value=>{
                const {dispatch} = value
                return <h3 className="text=dar text-center p-1 bg-light border-bottom" style={this.style()}>
                <CancelIcon style={{float:"left", cursor:'pointer', color:'red'}}></CancelIcon>{title}
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                style={{float:"right", cursor:'pointer', fontSize:"medium"}} onChange={
                    this.toggle.bind(this , id, dispatch)
                }></input>
                </h3>
            }}</Consumer>
            
        )
    }
}
