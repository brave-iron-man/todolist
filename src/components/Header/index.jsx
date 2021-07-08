import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import "./index.css"
import propTypes from 'prop-types'
export default class index extends Component {
    static propTypes = {
        addTodo:propTypes.func.isRequired
    }
    handleKeyUp = (event)=>{
        const {keyCode,target} = event
        if(keyCode===13){
            let todoObj = {id:nanoid(),name:target.value,done:false}
            this.props.addTodo(todoObj)
            target.value = ""
        }
    }
    render() {
        return (
            <div className="header">
                <input className="input" type="text" placeholder="请输入你的名称，按回车键确认" onKeyUp={this.handleKeyUp}/>
            </div>
        )
    }
}
