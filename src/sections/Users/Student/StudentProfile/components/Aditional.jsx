import './Education.scss'
import React, { useState } from 'react';
import { Avatar, IconButton, makeStyles } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import { Backdrop } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import Fade from '@material-ui/core/Fade';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const useStyles = makeStyles((theme) => ({
    editBtn: {
        display: 'flex',
        flexDirection: 'row-reverse'
    },
    detailsHeader: {
        display: 'flex',
    },
    textField: {
        width: '500px'
    },
    credHeader: {
        alignSelf: 'center',
        marginRight: '1rem',
        fontWeight: 'bold',
        fontSize: '1.2rem'
    },
    InfoModal: {
        backgroundColor: 'white',
        width: '70%',
        height: '70%',
        border: '1px solid black',
        overflowY: 'scroll'
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
    fieldBox: {
        fontWeight: '500'
    }
}));

const baseurl = process.env.REACT_APP_BASE_URL;

const chooseValueList = [
    {
      value: true,
      label: "Yes"
    },
  
    {
      value: false,
      label: "No"
    },
  ]

export default function AdditionalInfo(props) {
    const classes = useStyles();

    const [category, setCategory] = useState(null);
    const [minority, setMinority] = useState(null);
    const [handicap, setHandicap] = useState(null);
    const [dateOfBirth, setDateOfBirth] = useState(null);

    const [openAddInfoModal, setOpenAddInfoModal] = useState(false);

    var headers = {"headers" : { "Authorization": `Bearer ${localStorage.getItem("access-token")}`}}

    const handleAddInfoClose = () => {
        setOpenAddInfoModal(false);

        setCategory(null);
        setMinority(false);
        setHandicap(false);
        setDateOfBirth(null);
    }

    const handleUpdateAddInfo = (e) => {
        e.preventDefault();

        const data = {
            "student_id": props.profile.student_id,
            "category": category,
            "minority": minority,
            "handicap": handicap,
            "dob": dateOfBirth
        }
        
        console.log(data)

        axios.put(`${baseurl}/student/update/additional`,data, headers )
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        }).finally(() => {
            handleAddInfoClose();
            props.updateInfoState()
        })
    }

    const handleOpenAddUpdate = () => {
        setOpenAddInfoModal(true);

        setCategory(props.profile.category);
        setMinority(props.profile.minority);
        setHandicap(props.profile.handicap);
        setDateOfBirth(props.profile.dob);
    }

    return(
        <div className='col-lg-6 cred-box'>
            <div className={classes.detailsHeader}>
                <div className={classes.credHeader}>Additional Info</div>
                <IconButton className={classes.iconBtn} onClick={handleOpenAddUpdate}>
                    <EditIcon className={classes.editIcon}/>
                </IconButton>
            </div>
            <div className={classes.detailsBox}>
                <div className={classes.fieldBox}>
                    <p>Category: {(props.profile.category)}</p>
                </div>
                <div className={classes.fieldBox}>
                    <p>Minority: {props.profile.minority ? "Yes" : "No"}</p>
                </div>
                <div className={classes.fieldBox}>
                    <p>Handicap: {props.profile.handicap ? "Yes" : "No"}</p>
                </div>
                <div className={classes.fieldBox}>
                    <p>Date of Birth: {props.profile.dob}</p>
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
                    open={openAddInfoModal}
                    onClose={handleAddInfoClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 200,
                    }}
                >
                    <Fade in={openAddInfoModal}>

                        <div className={classes.InfoModal}>
                        <div className={classes.closeCont}>
                                <IconButton onClick={handleAddInfoClose}>
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
                                    <form onSubmit={handleUpdateAddInfo } autoComplete='off' className={classes.modalForm}  >
                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" placeholder="Category" variant="outlined" value={category} onChange={e => setCategory(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField label="Minority" className={classes.textField} select id="outlined-basic" variant="outlined" value={minority} onChange={e => setMinority(e.target.value)}
                                            >
                                                {chooseValueList.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </div>

                                        <div className={classes.input}>
                                            <TextField label="Handicap" className={classes.textField} id="outlined-basic" select variant="outlined" value={handicap} onChange={e => setHandicap(e.target.value)}
                                            >
                                                {chooseValueList.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                    {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="Date Of Birth(dd/mm/yyyy)" value={dateOfBirth} onChange={e => setDateOfBirth(e.target.value)} />
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
