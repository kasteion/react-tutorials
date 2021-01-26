import React from 'react';

const completedStyle = {
    opacity: 0.6,
    fontStyle: 'italic'
}
class TodoItem extends React.Component {
    constructor(props){
        super(props)

        //this.state = {
        //    task: props.item
        //}

        //this.handleChange = this.handleChange.bind(this);
    }

    //handleChange(){
        // this.setState(
        //     prevState => {
        //         return {
        //             task: {
        //                 ...prevState.task,
        //                 completed: !prevState.task.completed
        //             }
        //         }
        //     }
        // )
    //}

    render(){
        return (
            <div className="todo-item">
                <div>
                    <input type="checkbox" id={`task${this.props.task.id}`} name={`task${this.props.task.id}`} value={`task${this.props.task.id}`} onChange={() => this.props.handleChange(this.props.task.id)} checked={this.props.task.completed ? true : false}/>
                    <label htmlFor={`task${this.props.task.id}`} style={this.props.task.completed ? completedStyle : {}}>
                        {
                            this.props.task.completed ? <s>{this.props.task.text}</s> : this.props.task.text
                        }
                    </label>
                </div>
                <hr className="todo-item"/>
            </div>
        );
    }
}

export default TodoItem;