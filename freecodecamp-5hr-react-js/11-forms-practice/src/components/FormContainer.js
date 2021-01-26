import React from 'react';

import FormComponent from './FormComponent';

class Form extends React.Component {
    constructor(){
        super();

        this.state = {
            firstName: '',
            lastName: '',
            age: 0,
            gender: '',
            travelTo: '',
            dietRestriction: [ ]
        };

        this.handleChange = this.handleChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const {name, type, value, checked} = event.target;
        if (type === 'radio' ){
            let val = checked ? value : '';
            this.setState({[name]: val})
        } else if ( type === 'checkbox'){
            let val = this.state.dietRestriction;
            const index = val.indexOf(value);
            if (index > -1){
                val.splice(index, 1);
            } else {
                val.push(value);
            }
            this.setState({[name]: val})
        } else {
            this.setState({[name]: value})
        }
    }

    handleSubmit(event){
        event.prevent
        alert(
            `First name: ${this.state.firstName} \nLast name: ${this.state.lastName}`
            + `\nAge: ${this.state.age}\nGender: ${this.state.gender}\ntravelTo: ${this.state.travelTo}`
            + `\nDiet: ${this.state.dietRestriction}`);
    }

    render(){
        return(
            <FormComponent 
            handleChange = {this.handleChange}
            handleSubmit = {this.handleSubmit}
            data = {this.state}
        />
        )
    }
}

export default Form;