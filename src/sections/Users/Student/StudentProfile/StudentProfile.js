import './StudentProfile.scss';
import React from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import PersonIcon from '@material-ui/icons/Person';
import { makeStyles } from '@material-ui/core/styles';
import { skillList } from './skills';
import SkillBadge from './components/SkillBadge';
import AddIcon from '@material-ui/icons/Add';
import Education from './components/Education';
import Skills from './components/Skills';
import JobExp from './components/JobExp';
import Certifications from './components/Certifications';
import AddressInfo from './components/Address';
import ScoreCard from './components/ScoreCard';
import AdditionalInfo from './components/Aditional';
import SocialInfo from './components/SocialInfo';

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
    }
}));

export default function StudentProfile() {
    const classes = useStyles();
    return (
        <section className='student-profile'>
            <div className='row'>
                <div className='col-lg-4'>
                    <div className='profile-box'>
                        <center>
                            <div className='avatar'>
                                <img alt="Remy Sharp" className='img-fluid' src='https://source.unsplash.com/random/500×500/?fruit' style={{width: '200px', height: 'auto'}} />
                            </div>
                        </center>
                        <div className={classes.editBtn}>
                            <IconButton className={classes.iconBtn}>
                                <EditIcon className={classes.editIcon}/>
                            </IconButton>
                        </div>
                        <div className='general'>
                            <div className='student-name'>Student Name</div>
                            <div>ECB20020</div>
                            <div>Electronics and Comunication Engineering Department</div>
                            <div>+91 9087564321</div>
                            <div className='email'>student@gmail.com</div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-8 details-main-container'>
                    <div className='row details-container'>
                        <Skills />
                        <Education />
                        <JobExp />
                        <Certifications />
                        <AddressInfo />
                        <ScoreCard />
                        <AdditionalInfo />
                        <SocialInfo />
                    </div>
                </div>
            </div>
        </section>
    );
}
