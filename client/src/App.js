import React from 'react'
import Header from './components/Header'
import './App.css';
import AddTODO from './components/AddTodo'
import Todos from './components/todos'
import {Provider} from './context'


function App() {
  return (
    <Provider>
   <div className="app-container">
   <Header/>
   <AddTODO/>
   <Todos/>
   </div>
   </Provider>
  );
}

export default App;
