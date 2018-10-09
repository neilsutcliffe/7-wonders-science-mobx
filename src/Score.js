import React from 'react';
import scoreStyle from './Score.module.scss'

export default ({ total, counts, sets }) => {
	var whiteBoard = [];
	counts.forEach(count => {
		whiteBoard.push(<li className={scoreStyle.scoreComponent}>{count}²</li>)
		whiteBoard.push(<Plus />)
	});

	whiteBoard.push(<li className={scoreStyle.scoreComponent}>{sets} x 7</li>)

	return (
		<div className={scoreStyle.scoreContainer}>
			<ul className={scoreStyle.equation}>{whiteBoard}

			</ul>
			<div className={scoreStyle.bigScore}>Total: {total}</div>

		</div>
	)
}

const Plus = () => <li className={scoreStyle.plus}>+</li>