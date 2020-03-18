import React, {Component} from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }
  
  state = {
    persons : [
      {id : '1', name : 'Shubham', age : '22'},
      {id : '2', name : 'Kaavya', age : '16'},
      {id : '3', name : 'Shrishti', age : '22'}
    ],
    showPersons: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] component did mount');
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
    console.log('[App.js] render')
    let persons = null;
    if(this.state.showPersons) {
      persons = (
          <Persons persons={this.state.persons}
                   clicked={this.deletePersonHandler}
                   changed={this.nameChangedHandler}/>
      );
    } 
    
    
    return (
        <div className = {classes.App}>
            <Cockpit appName = {this.props.appName}
                     showPersons = {this.state.showPersons}
                     persons = {this.state.persons}
                     togglePersonHandler = {this.togglePersonHandler}/>          
            {persons}              
        </div>
    );
  }
}


export default App;
