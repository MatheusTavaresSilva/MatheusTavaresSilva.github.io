import React, {Component} from 'react';
import './App.css';
import List from '../components/list/list';

class App extends Component{
  state = {
    tasks: [
      {id: 0, status: "to do", task:"task by state"},
      {id: 1, status: "done", task:"task by state"},
    ]
  }

  funcaoTest = () => {
    alert("oi")
  }
  

  render(){


    return(
      <div className='App'>
        <List
          tasks = {this.state.tasks}
          Event = {this.funcaoTest}
        />
      </div>
    )
  }
}

export default App;
