import React, { useState, useEffect } from 'react'
import { Paper, Container, List } from '@material-ui/core';
import HistoryLink from './HistoryLink';

export default function HistoryList() {
    const [gameHistoryList, setGameHistoryList] = useState([{ id: 3, date: '08/02/2019', winner: 'X' }, { id: 4, date: '07/12/2019', winner: 'O' }])


    useEffect(() => {
        fetch('api/').then((historyList) => {
            setGameHistoryList(historyList)
        })
            .catch(error => console.log(error))
    }, [])

    return (
        <Container align="center">
            <Paper>
                <List>
                    {gameHistoryList.map((game, i) => (
                        <div key={i}>
                            <HistoryLink game={game} />
                        </div>
                    ))}
                </List>
            </Paper>
        </Container>
    )
}
