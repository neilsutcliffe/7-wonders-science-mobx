import React, { Component } from 'react';
import cardStyles from './Card.module.scss';
import compass from '../img/compass.svg';
import gear from '../img/gear.svg';
import tablet from '../img/tablet.svg';

export default class Card extends Component {

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
        const { symbol } = this.props;
        const style = { transform: `rotate(${this.state.rotation}deg)` }

        return (
            <div className={cardStyles.card} style={style}>
                <div className={cardStyles.cardInner}>
                    <Symbol symbol={symbol} />
                </div>
            </div >
        )
    }
}

const Symbol = ({ symbol }) => {
    switch (symbol) {
        case "tablet": return <img src={tablet} className={cardStyles.symbol} alt="tablet" />
        case "gear": return <img src={compass} className={cardStyles.symbol} alt="compass" />
        case "compass": return <img src={gear} className={cardStyles.symbol} alt="gear" />;
        default: return null;
    }
}