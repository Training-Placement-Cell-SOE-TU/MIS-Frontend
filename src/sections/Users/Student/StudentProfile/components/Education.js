import './Education.scss'
import React from 'react';
import { Avatar, IconButton, makeStyles } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
    editBtn: {
        display: 'flex',
        flexDirection: 'row-reverse'
    },
    detailsHeader: {
        display: 'flex',
    },
    credHeader: {
        alignSelf: 'center',
        marginRight: '1rem',
        fontWeight: 'bold',
        fontSize: '1.2rem'
    },
    iconBtn: {
        backgroundColor: 'rgb(233, 233, 233)',
        alignSelf: 'center'
    },
    editIcon: {
        color: '#0066ff'
    },
    detailsBox: {
        marginTop: '1.2rem',
        fontSize: '14px'
    },
    badge: {
        backgroundColor: '#0066ff',
        color: 'white',
        fontWeight: '500',
        borderRadius: '5px',
        marginRight: '0.5rem',
        marginBottom: '0.5rem',
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
    },
    fieldBox: {
        fontWeight: '500'
    }
}));

export default function Education() {
    const classes = useStyles();

    return(
        <div className='col-lg-6 cred-box'>
            <div className={classes.detailsHeader}>
                <div className={classes.credHeader}>Educational Info</div>
                <IconButton className={classes.iconBtn}>
                    <EditIcon className={classes.editIcon}/>
                </IconButton>
            </div>
            <div className={classes.detailsBox}>
                <div className={classes.fieldBox}>
                    <p>Metric Percentage: 92.4</p>
                </div>
                <div className={classes.fieldBox}>
                    <p>Year of Passing Matric: 2017</p>
                </div>
                <div className={classes.fieldBox}>
                    <p>Higher Secondary Percentage: 94</p>
                </div>
                <div className={classes.fieldBox}>
                    <p>Year of HS: 2019</p>
                </div>
                <div className={classes.fieldBox}>
                    <p>SGPA: 8.5</p>
                </div>
                <div className={classes.fieldBox}>
                    <p>CGPA: 8.2</p>
                </div>
            </div>
        </div>
    );
}
