import { makeStyles } from '@material-ui/core';
import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles({
    badge: {
        backgroundColor: '#d1d1d1',
        color: '#424242',
        fontWeight: '500',
        borderRadius: '5px',
        marginRight: '0.5rem',
        marginBottom: '0.7rem',
        display: 'inline-block',
        padding: '10px',
        fontSize: '0.8rem',
        lineHeight: '1',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        verticalAlign: 'baseline',
        borderRadius: '.40rem',
    },
    badgeText: {
        display: 'flex',
        flexDirection: 'row',
    }
})

export default function SkillBadge({ skill }) {
    const classes = useStyles();
    return (
        <span className={classes.badge}>
            <div>{skill} <ClearIcon style={{fontSize: '20px', marginLeft: '10px', color: '#424242', cursor: 'pointer'}} /></div>
        </span>
    );
}
