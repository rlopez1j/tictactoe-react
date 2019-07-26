import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    square: {
        height: '100px',
        width: '100px',
        border: '5px solid black'
    }
})


const Square = ({ id }) => {
    const classes = useStyles()

    const handleClick = () => {
        console.log('click from ', id)
    }

    return (<>
        <div className={classes.square} onClick={handleClick}>
        </div>
    </>)
}

export default Square;