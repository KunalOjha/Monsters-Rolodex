import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';
import { render } from '@testing-library/react';
import { useState, useEffect } from 'react';

const App = () => {
  console.log('render');
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [ monsters, setMonsters] = useState([]);
  const [ filteredMonsters, setFilteredMonsters ] = useState(monsters)

  useEffect(() => {
    // useEffect called
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(monsters =>
        setMonsters(monsters)
      );
  }, []);

  useEffect(() => {
    // useEffect called
    const newfilteredMonsters = monsters.filter(monster => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    });

    setFilteredMonsters(newfilteredMonsters);
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox className="search-box" placeholder="Search for a monster!" onChangeHandler={onSearchChange} />
      <CardList monsters={filteredMonsters} />
    </div>
    )
  }

export default App;
