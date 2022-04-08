import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };

    console.log('constructor runs...')
  }

  // Runs when component mounts. Mounting is when the component first gets placed on the DOM. Only happens once. 
  // Typically API calls should go here.
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users =>
        this.setState(() => {
          return { monsters: users }
        }));

        console.log('componentDidMount runs...')
  }

  render() {
    console.log('render runs...')
    return (
      <div className="App">
        {this.state.monsters.map(monster => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
