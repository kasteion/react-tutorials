import React from 'react';

const FormComponent = (props) => {
    return(
        <div>
            <h1>Yo!</h1>
            <form className='form' onSubmit={props.handleSubmit}> 
            <label>
                First Name: 
                <input 
                    name='firstName'
                    type='text'
                    placeholder='First Name'
                    value={props.data.firstName} 
                    onChange={props.handleChange}>
                </input>
            </label>
            <label>
                Last Name:
                <input
                    name='lastName'
                    type='text'
                    placeholder='Last Name'
                    value={props.data.lastName} 
                    onChange={props.handleChange}>
                </input>
            </label>
            <label>
                Age: 
                <input
                    name='age'
                    type='number'
                    value={props.data.age}
                    onChange={props.handleChange}
                >
                </input>
            </label>
            <div>
                <label>
                    <input
                        name='gender'
                        type='radio'
                        value='male'
                        checked={props.data.gender === 'male'}
                        onChange={props.handleChange}
                    ></input>
                     Male
                </label>
                <label>
                    <input
                        name='gender'
                        type='radio'
                        value='female'
                        checked={props.data.gender === 'female'}
                        onChange={props.handleChange}
                    ></input>
                     Female
                </label>
            </div>
            <label>
                Where are you traveling to?
                <select 
                    name='travelTo'
                    value={props.data.travelTo}
                    onChange={props.handleChange}>
                        <option value=''>--Please Choose a destination</option>
                        <option value='Guatemala'>Guatemala</option>
                        <option value='USA'>USA</option>
                        <option value='Spain'>Spain</option>
                </select>
            </label>
            <label>Do you have a special diet?</label>
            <label>
                <input
                    name='dietRestriction'
                    type='checkbox'
                    value='vegetarian'
                    checked={props.data.dietRestriction.find((element) => element === 'vegetarian' ) || false}
                    onChange={props.handleChange}
                    >    
                </input>
                Vegetarian
            </label>
            <label>
                <input
                    name='dietRestriction'
                    type='checkbox'
                    value='kosher'
                    checked={props.data.dietRestriction.find((element) => element === 'kosher' ) || false}
                    onChange={props.handleChange}
                    >    
                </input>
                Kosher
            </label>
            <label>
                <input
                    name='dietRestriction'
                    type='checkbox'
                    value='lactose free'
                    checked={props.data.dietRestriction.find((element) => element === 'lactose free' ) || false}
                    onChange={props.handleChange}
                    >    
                </input>
                Lactose Free
            </label>
            <button>Submit!</button>
            </form>
        </div>
    )
}

export default FormComponent;