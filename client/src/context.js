import React, { Component } from 'react'
const Context = React.createContext()

const reducer = (prevState, action)=>{
    switch (action.type) {
        case "TOGGLE":
            return {
                todos: prevState.todos.map(t=>{
                    if(t.id === action.payload) {
                        t.complete = !t.complete
                    };
                return t
            })
            }
      
        default:
            return prevState
            
    }
}

export class Provider extends Component {
   state ={
       todos:[
           {
               id:1,
               title:'check emails',
               complete:false
           },
           {
            id:2,
            title:'check voice mails',
            complete:false
           },
           {
            id:3,
            title:'check report',
            complete:false
           }
        ],
    dispatch :(action)=>this.setState(prevState=> reducer(prevState,action))

       }
   
    
    render() {
        return (
            <Context.Provider value={this.state}>
            {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer