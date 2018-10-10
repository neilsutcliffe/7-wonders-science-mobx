import React from 'react';
import styles from './SciencePile.module.scss';
import Card from './Card';
import CardSpace from './CardSpace';

const Stack = ({ decrement, increment, count, symbol, wildcards }) => {
    return (
        <li>
            <div className={styles.controls}>
                <button onClick={decrement} disabled={count <= 0}>&minus;</button>
                <span className={styles.tally}>{count}</span>
                <button onClick={increment}>+</button>
            </div>
            <CardStack count={count} symbol={symbol} />
            <WildCardToken count={wildcards} />
        </li>
    );
}

const CardStack = ({ count, symbol, wildcards }) => {
    if (count === 0) return <CardSpace />

    var cards = [];
    for (var i = 0; i < count; i++) {
        cards.push(<Card symbol={symbol} key={i} />);
    }
    return cards;
}

const WildCardToken = ({ count }) => {
    var tokens = [];
    for (var i = 0; i < count; i++) {
        tokens.push(<li key={i}>&nbsp;</li>);
    }

    return (
        <ul className={styles.WildCardToken}>
            {tokens}
        </ul>
    )
}

export default Stack;