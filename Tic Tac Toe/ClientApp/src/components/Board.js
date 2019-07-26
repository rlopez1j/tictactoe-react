import React, { useState } from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import Square from './Square';
import { height } from '@material-ui/system';

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
    const [turn, changeTurn] = useState(false)

    const createBoard = () => {
        let html = []
        for (let i = 0; i < 9; i++)
            html.push(<div className={classes.child} key={i}><Square /></div>)
        return html
    }

    return (<>
        <Typography variant="h1" className={classes.turnDisplay}>
            {turnGiven === false ? 'X' : 'O'}
        </Typography>
        <div className={classes.board}>
            <div className={classes.parent}>
                {createBoard()}
            </div>
        </div>
    </>)
}

export default Board;