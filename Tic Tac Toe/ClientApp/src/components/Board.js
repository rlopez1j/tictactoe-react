import React, { useState } from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    turnDisplay: {
        display: 'flex',
        justifyContent: 'center',
        fontWeight: 'bold'
    }
})

const Board = ({ turnGiven }) => {
    const classes = useStyles()
    const [turn, changeTurn] = useState(false)
    return (<>
        <Typography variant="h1" className={classes.turnDisplay}>
            {turnGiven === false ? 'X' : 'O'}
        </Typography>
    </>)
}

export default Board;