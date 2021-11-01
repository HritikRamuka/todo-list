import React, { Component } from 'react';
import Task from './Task'

export default class TodoApp extends Component {
    constructor() {
        super()
        this.state = {
            todo: '',
            list: [],
            id: 0
        }
    }

    addTodo = e => {
        let task = e.target.value;
        this.setState(prevState => {
            const newTodo = { 
            todo: task,
            id: prevState.id + 1
            }
            return {...newTodo}
        })
    }

    deleteTodo = id => {
        this.setState(this.state.list.splice(id, 1))
    }

    onSubmit = e => {
        e.preventDefault();
        this.setState({
            todo: '',
            list: this.state.list.concat(this.state.todo)
        })
    }



    render() {
        return (
            <div className='todoList'>
                <form onSubmit={this.onSubmit} className='input'>
                    <input value={this.state.todo} onChange={this.addTodo} />
                    <button className='a-button'>Add</button>
                </form>
                {this.state.list.map((item, index) => {
                    return <Task item={item} index={index} id={index} onClick={this.deleteTodo} />
                })}
            </div>
        )
    }
}