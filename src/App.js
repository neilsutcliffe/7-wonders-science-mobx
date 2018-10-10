import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styles from './App.module.scss';
import Score from './Score'
import SciencePile from './SciencePile'
import WildCards from './WildCards'
import './general.scss'


@inject('boardStore')
@observer
class App extends Component {
  render() {

    const { boardStore } = this.props;
    const { sciences, wildCardArray } = boardStore;

    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <h1>7 Wonders Science Score Calculator</h1>
        </header>

        <div className="styles.description">
          <ul className={styles.piles}>
            {
              sciences.map(science => {

                var i = sciences.indexOf(science);
                var wildcards = wildCardArray[i];

                return <SciencePile key={science.symbol}
                  symbol={science.symbol}
                  count={science.count}
                  wildcards={wildcards}
                  decrement={() => { boardStore.removeTech(science) }}
                  increment={() => { boardStore.addTech(science) }} />
              })
            }
          </ul>
        </div>
        {boardStore.optimalWildCardArray}
        <div className={styles.footer}>
          <WildCards wild={boardStore.wild} toggleWild={boardStore.toggleWild} />
          <Score total={boardStore.total} counts={boardStore.totalArray} sets={boardStore.sets} />
        </div>
      </div>
    );
  }
}

export default App;
