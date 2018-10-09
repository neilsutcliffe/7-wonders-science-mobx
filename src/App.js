import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styles from './App.module.scss';
import Score from './Score'
import SciencePile from './SciencePile'
import './general.scss'


@inject('boardStore')
@observer
class App extends Component {
  render() {

    const { boardStore } = this.props;

    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <h2>7 Wonders Science Calculator</h2>
        </header>

        <div className="styles.description">
          <ul className={styles.piles}>
            {
              boardStore.sciences.map(science => {
                return <SciencePile key={science.symbol}
                  count={science.count}
                  decrement={() => { boardStore.removeTech(science) }}
                  increment={() => { boardStore.addTech(science) }} />
              })
            }
          </ul>
        </div>
        <Score total={boardStore.total} counts={boardStore.countArray} sets={boardStore.sets} />
      </div>
    );
  }
}

export default App;
