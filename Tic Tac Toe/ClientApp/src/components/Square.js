import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

// TODO:
/*
    remove resposponsibilites from component
*/
const useStyles = makeStyles({
    square: {
        height: '100px',
        width: '100px',
        border: '5px solid black',
        display: 'flex',
        justifyContent: 'center'
    },
    letter: {
        fontSize: '5rem',
        fontWeight: '900',
        alignSelf: 'center'
    }
})


const Square = ({ children, onClick }) => {
    const classes = useStyles()

    return (
        <div className={classes.square} onClick={onClick}>
            <Typography className={classes.letter}>
                {children}
            </Typography>
        </div>
    )
}

export default Square;