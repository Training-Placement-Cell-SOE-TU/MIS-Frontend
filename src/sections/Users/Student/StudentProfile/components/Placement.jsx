import './Education.scss'
import React, { useState } from 'react';
import {IconButton, makeStyles } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import Modal from '@material-ui/core/Modal';
import { Button, Backdrop, TextField } from '@material-ui/core';
import Fade from '@material-ui/core/Fade';
import CloseIcon from '@material-ui/icons/Close';
import MenuItem from '@mui/material/MenuItem';
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
    },
    modalForm: {
        display: 'inline-block',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'left'
    }
}));

const baseurl = process.env.REACT_APP_BASE_URL;

const jobList = [
    {
      value: "full-time",
      label: "Full-Time"
    },
  
    {
      value: "part-time",
      label: "Part-Time"
    },
  
    {
      value: "internship",
      label: "Internship"
    },
  ]

export default function PlacementInfo(props) {
    const classes = useStyles();

    const [currStudentId, setCurrStudentId] = useState("")

    const [companyName, setCompanyName] = useState(null)
    const [jobDesignation, setJobDesignation] = useState(null)
    const [jobSalary, setJobSalary] = useState(null)
    const [jobOfferLink, setJobOfferLink] = useState(null)
    const [jobType, setJobType] = useState(null)

    const [openJobInfoModal, setOpenJobInfoModal] = useState(false)

    var headers = {"headers" : { "Authorization": `Bearer ${localStorage.getItem("access-token")}`}}

    const handleJobInfoClose = () => {
        setOpenJobInfoModal(false)

        setCompanyName(null)
        setJobDesignation(null)
        setJobSalary(null)
        setJobOfferLink(null)
    }

    const handleUpdatePlacementInfo = (e) => {
        e.preventDefault()

        const data = {
            "student_id": currStudentId,
            "job_type": jobType,
            "job_info": {
                "company_name": companyName,
                "designation": jobDesignation,
                "salary": jobSalary,
                "offer_link": jobOfferLink
            },
            "internship_info": {
                "company_name": '',
                "designation": '',
                "salary": '',
                "offer_link": ''
            }
        }
        
        axios.put(`${baseurl}/student/update/job`,data, headers )
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            setOpenJobInfoModal(false)

            setCompanyName(null)
            setJobDesignation(null)
            setJobSalary(null)
            setJobOfferLink(null)
            props.updateInfoState()
        })
        
    }

    const handleUpdateInternshipInfo = (e) => {
        e.preventDefault()

        const data = {
            "student_id": currStudentId,
            "job_type": jobType,
            "job_info": {
                "company_name": '',
                "designation": '',
                "salary": '',
                "offer_link": ''
            },
            "internship_info": {
                "company_name": companyName,
                "designation": jobDesignation,
                "salary": jobSalary,
                "offer_link": jobOfferLink
            }
        }

        axios.put(`${baseurl}/student/update/job`,data, headers )
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            setOpenJobInfoModal(false)

            setCompanyName(null)
            setJobDesignation(null)
            setJobSalary(null)
            setJobOfferLink(null)
            props.updateInfoState()
        })
    }

    const handleOpenPlacementUpdate = () => {
        setOpenJobInfoModal(true)

        setCurrStudentId(props.student_id)
        setCompanyName(props.job_info.company_name)
        setJobDesignation(props.job_info.designation)
        setJobSalary(props.job_info.salary)
        setJobOfferLink(props.job_info.offer_link)
        setJobType(props.job_type)
    }

    const handleOpenInternshipUpdate = () => {
        setOpenJobInfoModal(true)

        setCurrStudentId(props.student_id)
        setCompanyName(props.internship_info.company_name)
        setJobDesignation(props.internship_info.designation)
        setJobSalary(props.internship_info.salary)
        setJobOfferLink(props.internship_info.offer_link)
        setJobType(props.job_type)
    }

    return(
        <div className='col-lg-6 cred-box'>
            <div className={classes.detailsHeader}>
                <div className={classes.credHeader}>Job/Placement Info</div>
                <IconButton className={classes.iconBtn} onClick={() => {handleOpenPlacementUpdate()}}>
                    <EditIcon className={classes.editIcon}/>
                </IconButton>
            </div>
            <div className={classes.detailsBox}>
                <div className={classes.fieldBox}>
                    <p>Name of the organization: {props.job_info.company_name || props.internship_info.company_name}</p>
                </div>
                <div>
                    <p>Type: {props.job_type}</p>
                </div>
                <div className={classes.fieldBox}>
                    <p>Designation: {props.job_info.designation || props.internship_info.company_name} </p>
                </div>
                <div className={classes.fieldBox}>
                    <p>Salary Package: {props.job_info.salary || props.internship_info.salary}</p>
                </div>
                <div className={classes.fieldBox}>
                    <p>Offer Letter Link: {props.job_info.offer_link || props.internship_info.offer_link}</p>
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
                    open={openJobInfoModal}
                    onClose={handleJobInfoClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 200,
                    }}
                >
                    <Fade in={openJobInfoModal}>

                        <div className={classes.InfoModal}>
                        <div className={classes.closeCont}>
                                <IconButton onClick={handleJobInfoClose}>
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
                                    <form onSubmit={jobType === "internship" ? handleUpdateInternshipInfo : handleUpdatePlacementInfo } autoComplete='off' className={classes.modalForm}  >
                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" placeholder="Name of the Organization" variant="outlined" value={companyName} onChange={e => setCompanyName(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField label="Type of Job" className={classes.textField} id="outlined-basic" variant="outlined" select placeholder="Type of Job" value={jobType} onChange={e => setJobType(e.target.value)}
                                            >
                                                {jobList.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="Designation" value={jobDesignation} onChange={e => setJobDesignation(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="Salary/month or Package/annum" value={jobSalary} onChange={e => setJobSalary(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="Offer Letter Link" value={jobOfferLink} onChange={e => setJobOfferLink(e.target.value)} />
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