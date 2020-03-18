import React, {Component} from 'react';
import classes from './App.module.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


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
    let persons = null;
    let btnClasses = [classes.Button];
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key = {person.id}>
                      <Person 
                        click = {() => this.deletePersonHandler(index)}
                        name = {person.name}
                        age = {person.age} 
                        changed = {(event) => this.nameChangedHandler(event, person.id)}/>
                    </ErrorBoundary>    
          })}
        </div>
      );
      btnClasses.push(classes.Red);
    } 
    
    const assignedClasses = [];
    if(this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }
    return (
        <div className = {classes.App}>
          <h1>Hello, My name is Shubham</h1>
          <p className={assignedClasses.join(' ')}>Is this working???</p>
          <button
            className = {btnClasses.join(' ')}
            onClick={this.togglePersonHandler}>Toggle Person
          </button>
            {persons}              
        </div>
    );
  }
}


export default App;
