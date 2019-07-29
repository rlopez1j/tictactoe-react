import React, { useState, useEffect } from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import Board from './Board';
import BoardControls from './BoardControls'

const useStyles = makeStyles({
    turnDisplay: {
        display: 'flex',
        justifyContent: 'center',
        fontWeight: 'bold'
    }
})

let intialTurn = false;

/**
 * 
 * 
 */
const BoardContainer = () => {
    const classes = useStyles()
    const [boardState, setBoardState] = useState(Array(9).fill(null, 0, 9))
    const [currentTurn, setCurrentTurn] = useState(intialTurn)
    const [winningLetter, setWinningLetter] = useState(null)

    // derrived states
    const currentLetter = !currentTurn ? 'X' : 'O';
    const hasAnyMoves = boardState.reduce((hasMoves, boardPosition) => hasMoves || !!boardPosition, false)

    useEffect(() => {
        checkBoard();
    }, [boardState]);

    const onSquareClicked = boardPosition => {
        if (boardState[boardPosition]) return;
        if (winningLetter) return;

        const newBoardSquares = [...boardState];
        newBoardSquares[boardPosition] = currentLetter;
        setBoardState(newBoardSquares);
        setCurrentTurn(!currentTurn);
    }
    const checkBoard = () => {
        //rows
        checkThreeForWinning(3, 4, 5);
        checkThreeForWinning(0, 1, 2);
        checkThreeForWinning(6, 7, 8);
        //columns
        checkThreeForWinning(1, 4, 7);
        checkThreeForWinning(0, 3, 6);
        checkThreeForWinning(2, 5, 8);
        //diagonals
        checkThreeForWinning(0, 4, 8);
        checkThreeForWinning(2, 4, 6);
    }

    const checkThreeForWinning = (first, second, third) => {
        if (boardState[first] === boardState[second] && boardState[second] === boardState[third] &&
            boardState[first]) {
            setWinningLetter(boardState[first])
        }
    }
    const onInitialTurnChanged = () => {
        intialTurn = !intialTurn
        setCurrentTurn(intialTurn)
    }

    const onClickReset = () => {
        intialTurn = false
        setCurrentTurn(intialTurn)
        setBoardState(Array(9).fill(null, 0, 9))
    }

    return (<>
        <BoardControls
            hasAnyMoves={hasAnyMoves}
            intialTurn={intialTurn}
            onInitialTurnChanged={onInitialTurnChanged}
            onClickReset={onClickReset}
        />
        <Typography variant="h1" className={classes.turnDisplay}>
            {currentLetter}
        </Typography>
        <Board boardState={boardState} onSquareClicked={onSquareClicked} />
        {winningLetter &&
            <Typography variant="h3" align="center">
                <strong>{winningLetter}</strong> has won the game!
            </Typography>
        }
    </>)
}

export default BoardContainer;