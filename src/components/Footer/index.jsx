import React, { Component } from 'react'
import './index.css'
export default class index extends Component {
    checkAll = (event)=>{
        this.props.checkAllTodo(event.target.checked)
    }
    clearAllDone = ()=>{
        this.props.clearAllDoneTodo()
    }
    render() {
        const {todos} = this.props
        const doneCount = todos.reduce((pre,todo)=>{
            return pre+(todo.done===true?1:0)
        },0)
        const total = todos.length
        return (
            <div className="footer">
                <label>
                    <input type="checkbox" checked={doneCount===total&&total!==0?true:false} onChange={this.checkAll}/>
                    <span>已完成{doneCount}/全部{total}</span>
                    <a href="###" onClick={this.clearAllDone}>清除已完成任务</a>
                </label>
            </div>
        )
    }
}
