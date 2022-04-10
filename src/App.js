import { Component } from 'react';
import './App.css';

class App extends Component {
  monsters = [];

  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  };

  // Runs when component mounts. Mounting is when the component first gets placed on the DOM. Only happens once. 
  // Typically API calls should go here.
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users =>
        this.setState(() => {
          this.monsters = users;
          return { monsters: users }
        }))
  }

  render() {
    console.log('render');

    const filteredMonsters = this.state.monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' onChange={(event) => {
          const searchField = event.target.value.toLocaleLowerCase();
          this.setState(() => {
            return { searchField }
          })
        }} />
        {filteredMonsters.map(monster => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          )
        })}
      </div>
    )
  }
}

export default App;
