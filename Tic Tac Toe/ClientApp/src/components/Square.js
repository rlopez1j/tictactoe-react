import React from 'react';
import { makeStyles, Typography, Paper, ButtonBase } from '@material-ui/core';
// TODO:
/*
    remove resposponsibilites from component
*/
const useStyles = makeStyles({
    square: {
        height: '100px',
        width: '100px',
        display: 'flex',
        justifyContent: 'center'
    },
    letter: {
        fontSize: '5rem',
        fontWeight: '900',
        alignSelf: 'center'
    },
    pointer: {
        cursor: 'pointer'
    }

})

/**
 * component that renders the letter inputted by a user in a specific position
 * @param {children} children -  from props.children which contains the letter placed on the square by the user
 * @param {onClick}  onClick - callback function triggered on an onclick event;
 *                             what it does is beyond the scope of this component
 * 
 */
const Square = ({ children, clickable, onClick }) => {
    const classes = useStyles()
    let clickableClass = clickable ? classes.pointer : '';
    return (
        <ButtonBase className={classes.square}>
            <Paper className={`${classes.square} ${clickableClass}`} onClick={onClick} elevation={children ? '20' : '1'}>
                <Typography className={classes.letter}>
                    {children}
                </Typography>
            </Paper>
        </ButtonBase>
    )
}

export default Square;