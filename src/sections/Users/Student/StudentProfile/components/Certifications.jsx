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
    certiBadge: {
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
    }
}));

const certificates = [
    "Machine Learning",
    "Boostrap",
    "NASA Research"
]

const CertificateBadge = ({ name }) => {
    const classes = useStyles();
    return(
        <div>
            <p className={classes.certiBadge}>{name}</p>
            <IconButton><VisibilityIcon color='disabled' style={{ cursor: 'pointer' }} /></IconButton>
        </div>
    )
}

export default function Certifications() {
    const classes = useStyles();

    return(
        <div className='col-lg-12 cred-box' style={{width: '92%'}}>
            <div className={classes.detailsHeader}>
                <div className={classes.credHeader}>Certification Info</div>
            </div>
            <div className={classes.detailsBox}>
                {
                    certificates.map((value, index) => {
                        return(
                            <div key={index}>
                                <CertificateBadge name={value} />
                            </div>
                        ) 
                    })
                }
                
                <span className={classes.badge}>
                    <div>Add Skill <AddIcon style={{fontSize: '20px', marginLeft: '10px', color: 'white', cursor: 'pointer'}} /></div>
                </span>
                <span className={classes.badge}>
                    <div>Upload Certificate (PDF) <BackupOutlinedIcon style={{fontSize: '20px', marginLeft: '10px', color: 'white', cursor: 'pointer'}} /></div>
                </span>
                <span className={classes.badge}>
                    <div>Save</div>
                </span>

            </div>
        </div>
    );
}
