import React, { useState } from 'react';
import { makeStyles, Typography } from '@material-ui/core';


const useStyles = makeStyles({
    square: {
        height: '100px',
        width: '100px',
        border: '5px solid black'
    }
})


const Square = ({ turn, alternateTurn }) => {
    const [letter, setLetter] = useState('')
    const [clicked, setClicked] = useState(false)
    const classes = useStyles()

    const handleClick = () => {
        if (!clicked) {
            setClicked(true)
            !turn ? setLetter('X') : setLetter('O')
            alternateTurn()
        }
    }

    return (<>
        <div className={classes.square} onClick={handleClick}>
            <Typography>
                {letter}
            </Typography>
        </div>
    </>)
}

export default Square;