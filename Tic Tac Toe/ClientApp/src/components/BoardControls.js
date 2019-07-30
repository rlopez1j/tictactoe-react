import React from 'react'
import { Button, Switch, Box, Container, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    buttons: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    switchDiv: {
        display: 'flex',
        flexDirection: 'column',
        padding: '11px'
    },
    xoDiv: {
        display: 'flex',
        justifyContent: 'center'
    },
    xoFont: {
        display: 'flex',
        fontWeight: 'bold',
        fontSize: 'xx-large'
    },
    selectLabel: {
        fontWeight: 'bold',
        fontSize: 'x-large'
    }
})

/**
 * component that has a switch to change the intial turn to X or O and button that resets the game
 * @param {hasAnyMoves} hasAnyMoves - boolean that lets the component know if the user has made any moves
 * @param {intialTurn} intialTurn - boolean representing the initial turn of the game which can be changed by the switch in this component
 * @param {onInitialTurnChanged} onInitialTurnChanged - callback function that changes the initial turn of the game
 * @param {onClickReset} onClickReset - callback function that resets the entire game
 * 
 */
export default function BoardControls({ hasAnyMoves, intialTurn, onInitialTurnChanged, onClickReset }) {
    const classes = useStyles()

    return (
        <Container fixed>
            <Box m={1}>
                <div className={classes.buttons}>
                    <div className={classes.switchDiv}>
                        <Typography className={classes.selectLabel}>
                            Select letter:
                        </Typography>
                        <div className={classes.xoDiv}>
                            <div className={classes.xoFont}>
                                <div>X</div>
                                <div>
                                    <Switch color="secondary"
                                        checked={intialTurn}
                                        disabled={hasAnyMoves}
                                        onChange={onInitialTurnChanged}
                                    />
                                </div>
                                <div>O</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Button color="secondary" variant="contained"
                            onClick={onClickReset}>
                            Restart Game
                        </Button>
                    </div>
                </div>
            </Box>
        </Container>
    )
}


