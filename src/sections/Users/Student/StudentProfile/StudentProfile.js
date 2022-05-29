import './StudentProfile.scss';
import React, { useState, useEffect } from 'react';
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
import LinearProgress from '@material-ui/core/LinearProgress';
import SocialInfo from './components/SocialInfo';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '30px'
    },
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

const ipAddress = process.env.REACT_APP_IP;
const port = process.env.REACT_APP_PORT;


export default function StudentProfile() {

    const [loading, setLoading] = useState(false);
    const [profile, setProfile] = useState({})

    let { roll } = useParams();
    var headers = {"headers" : { "Authorization": `Bearer ${localStorage.getItem("access-token")}`}}

    useEffect(() => {
        const fetch = () => {
            setLoading(true);
            axios.get(`http://${ipAddress}:${port}/student/${roll}`, headers)
            .then(response => {
                response = response.data;
                console.log(response);
                setProfile(response)
            })
            .catch(e => {
                console.log(e.message);
            })
            .finally(() => {
                setLoading(false);
            })
        }
        fetch();
    }, [])


    const classes = useStyles();
    return (
        <section className='student-profile'>
            {
                loading ?
                <LinearProgress /> :
                <>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='profile-box'>
                                <center>
                                    <div className='avatar'>
                                        <img alt="Remy Sharp" className='img-fluid' src='https://i.ibb.co/N7mPS1p/me-fi-min.png' style={{width: '200px', height: 'auto'}} />
                                    </div>
                                </center>
                                <div className={classes.editBtn}>
                                    <IconButton className={classes.iconBtn}>
                                        <EditIcon className={classes.editIcon}/>
                                    </IconButton>
                                </div>
                                <div className='general'>
                                    {/* {console.log(profile)} */}
                                    <div className='student-name'>{profile.fname} {profile.lname}</div>
                                    <div>{roll}</div>
                                    <div>{profile.branch}</div>
                                    <div>{profile.phone}</div>
                                    <div className='email'>{profile.email}</div>
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
                </>
            }
        </section>
    );
}
