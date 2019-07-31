import React from 'react'
import { makeStyles } from '@material-ui/core';
import Square from './Square';

const useStyles = makeStyles({
    child: {
        flex: '1 1 33%',
        display: 'flex',
        justifyContent: 'center'
    }
})

/**
 * Component to display a 3x3 tic tac toe board.
 * @param {boardState} boardState - 1x9 array representing a tic tac toe board with X and O letters
 * @param {onSquareClicked} onSquareClicked - callback function passed down as a prop to <Square> component
 */
export default function Board({ boardState, onSquareClicked, isGameDone }) {
    const classes = useStyles()
    return (<>
        {boardState.map((move, i) => (
            <div className={classes.child} key={i} >
                <Square
                    disabled={!!isGameDone || !!move}
                    onClick={() => onSquareClicked(i)} >
                    {move}
                </Square>
            </div>
        ))}
    </>
    )
}
