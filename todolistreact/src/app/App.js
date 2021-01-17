import React, {Component} from 'react';
import './App.css';
import List from '../components/list/list';
import Input from '../components/input-element/input'

class App extends Component{
  state = {
    tasks: [
      
    ],

    taskSavior : ''
  }

  //função para alterar 
  toggleStatus = (taskIndex) => {
    const tasks = [...this.state.tasks]
    const task = tasks[taskIndex]
    
    task.status === 'to do'? task.status = 'done' : task.status = 'to do'

    this.setState({tasks:tasks})
    
  }

  //função para deletar
  taskDelete = (taskIndex) => {
    const tasks = [...this.state.tasks];
    tasks.splice(taskIndex, 1);
    this.setState({tasks:tasks})
  }

  //função para salvar
  taskSave = () =>{
    //const task = 
    const tasks = [...this.state.tasks]

    tasks.push({id: this.state.tasks.length, status: 'to do', task: this.state.taskSavior})

    this.setState({tasks: tasks})
    
  }

  //função para digitar
  tipeEvent = (event) =>{
    const newtest = event.target.value

    this.setState({taskSavior : newtest})
  }

  
  render(){
    console.log()

    return(
      <div className='App'>
        <Input
          EventSave = {this.taskSave}
          
          value = {this.state.taskSavior}
          onChange = {this.tipeEvent}

        />
        <List
          tasks = {this.state.tasks}
          EventPositive = {this.toggleStatus}
          EventExclude = {this.taskDelete}
        />
      </div>
    )
  }
}

export default App;
