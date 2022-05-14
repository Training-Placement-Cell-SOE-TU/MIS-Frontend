import 'date-fns';
import React, { useState, useEffect } from 'react';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import TrainingCard from './components/TrainingCard';
import { Button, Backdrop, Icon, TextField, CircularProgress } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
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

const ipAddress = "127.0.0.1"
const port = "7000"

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '30px'
    },
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

function Trainings(props) {
    const classes = useStyles();
    // training id, shift, link
    const [loading, setLoading] = useState(false);

    const [openRegisterModal, setOpenRegisterModal] = useState(false);
    
    const [name, setName] = useState(null);
    const [rollNo, setRollNo] = useState(null);
    const [email, setEmail] = useState(null);
    const [department, setDepartment] = useState(null);
    const [programme, setProgramme] = useState(null);
    const [mobile, setMobile] = useState(null);
    const [yop, setYop] = useState(null);
    const [semester, setSemester] = useState(null);

    const [trainings, setTrainings] = useState(null);
    const [currTrainingId, setCurrentTrainingId] = useState(null);

    const [attdLink, setAttdLink] = useState(null);
    const [shift, setShift] = useState(null);

    const [snackOpen, setSnackOpen] = useState(false);

    const handleSnackClose = (event, reason) => {
        if (reason === 'clickaway') return;
        setSnackOpen(false);
    };

    const handleRegisterModal = (training_id) => {
        setOpenRegisterModal(true);
        setCurrentTrainingId(training_id);
    };

    const handleRegisterModalClose = () => {
        setOpenRegisterModal(false);
        setCurrentTrainingId(null);
        setName(null);
        setRollNo(null);
        setEmail(null);
        setDepartment(null);
        setProgramme(null);
        setMobile(null);
        setYop(null);
        setSemester(null);
    };

    const handleRegisterTraining = (e) => {
        e.preventDefault();

        const data = {
            training_id: currTrainingId,
            student_name: name,
            student_rollno: rollNo,
            student_email: email,
            student_department: department,
            enrolled_programme: programme,
            mobile: mobile,
            yop_tu: yop,
            semester: semester
        }

        console.log(data);

        axios.post(`http://${ipAddress}:${port}/training/register/student`, data)
        .then(response => {
            response = response.data;
            console.log(response);
            setSnackOpen(true);
        })
        .catch(e => {
            console.log(e.message);
        })
        .finally(() => {
            handleRegisterModalClose();
        })
    }

    useEffect(() => {
        const fetch = () => {
            setLoading(true);
            axios.get(`http://${ipAddress}:${port}/training/all`)
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
        <div className={classes.root}>
            {
                loading ?
                <LinearProgress /> :
                <>
                    <h1 className={classes.title}>Trainings</h1>

                    <div className={classes.container}>
                        <div className='row'>
                        {
                            trainings?.map((training, idx) => {
                                return (
                                    <div className='col-lg-6'>  
                                        <TrainingCard
                                        key={idx}
                                        handleRegisterModal={handleRegisterModal}
                                        training_id={training.training_id}
                                        trainer_name={training.trainer_name}
                                        training_name={training.training_name}
                                        training_desc={training.training_desc}
                                        training_start_date={training.training_start_date}
                                        training_end_date={training.training_end_date}
                                        />
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                </>
            }

            {loading ? <CircularProgress /> :
            <>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    open={openRegisterModal}
                    onClose={handleRegisterModalClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 200,
                    }}
                >
                    <Fade in={openRegisterModal}>

                        <div className={classes.trainingModal}>
                            <div className={classes.closeCont}>
                                <IconButton onClick={handleRegisterModalClose}>
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
                                    <form onSubmit={handleRegisterTraining} autoComplete='off' className={classes.modalForm}>
                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" placeholder="Student Name" variant="outlined" value={name} onChange={e => setName(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" placeholder="Roll No" variant="outlined" value={rollNo} onChange={e => setRollNo(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" placeholder="Student Email" variant="outlined" value={email} onChange={e => setEmail(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" placeholder="Department" variant="outlined" value={department} onChange={e => setDepartment(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" placeholder="Programme" variant="outlined" value={programme} onChange={e => setProgramme(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" placeholder="Mobile No" variant="outlined" value={mobile} onChange={e => setMobile(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" placeholder="Year Of Passing" variant="outlined" value={yop} onChange={e => setYop(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" placeholder="Semester" variant="outlined" value={semester} onChange={e => setSemester(e.target.value)} />
                                        </div>

                                        <Button
                                            variant='outlined'
                                            type='submit'
                                            style={{
                                                marginRight: '1.2rem'
                                            }}
                                        >
                                            Register
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </Modal>
            </>
}

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
                        Registered Successfully!
                    </MuiAlert>
                </Snackbar>
            </>
        </div>
    );
}

export default Trainings;