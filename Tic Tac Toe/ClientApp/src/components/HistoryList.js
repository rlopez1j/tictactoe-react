import React, { useState } from 'react'
import { Paper, Container, List } from '@material-ui/core';
import HistoryLink from './HistoryLink';

export default function HistoryList() {
    const [gameHistoryList, setGameHistoryList] = useState([])

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
