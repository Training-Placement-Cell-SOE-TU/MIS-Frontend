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

const baseurl = process.env.REACT_APP_BASE_URL;

export default function HigherStudiesInfo(props) {
    const classes = useStyles();

    const [currStudentId, setCurrStudentId] = useState("")

    const [institution, setInstitution] = useState(null)
    const [programme, setProgramme] = useState(null)
    const [branch, setBranch] = useState(null)
    const [examCleared, setExamCleared] = useState(null)
    const [institutionId, setInstitutionId] = useState(null)
    const [fellowship, setFellowship] = useState(null)
    const [offerLink, setOfferLink] = useState(null)

    const [openHigherStudiesInfoModal, setOpenHigherStudiesInfoModal] = useState(false)

    var headers = {"headers" : { "Authorization": `Bearer ${localStorage.getItem("access-token")}`}}

    const handleExamInfoClose = () => {
        setOpenHigherStudiesInfoModal(false)

        setInstitution(null)
        setProgramme(null)
        setBranch(null)
        setExamCleared(null)
        setInstitutionId(null)
        setFellowship(null)
        setOfferLink(null)
    }

    const handleUpdateHigherStudiesInfo = (e) => {
        e.preventDefault()

        const data = {
            "student_id": currStudentId,
            "higher_studies": {
                "institution": institution,
                "programme": programme,
                "branch": branch,
                "exam_cleared": examCleared,
                "institution_id": institutionId,
                "fellowship": fellowship,
                "offer_link": offerLink
            }
        }

        console.log(data)

        axios.put(`${baseurl}/student/update/studies`,data, headers )
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            handleExamInfoClose()
        }) 
    }

    const handleOpenHigherStudiesUpdate = () => {
        setOpenHigherStudiesInfoModal(true)

        setCurrStudentId(props.student_id)
        setInstitution(props.higher_studies.institution)
        setProgramme(props.higher_studies.programme)
        setBranch(props.higher_studies.branch)
        setExamCleared(props.higher_studies.exam_cleared)
        setInstitutionId(props.higher_studies.institution_id)
        setFellowship(props.higher_studies.fellowship)
        setOfferLink(props.higher_studies.offer_link)
    }

    return(
        <div className='col-lg-6 cred-box'>
            <div className={classes.detailsHeader}>
                <div className={classes.credHeader}>Higher Studies Info</div>
                <IconButton className={classes.iconBtn} onClick={() => handleOpenHigherStudiesUpdate()}>
                    <EditIcon className={classes.editIcon}/>
                </IconButton>
            </div>
            <div className={classes.detailsBox}>
                <div className={classes.fieldBox}>
                    <p>Institution Name: {props.higher_studies.institution}</p>
                </div>
                <div className={classes.fieldBox}>
                    <p>Competitive Exam Cleared: {props.higher_studies.exam_cleared}</p>
                </div>
                <div className={classes.fieldBox}>
                    <p>Programme of Study: {props.higher_studies.programme}</p>
                </div>
                <div className={classes.fieldBox}>
                    <p>Branch or Topic of Study: {props.higher_studies.branch}</p>
                </div>
                <div className={classes.fieldBox}>
                    <p>Enrollment/Apllication Number of the institution: {props.higher_studies.institution_id}</p>
                </div>
                <div className={classes.fieldBox}>
                    <p>Fellowship(if any): {props.higher_studies.fellowship} </p>
                </div>
                <div className={classes.fieldBox}>
                    <p>Offer Letter Link: {props.higher_studies.study_offer_link}</p>
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
                    open={openHigherStudiesInfoModal}
                    onClose={handleExamInfoClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 200,
                    }}
                >
                    <Fade in={openHigherStudiesInfoModal}>

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
                                    <form onSubmit={handleUpdateHigherStudiesInfo } autoComplete='off' className={classes.modalForm}  >
                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" placeholder="Institution Name" variant="outlined" value={institution} onChange={e => setInstitution(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="Competitive Exam Cleared" value={examCleared} onChange={e => setExamCleared(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="Programme" value={programme} onChange={e => setProgramme(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="Branch Or Topic Of Study" value={branch} onChange={e => setBranch(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="Enrollment or Application ID" value={institutionId} onChange={e => setInstitutionId(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="fellowship(if any)" value={fellowship} onChange={e => setFellowship(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="Offer letter link" value={offerLink} onChange={e => setOfferLink(e.target.value)} />
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
    )
}