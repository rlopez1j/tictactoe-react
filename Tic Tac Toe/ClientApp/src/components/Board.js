import React from 'react'
import { makeStyles } from '@material-ui/core';
import Square from './Square';

const useStyles = makeStyles({
    board: {
        display: 'flex',
        justifyContent: 'center'
    },
    parent: {
        display: 'flex',
        flexWrap: 'wrap',
        height: '387px',
        width: '16%'

    },
    child: {
        flex: '1 1 33%',
        display: 'flex',
        justifyContent: 'center'
    }
})

/**
 * Component to display a 3x3 tic tac toe board.
 * @param {boardState} boardState - 1x9 array representing a tic tac toe board with X and O letters
 * @param {onSquareClicked} onSquareClicked - Function that is called when a game square is clicked.
 */
export default function Board({ boardState, onSquareClicked }) {
    const classes = useStyles()
    return (
        <div className={classes.board}>
            <div className={classes.parent}>
                {boardState.map((move, i) => (
                    <div className={classes.child} key={i} >
                        <Square
                            onClick={() => onSquareClicked(i)}>
                            {move}
                        </Square>
                    </div>
                ))}
            </div>
        </div>
    )
}
