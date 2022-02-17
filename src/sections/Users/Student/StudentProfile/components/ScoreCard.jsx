import './Education.scss'
import React from 'react';
import { Avatar, IconButton, makeStyles } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import ClearIcon from '@material-ui/icons/Clear';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AddIcon from '@material-ui/icons/Add';
import BackupOutlinedIcon from '@material-ui/icons/BackupOutlined';

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
    scoreBadge: {
        backgroundColor: '#d1d1d1',
        color: '#424242',
        fontWeight: '500',
        borderRadius: '5px',
        marginRight: '0.5rem',
        marginBottom: '0.7rem',
        padding: '10px',
        fontSize: '0.8rem',
        lineHeight: '1',
        borderRadius: '.40rem',
        display: 'inline-block'
    },
    pdfBadge: {
        backgroundColor: '#0066ff',
        color: 'white',
        fontWeight: '500',
        borderRadius: '5px',
        marginRight: '0.5rem',
        marginBottom: '0.7rem',
        padding: '10px',
        fontSize: '0.8rem',
        lineHeight: '1',
        borderRadius: '.40rem',
        display: 'inline-block'
    }
}));

const certificates = [
    "Machine Learning",
    "Boostrap",
    "NASA Research"
]

const ScoreBadge = ({ sem }) => {
    const classes = useStyles();
    return(
        <div>
            <p className={classes.scoreBadge}>{sem} sem</p>
            <p className={classes.pdfBadge}>PDF <BackupOutlinedIcon style={{fontSize: '16px', marginLeft: '10px', color: 'white', cursor: 'pointer'}} /></p>
            <IconButton><VisibilityIcon color='disabled' style={{ cursor: 'pointer' }} /></IconButton>
        </div>
    )
}

export default function ScoreCard() {
    const classes = useStyles();

    return(
        <div className='col-lg-6 cred-box' style={{}}>
            <div className={classes.detailsHeader}>
                <div className={classes.credHeader}>Score Card Info</div>
            </div>
            <div className={classes.detailsBox}>
                {
                    ['1st','2nd','3rd','4th','5th','6th','7th','8th'].map((value, index) => {
                        return(
                            <div key={index}>
                                <ScoreBadge sem={value} />
                            </div>
                        ) 
                    })
                }

            </div>
        </div>
    );
}
