import React, {Component} from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium'
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {id : '1', name : 'Shubham', age : '22'},
      {id : '2', name : 'Kaavya', age : '16'},
      {id : '3', name : 'Shrishti', age : '22'}
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log('Was Clicked!');
    //DON'T DO THIS : this.state.persons[0].name = 'Shubham Guglani'
    this.setState({
      persons : [
        {name : newName, age : '22'},
        {name : 'Kaavya', age : '16'},
        {name : 'Shrishti', age : '22'}
      ]
    })
  }

  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    }) ;
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons : persons
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ 
      showPersons : !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex,1);
    this.setState({
      persons : persons
    })
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
                click = {() => this.deletePersonHandler(index)}
                name = {person.name}
                age = {person.age} 
                key = {person.id}
                changed = {(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color:'black'
      }
    } 
    
    const classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red');
    }
    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }
    return (
      <StyleRoot>
        <div className = "App">
          <h1>Hello, My name is Shubham</h1>
          <p className={classes.join(' ')}>Is this working???</p>
          <button
            style = {style} 
            onClick={this.togglePersonHandler}>Toggle Person</button>
            {persons}              
        </div>
      </StyleRoot>
    );
  }
}


export default Radium(App);
