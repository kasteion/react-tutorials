import React from 'react';

import Header from './components/Header';
import TodoItem from './components/TodoItem';

import todoData from './todoData';

import './style.css';

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            todoList: todoData
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id){
        //console.log(id)
        this.setState(prevState => {
            return {
                todoList: prevState.todoList.map((todo) => {
                    if (todo.id === id) {
                        todo.completed = !todo.completed;
                    }
                    return todo;
                })
            }
        })
    }
    
    render(){
        return(
            <div>
                <Header/>
                <div className="todo-list">
                    {
                        this.state.todoList.map((todo) => {
                            return <TodoItem key={todo.id} task={todo} handleChange={this.handleChange}></TodoItem>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default App;