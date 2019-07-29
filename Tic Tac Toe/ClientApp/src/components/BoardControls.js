import React from 'react'
import { Button, Switch, Box, Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    buttons: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    xoFont: {
        display: 'flex',
        fontWeight: 'bold',
        fontSize: 'xx-large'
    },
})

export default function BoardControls({ hasAnyMoves, intialTurn, onInitialTurnChanged, onClickReset }) {
    const classes = useStyles()

    return (
        <Container fixed>
            <Box m={1}>
                <div className={classes.buttons}>
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
                    <div>
                        <Button color="secondary" variant="contained"
                            onClick={onClickReset}>
                            Reset
                        </Button>
                    </div>
                </div>
            </Box>
        </Container>
    )
}


