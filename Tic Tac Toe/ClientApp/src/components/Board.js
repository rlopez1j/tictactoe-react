import React, { useEffect } from 'react'
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
        width: '16%',
        alignItems: 'center'
    },
    child: {
        flex: '1 1 33%',
        display: 'flex',
        justifyContent: 'center'
    },
    canvas: {
        zIndex: -1,
        position: 'absolute',
        height: '387',
        width: '16%'
    }
})

/**
 * Component to display a 3x3 tic tac toe board.
 * @param {boardState} boardState - 1x9 array representing a tic tac toe board with X and O letters
 * @param {onSquareClicked} onSquareClicked - callback function passed down as a prop to <Square> component
 */
export default function Board({ boardState, onSquareClicked, isGameDone }) {

    const drawLine = () => {
        const canvas = document.getElementById('canvas');
        const canvasContext = canvas.getContext('2d');

        let x = null
        let y = null
        let lineLength = null
        let lineEndPoint = y
        canvasContext.beginPath()
        canvasContext.moveTo(x, y)
        canvasContext.lineTo(lineLength, lineEndPoint)
        canvasContext.stroke()
        // remember to change z-index on win
    }

    useEffect(() => {
        drawLine()
    }, [])

    const classes = useStyles()
    return (<>
        <div className={classes.board}>
            <div className={classes.parent}>
                <canvas id='canvas' className={classes.canvas}></canvas>
                {boardState.map((move, i) => (
                    <div className={classes.child} key={i} >
                        <Square
                            disabled={!!isGameDone || !!move}
                            onClick={() => onSquareClicked(i)} >
                            {move}
                        </Square>
                    </div>
                ))}
            </div>
        </div>
    </>
    )
}
