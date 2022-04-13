import { Component } from 'react';
import './card.styles.css'

class Card extends Component {
    render() {
        const { name, email, id } = this.props.monster;
        return (
            <div className='card-container'>
                <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
                <h1>{ name }</h1>
                <h2>{ email }</h2>
            </div>
        )
    }
}

export default Card;