import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    square: {
        height: '100px',
        width: '100px',
        border: '5px solid black'
    }
})

const Square = ({ }) => {
    const classes = useStyles()
    return (<>
        <div className={classes.square}>
        </div>
    </>)
}

export default Square;