import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
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
    console.log('render from App Component');

    const {monsters, searchField} = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox className="search-box" placeholder="Search for a monster!" onChangeHandler={onSearchChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
