import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styles from './App.module.scss';
import cardStyles from './Card.module.scss';
import Score from './Score'


@inject('boardStore')
@observer
class App extends Component {
  render() {

    const { boardStore } = this.props;

    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <h2>{ boardStore.appName }</h2>
        </header>

        <div className="styles.description">
          <ul className={styles.piles}>
            {
              boardStore.sciences.map(science => {
                return <SciencePile key={science.symbol} 
                count={science.count}
                decrement={() => { boardStore.removeTech(science)}}
                increment={() => { boardStore.addTech(science)}} />
              })
            }
          </ul>
          <Score total={boardStore.total}/>
        </div>
      </div>
    );
  }
}

const Total = props => {
  return <h1>0</h1>
}

const SciencePile = props => (
  <li>
    { props.count }
    <button onClick={props.decrement}>-</button>
    <button onClick={props.increment}>+</button>
    <CardStack count={props.count} />
  </li>
);

const CardStack = ({ count }) => {
  var cards = [];
  for (var i = 0; i < count; i++)
  {
    cards.push(<Card key={i} count={count}/>);
  }
  return (cards);
}



const Card = ({ count }) => {
  return <div className={cardStyles.card}><div className={cardStyles.cardInner}>{ count }</div></div>
}

export default App;
