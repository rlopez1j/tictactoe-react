import React, { useState } from 'react'
import { Button, Switch, Box, Container, makeStyles } from '@material-ui/core';
import 'typeface-roboto';

const useStyles = makeStyles({
    buttons: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    board: {
        display: 'flex',
        justifyContent: 'center'
    },
    xoFont: {
        fontWeight: 'bold',
        fontSize: 'xx-large'
    }
})


const Game = () => {
    const classes = useStyles()
    const [switchDisabled, disableSwitch] = useState(false)

    const onSwitch = () => {
        disableSwitch(true)
        // change turn state
    }

    const resetGame = () => {
        // tell board to clear everything et al.
        disableSwitch(false)
    }

    return (<>
        <Container fixed>
            <Box m={1}>
                <div className={classes.buttons}>
                    <div className={classes.xoFont}>
                        <div>X</div>
                        <div>
                            <Switch
                                disabled={switchDisabled}
                                onChange={onSwitch}
                            />
                        </div>
                        <div>O</div>
                    </div>
                    <Button color="secondary" variant="contained"
                        onClick={resetGame}>
                        Reset
                </Button>
                </div>
            </Box>
        </Container>
    </>)
}

export default Game;