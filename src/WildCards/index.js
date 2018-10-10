import React from 'react';
import styles from './index.module.scss';
import { observer } from 'mobx-react';


const WildCards = observer(props =>
    <div className={styles.wildCardContainer}>
        <div className={styles.inputCheckbox}>
            <label data-checked={props.wild[0] ? "checked" : "none"} ><input type="checkbox" onClick={() => { props.toggleWild(0) }}></input>Guild Wild Card</label>
            <label data-checked={props.wild[1] ? "checked" : "none"} ><input type="checkbox" onClick={() => { props.toggleWild(1) }}></input>Wonder Wild Card</label>
        </div>
    </div>
);

export default WildCards;