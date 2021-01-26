import React from 'react';

class App extends React.Component {
    constructor(){
        super();
        
        this.state = { 
            firstName: '',
            lastName: '',
            myTextArea: '',
            isFriendly: true,
            gender: '',
            favColor: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        const {name, value, type, checked} = event.target;
        if (type === 'checkbox') {
            this.setState({ [name]: checked});
        } else
        {
            this.setState({ [name]: value});
        }
        
    }

    handleSubmit() {

    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder='First Name' onChange={this.handleInputChange} name='firstName' value={this.state.fistName}></input>
                <br />
                <input type='text' placeholder='Last Name' onChange={this.handleInputChange} name='lastName' value={this.state.lastName}></input>
                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <textarea value={this.state.myTextArea} name='myTextArea' onChange={this.handleInputChange}/>
                <br />
                <label>
                    <input type='checkbox' checked={this.state.isFriendly} name='isFriendly' onChange={this.handleInputChange}></input>
                    Is Friendly?
                </label>
                <br/>
                <label>
                    <input type='radio' name='gender' value='male' checked={this.state.gender === 'male'} onChange={this.handleInputChange}></input>
                    Male
                </label>
                <label>
                    <input type='radio' name='gender' value='female' checked={this.state.gender === 'female'} onChange={this.handleInputChange}></input>
                    Female
                </label>
                <h1>You are a {this.state.gender}</h1>
                <select value={this.state.favColor} name='favColor' onChange={this.handleInputChange}>
                    <option value='Blue'>Blue</option>
                    <option value='Red'>Red</option>
                    <option value='Green'>Green</option>
                </select>
                <h1>Your favorite color is {this.state.favColor}</h1>
                <button>Submit</button>
            </form>
        )
    }
}

export default App;