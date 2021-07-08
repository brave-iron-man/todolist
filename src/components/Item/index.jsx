import React, { Component } from 'react'
import './index.css'
import propTypes from 'prop-types'
export default class Item extends Component {
    static propTypes = {
        deleteTodo:propTypes.func.isRequired,
        updateTodo:propTypes.func.isRequired
    }
    handleDelete = (id)=>{
       this.props.deleteTodo(id)
    }
    handleUpdate = (id,done)=>{
        this.props.updateTodo(id,done)
    }
    render() {
        const {id,name,done} = this.props
        return (
            <div className="item">
                 <label>
                     <input type="checkbox" checked={done} onChange={()=>{this.handleUpdate(id,done)}}/>
                     <span>{name}</span>
                     <a href="###" onClick={()=>this.handleDelete(id)}>删除</a>
                 </label>
            </div>
        )
    }
}
