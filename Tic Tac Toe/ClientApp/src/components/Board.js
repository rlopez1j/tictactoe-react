import React, { useState } from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import Square from './Square';

const useStyles = makeStyles({
    turnDisplay: {
        display: 'flex',
        justifyContent: 'center',
        fontWeight: 'bold'
    },
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

const Board = ({ turnGiven }) => {
    const classes = useStyles()
    const [turn, changeTurn] = useState(turnGiven)
    const [parentSwitchedChanged, setParentSwitchChanged] = useState(false)
    if (turnGiven != turn && !parentSwitchedChanged) {
        changeTurn(turnGiven)
        setParentSwitchChanged(true)
    }
    console.log('given: ', turnGiven, ' actual: ', turn)

    const createBoard = () => {
        let html = []
        for (let i = 0; i < 9; i++)
            html.push(<div className={classes.child} key={i}><Square turn={turn} alternateTurn={() => alternateTurn()} /></div>)
        return html
    }

    const alternateTurn = () => {
        changeTurn(!turn)
        console.log('new turn ', turn)
    }

    return (<>
        <Typography variant="h1" className={classes.turnDisplay}>
            {!turn ? 'X' : 'O'}
        </Typography>
        <div className={classes.board}>
            <div className={classes.parent}>
                {createBoard()}
            </div>
        </div>
    </>)
}

export default Board;