import React, { Component } from 'react';
import cardStyles from './Card.module.scss';
import styles from './SciencePile.module.scss';

const Stack = props => {
    return (
        <li>
            <div className={styles.controls}>
                <button onClick={props.decrement} disabled={props.count <= 0}>&minus;</button>
                <span className={styles.tally}>{props.count}</span>
                <button onClick={props.increment}>+</button>
            </div>
            <CardStack count={props.count} />
        </li>
    );
}

const CardStack = ({ count }) => {


    if (count == 0) return <PlaceHolder />

    var cards = [];
    for (var i = 0; i < count; i++) {
        cards.push(<Card key={i} />);
    }
    return cards;
}

const PlaceHolder = () => <div className={cardStyles.placeHolder}></div>



class Card extends Component {

    constructor() {
        const min = -5;
        const max = 5;
        const rand = min + Math.random() * (max - min);

        super();
        this.state = {
            rotation: rand
        }
    }


    render() {
        const style = { transform: `rotate(${this.state.rotation}deg)` }

        return (
            <div className={cardStyles.card} style={style}>
                <div className={cardStyles.cardInner}></div>
            </div >
        )
    }

}

export default Stack;