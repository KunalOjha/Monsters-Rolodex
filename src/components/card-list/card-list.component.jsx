import { Component } from 'react';

class CardList extends Component {
    render() {
        console.log('render from CardList Component')
        const { monsters } = this.props;

        return (
            <div>
                {monsters.map((monster) => (
                    <h1>{monster.name}</h1>
                ))}
            </div>
        )
     }
}

export default CardList;

