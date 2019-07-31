import React from 'react'
import { ListItem, ListItemText } from '@material-ui/core';

export default function HistoryLink({ game }) {
    return (<>
        <ListItem>
            <ListItemText primary="Date: " />
            <ListItemText primary="Winner: " />
        </ListItem>
    </>)
}