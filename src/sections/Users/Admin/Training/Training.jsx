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

const drawerWidth = 240;

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
    }
}));

function Training(props) {
    const classes = useStyles();

    const [openTrainingModal, setOpenTrainingModal] = useState(false);
    const [openAttdModal, setOpenAttdModal] = useState(false);
    const [startDate, setStartDate] = useState(new Date(Date.now()));

    const handleTrainingModalOpen = () => {
        setOpenTrainingModal(true);
    };

    const handleTrainingModalClose = () => {
        setOpenTrainingModal(false);
    };

    const handleAttdModalOpen = () => {
        setOpenAttdModal(true);
    };

    const handleAttdModalClose = () => {
        setOpenAttdModal(false);
    };

    const handleCreateTraining = (e) => {
        e.preventDefault();
        setOpenTrainingModal(true);
    }

    const handleCreateAttd = (e) => {
        e.preventDefault();
        setOpenAttdModal(true);
    }

    const handleStartDate = (date) => {
        setStartDate(date);
    };

    return(
        <AdminNavbar tab='Training'>
            <h1 className={classes.title}>Events</h1>

            <div className={classes.createBtnCont}>
                <Button variant="contained" color="primary" className={classes.createBtn}onClick={handleTrainingModalOpen}><AddIcon /> Create Training</Button>
            </div>

            <div className={classes.container}>
                <TrainingCard handleAttdModalOpen={handleAttdModalOpen} />
                <TrainingCard handleAttdModalOpen={handleAttdModalOpen} />
                <TrainingCard handleAttdModalOpen={handleAttdModalOpen} />
                <TrainingCard handleAttdModalOpen={handleAttdModalOpen} />
                <TrainingCard handleAttdModalOpen={handleAttdModalOpen} />
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
                                <div className='add-proj-box' style={{
                                    display: 'block',
                                    textAlign: 'center'
                                }}>
                                    <form onSubmit={handleCreateTraining} autoComplete='off' style={{
                                        display: 'inline-block',
                                        marginLeft: 'auto',
                                        marginRight: 'auto',
                                        textAlign: 'left'
                                    }}>
                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" placeholder="Session Title" variant="outlined" className={classes.textField} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="Sesssion Description" />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="Session Thumbnail Link" />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="Photo of resource person" />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="Venue" />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="Registration Link" />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="Start Date & Time" />
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
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="End Date & Time" />
                                        </div>

                                        <Button
                                            variant='outlined'
                                            type='submit'
                                            style={{
                                                marginRight: '1.2rem'
                                            }}
                                        >
                                            Create Training
                                        </Button>
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
                                <div className='add-proj-box' style={{
                                    display: 'block',
                                    textAlign: 'center'
                                }}>
                                    <form onSubmit={handleCreateAttd} autoComplete='off' style={{
                                        display: 'inline-block',
                                        marginLeft: 'auto',
                                        marginRight: 'auto',
                                        textAlign: 'left'
                                    }}>
                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" placeholder="Attendance Form Link" variant="outlined" className={classes.textField} />
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
        </AdminNavbar>
    );
}

export default Training;