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
    fieldBox: {
        fontWeight: '500'
    }
}));

export default function AdditionalInfo() {
    const classes = useStyles();

    return(
        <div className='col-lg-6 cred-box'>
            <div className={classes.detailsHeader}>
                <div className={classes.credHeader}>Additional Info</div>
                <IconButton className={classes.iconBtn}>
                    <EditIcon className={classes.editIcon}/>
                </IconButton>
            </div>
            <div className={classes.detailsBox}>
                <div className={classes.fieldBox}>
                    <p>Category: Genral</p>
                </div>
                <div className={classes.fieldBox}>
                    <p>Minortiy: No</p>
                </div>
                <div className={classes.fieldBox}>
                    <p>Handicap: No</p>
                </div>
                <div className={classes.fieldBox}>
                    <p>Date of Birth: 12 January 2002</p>
                </div>
            </div>
        </div>
    );
}
