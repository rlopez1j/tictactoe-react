import React, { useState } from 'react'
import { Button, Switch, Box, Container, makeStyles } from '@material-ui/core';
import 'typeface-roboto';
import Board from './Board';

const useStyles = makeStyles({
    buttons: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    board: {
        display: 'flex',
        justifyContent: 'center'
    },
    xoFont: {
        display: 'flex',
        fontWeight: 'bold',
        fontSize: 'xx-large'
    },
})


const Game = () => {
    const classes = useStyles()
    const [switchDisabled, disableSwitch] = useState(false)
    const [switchChecked, checkSwitch] = useState(false)

    const onSwitch = () => {
        disableSwitch(true)
        checkSwitch(!switchChecked)
    }

    const resetGame = () => {
        disableSwitch(false)
        checkSwitch(false)
        // tell board to clear everything et al.
    }

    return (<>
        <Container fixed>
            <Box m={1}>
                <div className={classes.buttons}>
                    <div className={classes.xoFont}>
                        <div>X</div>
                        <div>
                            <Switch color="secondary"
                                className={classes.switch}
                                checked={switchChecked}
                                disabled={switchDisabled}
                                onChange={onSwitch}
                            />
                        </div>
                        <div>O</div>
                    </div>
                    <div>
                        <Button color="secondary" variant="contained"
                            onClick={resetGame}>
                            Reset
                        </Button>
                    </div>
                </div>
            </Box>
        </Container>
        <Board turnGiven={switchChecked} />
    </>)
}

export default Game;