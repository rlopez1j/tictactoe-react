import React, { useState, useEffect } from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import Board from './Board';
import BoardControls from './BoardControls'

const useStyles = makeStyles({
    turnDisplay: {
        display: 'flex',
        justifyContent: 'center',
        fontWeight: 'bold'
    },
    go: {
        display: 'flex',
        justifyContent: 'center',
        fontWeight: '500',
        fontSize: '45px'
    },
})

// needed to set the initial turn
let intialTurn = false;

/**
 * BoardContainer contains all the logic for components, and is a way
 * to connect them all together with their interacting parts
 */
const BoardContainer = () => {
    const classes = useStyles()
    const [boardState, setBoardState] = useState(Array(9).fill(null, 0, 9))
    const [currentTurn, setCurrentTurn] = useState(intialTurn)
    const [winningLetter, setWinningLetter] = useState(null)

    /**
     * Derived states which are created by making an evaluation or operation on a state
     */
    const currentLetter = !currentTurn ? 'X' : 'O';
    const hasAnyMoves = boardState.reduce((hasMoves, boardPosition) => hasMoves || !!boardPosition, false)

    const clearStorage = () => {
        localStorage.removeItem('boardState')
        localStorage.removeItem('currentTurn')
    }

    useEffect(() => {
        if (localStorage.getItem('boardState')) {
            setBoardState(JSON.parse(localStorage.getItem('boardState')))
        }
        if (localStorage.getItem('currentTurn')) {
            setCurrentTurn(localStorage.getItem('currentTurn') === 'true')
        }
    }, [])

    /**
     * The effect checks to see if there has been a winner with checkBoard()
     * but only checks when there has been a letter inserted into the boardState array 
     * to avoid unnecessary checks before a move has been made by a user
    */
    useEffect(() => {
        if (hasAnyMoves) {
            if (isWinningBoard()) {
                clearStorage();
            } else {
                localStorage.setItem('boardState', JSON.stringify(boardState))
                localStorage.setItem('currentTurn', JSON.stringify(currentTurn))
            }
        }

    }, [boardState]);



    /**
     * onSquareClicked is a callback function fired when the <Square> component
     * calls it on an onClick event. The function delegates all the state changes
     * that need to be made when a new letter is inputed into the <Square> component
     * 
     * @param {boardPosition} boardPosition an integer indicating the index position of the array
     * mapping to the board
     */
    const onSquareClicked = boardPosition => {
        if (boardState[boardPosition]) return;
        if (winningLetter) return;

        const newBoardSquares = [...boardState];
        newBoardSquares[boardPosition] = currentLetter;
        setBoardState(newBoardSquares);
        setCurrentTurn(!currentTurn);
    }

    /**
     * checks the board to see if a winning letter has been found, 
     * checking all the possible winning combinations
     */
    const isWinningBoard = () => {
        //rows
        return checkThreeForWinning(3, 4, 5) ||
            checkThreeForWinning(0, 1, 2) ||
            checkThreeForWinning(6, 7, 8) ||
            //columns
            checkThreeForWinning(1, 4, 7) ||
            checkThreeForWinning(0, 3, 6) ||
            checkThreeForWinning(2, 5, 8) ||
            //diagonals
            checkThreeForWinning(0, 4, 8) ||
            checkThreeForWinning(2, 4, 6);
    }

    /**
     * helper function for checkBoard() that checks boardState array in specific positions
     * that are winning combinations 
     * 
     * @param {first} first     integer containing an index on the BoardState array
     * @param {second} second   integer containing an index on the BoardState array
     * @param {third} third     integer containing an index on the BoardState array
     */
    const checkThreeForWinning = (first, second, third) => {
        var isWinning = boardState[first] === boardState[second] && boardState[second] === boardState[third] &&
            boardState[first];

        if (isWinning) {
            setWinningLetter(boardState[first])
        }
        return isWinning;
    }
    /**
     * onItitialTurnChanged() changes the initial turn of the game, and sets that intial turn to currentTurn
     * it is callback function used by a switch in <BoardControls> component triggered by an Onchange event
     * the switch controls the intial turn, being either X or O (X by default)
     */
    const onInitialTurnChanged = () => {
        intialTurn = !intialTurn
        setCurrentTurn(intialTurn)
    }

    /**
     * onClickReset() delegates all the state changed needed to be made when a user resets the game
     * the function is used as a callback trigged by an onClick event in a <BoardControls> button 
     */
    const onClickReset = () => {
        intialTurn = false
        setCurrentTurn(intialTurn)
        setBoardState(Array(9).fill(null, 0, 9))
        setWinningLetter(null)
        clearStorage()
    }

    return (<>
        <BoardControls
            hasAnyMoves={hasAnyMoves}
            intialTurn={intialTurn}
            onInitialTurnChanged={onInitialTurnChanged}
            onClickReset={onClickReset}
            winningLetter={winningLetter}
        />
        <Typography className={classes.go}>
            Current Move:
            </Typography>
        <Typography variant="h1" className={classes.turnDisplay}>
            {currentLetter}
        </Typography>
        <Board
            boardState={boardState}
            onSquareClicked={onSquareClicked}
            isGameDone={!!winningLetter} />
    </>)
}

export default BoardContainer;