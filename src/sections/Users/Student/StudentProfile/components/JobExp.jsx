import './Education.scss'
import React from 'react';
import { Avatar, IconButton, makeStyles } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';

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
    },
    fieldBox: {
        fontWeight: '500'
    },
    jobBox: {
        backgroundColor: '#d1d1d1',
        color: '#424242',
        // fontWeight: '500',
        borderRadius: '5px',
        marginRight: '5px',
        marginBottom: '1.2rem',
        // display: 'inline-block',
        padding: '10px',
        // fontSize: '0.8rem',
        lineHeight: '1',
        // textAlign: 'center',
        // whiteSpace: 'nowrap',
        // verticalAlign: 'baseline',
        borderRadius: '.40rem',
    },
    jobHeader: {
        fontWeight: 'bold',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    jobBody: {
        marginTop: '7px'
    },
    addJobBox: {
        backgroundColor: '#0066ff',
        color: '#424242',
        borderRadius: '5px',
        marginRight: '5px',
        marginBottom: '1.2rem',
        padding: '50px',
        lineHeight: '1',
        borderRadius: '.40rem',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        cursor: 'pointer'
    },
    addJobBody: {
        
    }
}));

const Job = () => {
    const classes = useStyles();

    return(
        <div className={classes.jobBox}>
            <div className={classes.jobHeader}>
                <div style={{ alignSelf: 'center' }}>Experience</div>
                <div style={{ alignSelf: 'center' }}><ClearIcon style={{fontSize: '20px', color: '#424242', cursor: 'pointer'}} /></div>
            </div>
            <div className={classes.jobBody}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            </div>
        </div>
    )
}

const AddJob = () => {
    const classes = useStyles();

    return(
        <div className={classes.addJobBox}>
            <div className={classes.addJobBody}>
                Add More
            </div>
        </div>
    )
}

export default function JobExp() {
    const classes = useStyles();

    return(
        <div className='col-lg-12 cred-box' style={{width: '92%'}}>
            <div className={classes.detailsHeader}>
                <div className={classes.credHeader}>Job Experience Info</div>
            </div>
            <div className={classes.detailsBox}>
                <div className='row'>
                    <div className='col-lg-3'><Job /></div>
                    <div className='col-lg-3'><Job /></div>
                    <div className='col-lg-3'><Job /></div>
                    <div className='col-lg-3'><AddJob /></div>
                </div>
            </div>
        </div>
    );
}
