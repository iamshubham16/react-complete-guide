import React from 'react';
import './Person.css'
import Radium from 'radium'

const person = (props) => {
    const style = {
        '@media{min-widthe: 500px}' : {
            width : '450px'
        }
    };
    return (
        <div className="Person" style = {style}> 
            <p onClick = {props.click}> I am {props.name} and I am {props.age} yerars old </p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
};

export default Radium(person);