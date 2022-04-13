import { Component } from 'react';
import  CardList from './components/card-list/card-list.component';
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
      .then(monsters =>
        this.setState(() => {
          return { monsters }
        }))
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField }
    })
  }

  render() {
    console.log('render');

    const {monsters, searchField} = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' onChange={onSearchChange} />
            <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
