import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClasses = [classes.Button];

    if(props.showPersons) {
        btnClasses.push(classes.Red);
    }

  
    if(props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if(props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div>
            <h1>{props.appName}</h1>
            <p className={assignedClasses.join(' ')}>Is this working???</p>
            <button
                className = {btnClasses.join(' ')}
                onClick={props.togglePersonHandler}>Toggle Person
            </button>
        </div>  
    );

};

export default cockpit;