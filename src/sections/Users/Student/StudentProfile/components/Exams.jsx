import './Education.scss'
import React, { useState, useEffect } from 'react';
import { Avatar, IconButton, makeStyles } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import Modal from '@material-ui/core/Modal';
import { Button, Backdrop, Icon, TextField } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
import AddIcon from '@material-ui/icons/Add';


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
    },
    modalForm: {
        display: 'inline-block',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'left'
    }
}));

const baseurl = process.env.REACT_APP_BASE_URL;

export default function ExamsInfo(props) {
    const classes = useStyles();

    const [currStudentId, setCurrStudentId] = useState("")

    const [competitiveExam, setCompetitiveExam] = useState(props.competitive_exams)

    const [examName, setExamName] = useState(null)
    const [examYop, setExamYop] = useState(null)
    const [examId, setExamId] = useState(null)
    const [examScore, setExamScore] = useState(null)
    const [examAIR, setExamAIR] = useState(null)

    const [addExam, setAddExam] = useState(false)

    const [openExamInfoModal, setOpenExamInfoModal] = useState(false)

    var headers = {"headers" : { "Authorization": `Bearer ${localStorage.getItem("access-token")}`}}

    const handleExamInfoClose = () => {
        setOpenExamInfoModal(false)
        setAddExam(false)

        setExamId(null)
        setExamScore(null)
        setExamAIR(null)
        setExamYop(null)
        setExamName(null)
    }

    const handleUpdateExamInfo = (e) => {
        e.preventDefault()

        const data = {
            "student_id": currStudentId,
            "type": "competitive_exams",
            "content": {
                "name": examName,
                "yop": examYop,
                "id": examId,
                "score": examScore,
                "air": examAIR
            }
        }

        axios.put(`${baseurl}/student/update/exams`, data, headers)
        .then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            handleExamInfoClose()
            props.updateInfoState()
        })
    }

    const handleAddExamInfo = (e) => {
        e.preventDefault()

        const data = {
            "student_id": currStudentId,
            "name": examName,
            "yop": examYop,
            "id": examId,
            "score": examScore,
            "air": examAIR
        }

        axios.post(`${baseurl}/student/add/exams`, data, headers)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        }).finally(() => {
            handleExamInfoClose()
            props.updateInfoState()
        })
    }

    const handleOpenExamAdd = () => {
        setOpenExamInfoModal(true)
        setAddExam(true)

        setCurrStudentId(props.student_id)
    }

    const handleOpenExamUpdate = (exam) => {
        setOpenExamInfoModal(true)
        setAddExam(false)

        setCurrStudentId(props.student_id)

        setExamName(exam.name)
        setExamYop(exam.yop)
        setExamId(exam.id)
        setExamScore(exam.score)
        setExamAIR(exam.air)
    }

    console.log(competitiveExam)

    return(
        
        <>
            {competitiveExam.length === 0 ? 
                <div className='col-lg-6 cred-box'>
                    <div className={classes.detailsHeader}>
                        <div className={classes.credHeader}>Exams Info</div>
                        <span className={classes.badge} onClick={() => handleOpenExamAdd()}>
                                <div>Add Exam <AddIcon style={{fontSize: '20px', marginLeft: '10px', color: 'white', cursor: 'pointer'}} /></div>
                        </span>
                    </div>
                </div> 
                :
                competitiveExam.map((exam, index) => (
                    <div className='col-lg-6 cred-box'>
                        <div className={classes.detailsHeader}>
                            <div className={classes.credHeader}>Exams Info</div>
                            <IconButton className={classes.iconBtn} onClick={() => handleOpenExamUpdate(exam)}>
                                <EditIcon className={classes.editIcon}/>
                            </IconButton>
                        </div>
                        <div className={classes.detailsBox}>
                            <div className={classes.fieldBox}>
                                <p>Exam Name: {exam.name}</p>
                            </div>
                            <div className={classes.fieldBox}>
                                <p>Year Of Passing: {exam.yop}</p>
                            </div>
                            <div className={classes.fieldBox}>
                                <p>Application ID/Roll No.:  {exam.id}</p>
                            </div>
                            <div className={classes.fieldBox}>
                                <p>Exam Score: {exam.score}</p>
                            </div>
                            <div className={classes.fieldBox}>
                                <p>All India Rank(AIR): {exam.air}</p>
                            </div>
                        </div>
                        <span className={classes.badge} onClick={() => handleOpenExamAdd()}>
                                <div>Add Exam <AddIcon style={{fontSize: '20px', marginLeft: '10px', color: 'white', cursor: 'pointer'}} /></div>
                        </span>
                    </div>
                ))
            }
            <>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    open={openExamInfoModal}
                    onClose={handleExamInfoClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 200,
                    }}
                >
                    <Fade in={openExamInfoModal}>

                        <div className={classes.InfoModal}>
                        <div className={classes.closeCont}>
                                <IconButton onClick={handleExamInfoClose}>
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
                                    <form onSubmit={addExam ? handleAddExamInfo : handleUpdateExamInfo } autoComplete='off' className={classes.modalForm}  >
                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" placeholder="Exam Name" variant="outlined" value={examName} onChange={e => setExamName(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="Year Of Passing" value={examYop} onChange={e => setExamYop(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="Application ID/Roll No" value={examId} onChange={e => setExamId(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="Exam Score" value={examScore} onChange={e => setExamScore(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="All India Rank(Optional)" value={examAIR} onChange={e => setExamAIR(e.target.value)} />
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

        </>
    )
}