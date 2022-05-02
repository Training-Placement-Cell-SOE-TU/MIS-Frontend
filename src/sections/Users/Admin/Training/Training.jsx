import 'date-fns';
import React, { useState, useEffect } from 'react';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import AdminNavbar from '../AdminNavbar';
import TrainingCard from './components/TrainingCard';
import { Button, Backdrop, Icon, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import CloseIcon from '@material-ui/icons/Close';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { id } from 'date-fns/locale';
import LinearProgress from '@material-ui/core/LinearProgress';

const drawerWidth = 240;
const ipAddress = "172.30.192.1";

const useStyles = makeStyles((theme) => ({
    container: {
        textAlign: 'center'
    },
    title: {
        textAlign: 'center',
        marginBottom: '2rem'
    },
    createBtnCont: {
        marginBottom: '2rem'
    },
    createBtn: {
        textTransform: 'none'
    },
    closeCont: {
        display: 'flex',
        flexDirection: 'row-reverse',
    },
    trainingModal: {
        backgroundColor: 'white',
        width: '70%',
        height: '70%',
        border: '1px solid black',
        overflowY: 'scroll'
    },
    input: {
        marginBottom: '1.6rem'
    },
    textField: {
        width: '500px'
    },
    modalForm: {
        display: 'inline-block',
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'left'
    }
}));

function Training(props) {
    const classes = useStyles();
    // training id, shift, link
    const [loading, setLoading] = useState(false);

    const [openTrainingModal, setOpenTrainingModal] = useState(false);
    const [openAttdModal, setOpenAttdModal] = useState(false);
    
    const [startDate, setStartDate] = useState(new Date(Date.now()));
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const [trainer, setTrainer] = useState(null);
    const [trainerDesc, setTrainerDesc] = useState(null);
    const [venue, setVenue] = useState(null);
    const [start, setStart] = useState(null);
    const [end, setEnd] = useState(null);
    const [time, setTime] = useState(null);
    const [trainings, setTrainings] = useState(null);
    const [currTrainingId, setCurrentTrainingId] = useState(null);

    const [attdLink, setAttdLink] = useState(null);
    const [shift, setShift] = useState(null);

    const [snackOpen, setSnackOpen] = useState(false);
    const [isCreateTrainingDialog , setIsCreateTrainingDialog] = useState(true);

    const handleSnackClose = (event, reason) => {
        if (reason === 'clickaway') return;
        setSnackOpen(false);
    };

    const handleTrainingModalOpen = () => {
        setOpenTrainingModal(true);
        setIsCreateTrainingDialog(true);
    };

    const handleOpenUpdateTrainingModel = (training_number) => {
        
        setOpenTrainingModal(true);
        
        console.log("========== \n" , trainings[training_number])
        setCurrentTrainingId(trainings[training_number].training_id);
        setTitle(trainings[training_number].training_name);
        setDesc(trainings[training_number].training_desc);
        setTrainer(trainings[training_number].trainer_name);
        setTrainerDesc(trainings[training_number].trainer_desc);
        setVenue(trainings[training_number].training_venue);
        setStart(trainings[training_number].training_start_date);
        setEnd(trainings[training_number].training_end_date);
        setTime(trainings[training_number].training_time);
        setIsCreateTrainingDialog(false);

    }

    const handleTrainingModalClose = () => {
        setOpenTrainingModal(false);
        setTitle(null);
        setDesc(null);
        setTrainer(null);
        setTrainerDesc(null);
        setVenue(null);
        setStart(null);
        setEnd(null);
        setTime(null);
    };

    const handleAttdModalOpen = (training_id) => {
        setOpenAttdModal(true);
        setCurrentTrainingId(training_id);

    };

    const handleAttdModalClose = () => {
        setOpenAttdModal(false);
        setCurrentTrainingId(null);
    };

    const handleCreateTraining = (e) => {
        e.preventDefault();

        const data = {
            "training_name": title,
            "training_desc": desc,
            "training_venue": venue,
            "training_start_date": start,
            "training_end_date": end,
            "training_time": time,
            "trainer_name": trainer,
            "trainer_desc": trainerDesc
        }

        console.log(data);

        axios.post(`http://${ipAddress}:5000/training/add`, data)
        .then(response => {
            console.log(response);
            setSnackOpen(true);
        })
        .catch(e => {
            console.log(e.message);
        })
        .finally(() => {
            setOpenTrainingModal(false);
            setTitle(null);
            setDesc(null);
            setTrainer(null);
            setTrainerDesc(null);
            setVenue(null);
            setStart(null);
            setEnd(null);
            setTime(null);
        })
    }

    const handleCreateAttd = (e) => {
        e.preventDefault();
        const data = {
            training_id: currTrainingId,
            shift: shift,
            form_link: attdLink
        }
        console.log(data);

        axios.post(`http://${ipAddress}:3000/training/add/attendance`, data)
        .then(response => {
            response = response.data;
            console.log(response);
            // setSnackOpen(true);
        })
        .catch(e => {
            console.log(e.message);
        })
        .finally(() => {
            setOpenAttdModal(false);
            setAttdLink(null);
            setShift(null);
            setCurrentTrainingId(null);
        })
    }

    const handleStartDate = (date) => {
        setStartDate(date);
    };

    const handleUpdateTraining = (e) => {
        e.preventDefault();

        const data = {
            "training_id": currTrainingId,
            "training_name": title,
            "training_desc": desc,
            "training_venue": venue,
            "training_start_date": start,
            "training_end_date": end,
            "training_time": time,
            "trainer_name": trainer,
            "trainer_desc": trainerDesc
        }
        console.log(data);

        axios.put(`http://${ipAddress}:5000/training/update/training`,data )
        .then(response => {
            console.log(response);
            setSnackOpen(true);
        })
        .catch(e => {
            console.log(e.message);
        })
        .finally(() => {
            setOpenTrainingModal(false);
            setTitle(null);
            setDesc(null);
            setTrainer(null);
            setTrainerDesc(null);
            setVenue(null);
            setStart(null);
            setEnd(null);
            setTime(null);
        })
    }

    useEffect(() => {
        const fetch = () => {
            setLoading(true);
            axios.get(`http://${ipAddress}:5000/training/all`)
            .then(response => {
                response = response.data;
                console.log(response.result);
                setTrainings(response.result)
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

    return(
        <AdminNavbar tab='Trainings'>
            {
                loading ?
                <LinearProgress /> :
                <>
                    <h1 className={classes.title}>Events</h1>

                    <div className={classes.createBtnCont}>
                        <Button variant="contained" color="primary" className={classes.createBtn}onClick={handleTrainingModalOpen}><AddIcon /> Create Training</Button>
                    </div>

                    <div className={classes.container}>
                        {
                            trainings?.map((training, idx) => {
                                return (
                                    <TrainingCard
                                    key={idx}
                                    training_number = {idx}
                                    handleOpenUpdateTrainingModel={handleOpenUpdateTrainingModel}
                                    handleAttdModalOpen={handleAttdModalOpen}
                                    training_id={training.training_id}
                                    training_name={training.training_name}
                                    training_desc={training.training_desc}
                                    training_start_date={training.training_start_date}
                                    training_end_date={training.training_end_date}
                                    />
                                )
                            })
                        }
                    </div>
                </>
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
                    open={openTrainingModal}
                    onClose={handleTrainingModalClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 200,
                    }}
                >
                    <Fade in={openTrainingModal}>

                        <div className={classes.trainingModal}>
                            <div className={classes.closeCont}>
                                <IconButton onClick={handleTrainingModalClose}>
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
                                    <form onSubmit={isCreateTrainingDialog ? handleCreateTraining : handleUpdateTraining } autoComplete='off' className={classes.modalForm}  >
                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" placeholder="Session Title" variant="outlined" value={title} onChange={e => setTitle(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="Sesssion Description" value={desc} onChange={e => setDesc(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="Trainer Name" value={trainer} onChange={e => setTrainer(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="Trainer Description" value={trainerDesc} onChange={e => setTrainerDesc(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="Venue" value={venue} onChange={e => setVenue(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="Start Date" value={start} onChange={e => setStart(e.target.value)} />
                                            {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                                <KeyboardDatePicker
                                                    margin="normal"
                                                    id="date-picker-dialog"
                                                    label="Session Start Date"
                                                    format="dd/MM/yyyy"
                                                    value={startDate}
                                                    onChange={handleStartDate}
                                                    KeyboardButtonProps={{
                                                        'aria-label': 'change date',
                                                    }}
                                                />
                                            </MuiPickersUtilsProvider> */}
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="End Date" value={end} onChange={e => setEnd(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="Timing" value={time} onChange={e => setTime(e.target.value)} />
                                        </div>

                                        {isCreateTrainingDialog ?
                                        <Button
                                            variant='outlined'
                                            type='submit'
                                            style={{
                                                marginRight: '1.2rem'
                                            }}
                                        >
                                            Create Training
                                        </Button>
                                        :
                                        <Button variant='outlined'
                                            type='submit'
                                            style={{
                                                marginRight: '1.2rem'
                                            }}
                                        >
                                            Update Training
                                        </Button>
                                        }

                                    </form>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </Modal>
            </>

            <>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    open={openAttdModal}
                    onClose={handleAttdModalClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 200,
                    }}
                >
                    <Fade in={openAttdModal}>

                        <div className={classes.trainingModal}>
                            <div className={classes.closeCont}>
                                <IconButton onClick={handleAttdModalClose}>
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
                                    <form onSubmit={handleCreateAttd} autoComplete='off' className={classes.modalForm}>
                                        <div className={classes.input}>
                                            <TextField id="outlined-basic" placeholder="Attendance Form Link" variant="outlined" className={classes.textField} value={attdLink} onChange={e => setAttdLink(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField id="outlined-basic" placeholder="Shift" variant="outlined" className={classes.textField} value={shift} onChange={e => setShift(e.target.value)} />
                                        </div>

                                        <Button
                                            variant='outlined'
                                            type='submit'
                                            style={{
                                                marginRight: '1.2rem'
                                            }}
                                        >
                                            Send Attendance Form
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </Modal>
            </>

            <>
                <Snackbar
                    open={snackOpen}
                    autoHideDuration={6000}
                    onClose={handleSnackClose}
                >
                    <MuiAlert
                        onClose={handleSnackClose}
                        severity="success"
                        variant="filled"
                    >
                        Training Created Successfully!
                    </MuiAlert>
                </Snackbar>
            </>
        </AdminNavbar>
    );
}

export default Training;