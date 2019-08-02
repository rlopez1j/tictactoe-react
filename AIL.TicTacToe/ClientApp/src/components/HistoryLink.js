import React from 'react';
import { ListItem, ListItemText, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }
})

export default function HistoryLink({ game: { id, date, winner } }) {
    const classes = useStyles()
    return (<>
        <Link to={`/view/${id}`} className={classes.link}> { /* find the right way to do this */}
            <ListItem>
                <ListItemText primary={`Date: ${date}`} />
                <ListItemText primary={`Winner: ${winner}`} />
            </ListItem>
        </Link>
    </>)
}