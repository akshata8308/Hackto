import Todo from './Todo'
import React, { Component } from 'react'
import {Consumer} from '../context'

export default class todos extends Component {
    render() {
        return (
           <Consumer>{ value=>{
            const { todos } = value
            return todos.map(t=><Todo todo={t} key={t.id}></Todo>) 
           }}</Consumer>
          
        )
    }
}
