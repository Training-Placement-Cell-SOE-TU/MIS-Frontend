import './Education.scss'
import React, { useState, useEffect } from 'react';
import { Avatar, IconButton, makeStyles } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import Modal from '@material-ui/core/Modal';
import { Button, Backdrop, Icon, TextField } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';

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
    textField: {
        width: '500px'
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
    },
    badgeText: {
        display: 'flex',
        flexDirection: 'row',
    },
    fieldBox: {
        fontWeight: '500'
    },
    InfoModal: {
        backgroundColor: 'white',
        width: '70%',
        height: '70%',
        border: '1px solid black',
        overflowY: 'scroll'
    },
    closeCont: {
        display: 'flex',
        flexDirection: 'row-reverse',
    }
}));

const ipAddress = process.env.REACT_APP_IP;
const port = process.env.REACT_APP_PORT;

export default function Education(props) {
    const classes = useStyles();

    const [currStudentId, setCurrStudentId] = useState("")


    const [metricPercent, setMetricPercent] = useState(0);
    const [metricYOP, setMetricYOP] = useState(0);
    const [hsPercent, setHsPercent] = useState(0);
    const [hsYOP, setHsYOP] = useState(0);

    const [openEducationInfoModal, setOpenEducationalInfo] = useState(false);

    var headers = {"headers" : { "Authorization": `Bearer ${localStorage.getItem("access-token")}`}}

    const handleEducationInfoClose = () => {
        setOpenEducationalInfo(false);

        setMetricPercent(0);
        setMetricYOP(0);
        setHsPercent(0);
        setHsYOP(0);
    }

    const handleUpdateEducationalInfo = (e) => {
        e.preventDefault();

        const data = {
            "student_id": currStudentId,
            "matric_pcnt": metricPercent,
            "yop_matric": metricYOP,
            "hs_pcnt": hsPercent,
            "yop_hs": hsYOP,
            "sgpa": [0, 0, 0],
            "cgpa": 7.2,
            "jee_score": 70.2,
            "jee_air": 111111
        }

        console.log(data);

        axios.put(`http://${ipAddress}:${port}/student/update/educational`,data, headers )
        .then(response => {
            console.log(response);
        })
        .catch(e => {
            console.log(e.message);
        }).finally(() => {
            setOpenEducationalInfo(false);
            setHsYOP(0);
            setHsPercent(0);
            setMetricYOP(0);
            setMetricPercent(0);
        })
    }

    const handleOpenEducationalUpdate = () => {
        setOpenEducationalInfo(true);

        setCurrStudentId(props.profile.student_id);
        setMetricPercent(props.profile.matric_pcnt);
        setMetricYOP(props.profile.yop_matric);
        setHsPercent(props.profile.hs_pcnt);
        setHsYOP(props.profile.yop_hs);
        
    }

    return(
        <div className='col-lg-6 cred-box'>
            <div className={classes.detailsHeader}>
                <div className={classes.credHeader}>Educational Info</div>
                <IconButton className={classes.iconBtn} onClick={handleOpenEducationalUpdate}>
                    <EditIcon className={classes.editIcon}/>
                </IconButton>
            </div>
            <div className={classes.detailsBox}>
                <div className={classes.fieldBox}>
                    <p>10th or equivalent: {props.profile.matric_pcnt}</p>
                </div>
                <div className={classes.fieldBox}>
                    <p>10th Year of Passing: {props.profile.yop_matric}</p>
                </div>
                <div className={classes.fieldBox}>
                    <p>Higher Secondary Percentage: {props.profile.hs_pcnt}</p>
                </div>
                <div className={classes.fieldBox}>
                    <p>Year of HS: {props.profile.yop_hs}</p>
                </div>
                <div className={classes.fieldBox}>
                    <p>SGPA: {props.profile.sgpa}</p>
                </div>
                <div className={classes.fieldBox}>
                    <p>CGPA: {props.profile.cgpa}</p>
                </div>
                <div className={classes.fieldBox}>
                    <p>JEE Score: {props.profile.jee_score}</p>
                </div>
                <div className={classes.fieldBox}>
                    <p>JEE AIR: {props.profile.jee_air}</p>
                </div>
            </div>
            <>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    open={openEducationInfoModal}
                    onClose={handleEducationInfoClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 200,
                    }}
                >
                    <Fade in={openEducationInfoModal}>

                        <div className={classes.InfoModal}>
                        <div className={classes.closeCont}>
                                <IconButton onClick={handleEducationInfoClose}>
                                    <CloseIcon />
                                </IconButton>
                            </div>

                            <div style={{
                                padding: '20px',
                            }}>
                                <div style={{
                                    display: 'block',
                                    textAlign: 'center'
                                }}>
                                    <form onSubmit={handleUpdateEducationalInfo } autoComplete='off' className={classes.modalForm}  >
                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" placeholder="Metric Percent" variant="outlined" value={metricPercent} onChange={e => setMetricPercent(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="Metric Year Of Passing" value={metricYOP} onChange={e => setMetricYOP(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="HS Percent" value={hsPercent} onChange={e => setHsPercent(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="HS Year of Passing" value={hsYOP} onChange={e => setHsYOP(e.target.value)} />
                                        </div>
                                        <Button
                                            variant='outlined'
                                            type='submit'
                                            style={{
                                                marginRight: '1.2rem'
                                            }}
                                        >
                                            Save
                                        </Button>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </Modal>
            </>
        </div>
        
    );
}
