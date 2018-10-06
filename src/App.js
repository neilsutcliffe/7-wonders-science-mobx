import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import './App.scss';
import styles from './App.module.scss';
import cardStyles from './App.module.scss';


@inject('boardStore')
@observer
class App extends Component {
  render() {

    const { boardStore } = this.props;

    return (
      <div className="App">
        <div className="cssStyles.header">
          <h2>{ boardStore.appName }</h2>
        </div>

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
    <CardStack count={props.count} />
    <button onClick={props.increment}>+</button>
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
  return <div className={cardStyles.card}>{ count } </div>
}

export default App;
