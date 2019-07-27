import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    square: {
        height: '100px',
        width: '100px',
        border: '5px solid black'
    }
})


const Square = ({ turn, alternateTurn }) => {
    const [letter, setLetter] = useState()
    const [clicked, setClicked] = useState(false)
    const classes = useStyles()


    const handleClick = () => {
        if (!clicked) {
            console.log('click from ', !turn ? 'X' : 'O')
            setClicked(true)
            alternateTurn()
            !turn ? setLetter('X') : setLetter('O')
        }
    }

    return (<>
        <div className={classes.square} onClick={handleClick}>
            {clicked ? letter : ''}
        </div>
    </>)
}

export default Square;