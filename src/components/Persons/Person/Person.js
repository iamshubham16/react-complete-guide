import React from 'react';
import classes from  './Person.module.css'


const person = (props) => {
    console.log('[person.js] rendering')
    return (
        <div className = {classes.Person}> 
            <p onClick = {props.click}> I am {props.name} and I am {props.age} yerars old </p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
};

export default person;