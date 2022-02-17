import './Education.scss'
import React from 'react';
import { Avatar, IconButton, makeStyles } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { skillList } from '../skills';
import SkillBadge from './SkillBadge';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    detailsHeader: {
        display: 'flex',
    },
    credHeader: {
        alignSelf: 'center',
        marginRight: '1rem',
        fontWeight: 'bold',
        fontSize: '1.2rem'
    },
    detailsBox: {
        marginTop: '1.2rem',
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
}));

export default function Skills() {
    const classes = useStyles();

    return(
        <div className='col-lg-6 cred-box'>
            <div className={classes.detailsHeader}>
                <div className={classes.credHeader}>Skills</div>
            </div>
            <div className={classes.detailsBox}>
                {
                    skillList.map((value, index) => {
                        return <SkillBadge skill={value} key={index} />
                    })
                }
                <span className={classes.badge}>
                    <div>Add Skill <AddIcon style={{fontSize: '20px', marginLeft: '10px', color: 'white', cursor: 'pointer'}} /></div>
                </span>
            </div>
        </div>
    );
}