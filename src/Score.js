import React from 'react';
import scoreStyle from './Score.module.scss'
import './coffee.css'

export default ({ total, counts, sets }) => {
	var whiteBoard = [];
	var i = 0;
	counts.forEach(count => {
		whiteBoard.push(<li key={i++} className={scoreStyle.scoreComponent}>{count}²</li>)
		whiteBoard.push(<Plus key={i++} />)
	});

	whiteBoard.push(<li key={i++} className={scoreStyle.scoreComponent}>{sets} x 7</li>)

	return (
		<div className={scoreStyle.scoreContainer}>
			<ul className={scoreStyle.equation}>{whiteBoard}

			</ul>
			<div className={scoreStyle.bigScore}>Total <b>{total}</b></div>
			<Coffee />
		</div>
	)
}

const Plus = () => <li className={scoreStyle.plus}>+</li>

const Coffee = () => (
	<div className="bmc-container">
		<link href="https://fonts.googleapis.com/css?family=Cookie" rel="stylesheet" />
		<a className="bmc-button" target="_blank" rel="noopener noreferrer" href="https://www.buymeacoffee.com/kSXgEU9">
			<img src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg" alt="Buy me a coffee" />
			<span>Buy me a coffee</span>
		</a>
	</div>
)
