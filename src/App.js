import './App.css';
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    todos:[
      {id:'001',name:"吃饭",done:true},
      {id:'002',name:"睡觉",done:false},
      {id:'003',name:"学习",done:false},
      {id:'004',name:"逛街",done:false},
    ]
  }
  addTodo = (todoObj)=>{
    const {todos} = this.state
    let newTodos = [...todos,todoObj]
    this.setState({todos:newTodos})
  }
  updateTodo = (id,done)=>{
      const {todos} = this.state
      const newTodos = todos.map((todo)=>{
          if(todo.id===id){
            todo.done = !done
          }
          return todo
      })
      console.log(newTodos);
      this.setState({todos:newTodos})
  }
  deleteTodo = (id)=>{
    const {todos} = this.state
    const newtodos = todos.filter((item)=>{
      return item.id !== id
    })
    this.setState({todos:newtodos})
  }
  checkAllTodo = (done)=>{
      const {todos} = this.state
      const newTodos = todos.map((todo)=>{
        return {...todo,done}
      })
      this.setState({todos:newTodos})
      console.log(newTodos);
  }
  clearAllDoneTodo = ()=>{
      const {todos} = this.state
      const newTodos = todos.filter((todo)=>{
        return todo.done!==true
      })
      this.setState({todos:newTodos})
  }
  render() {
    return (
      <div className="App">
          <div className="container">
              <Header addTodo={this.addTodo}/>
              <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
              <Footer todos={this.state.todos} checkAllTodo={this.checkAllTodo} clearAllDoneTodo={this.clearAllDoneTodo}/>
          </div>
      </div>
    )
  }
}

