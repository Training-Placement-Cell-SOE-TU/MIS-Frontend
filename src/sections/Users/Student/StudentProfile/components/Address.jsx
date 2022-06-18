import './Education.scss'
import React, { useState } from 'react';
import { Avatar, Checkbox, IconButton, makeStyles } from '@material-ui/core';
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
    InfoModal: {
        backgroundColor: 'white',
        width: '70%',
        height: '70%',
        border: '1px solid black',
        overflowY: 'scroll'
    },

    badgeText: {
        display: 'flex',
        flexDirection: 'row',
    },
    fieldBox: {
        fontWeight: '500'
    },
    address: {
        fontWeight: 'bold'
    },
    addressText: {
        fontWeight: 'normal',
        fontStyle: 'italic'
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


const ipAddress = process.env.REACT_APP_IP;
const port = process.env.REACT_APP_PORT;

export default function AddressInfo(props) {
    console.log(props)
    const classes = useStyles();

    const [currStudentId, setCurrStudentId] = useState("")


    const [permanentAddress, setPermanentAddress] = useState(props.permanent_address)
    const [city, setCity] = useState(null)
    const [state, setState] = useState(null)
    const [country, setCountry] = useState(null)
    const [pincode, setPincode] = useState(null)
    const [district, setDistrict] = useState(null)
    const [addressInfo, setAddressInfo] = useState(null)
    const [addressInfo2, setAddressInfo2] = useState(null)

    const [isPermanentEqualsPresent, setIsPermanentEqualsPresent] = useState(false)
    const [checked, setChecked] = useState(true)

    const [presentCity, setPresentCity] = useState(null)
    const [presentState, setPresentState] = useState(null)
    const [presentCountry, setPresentCountry] = useState(null)
    const [presentPincode, setPresentPincode] = useState(null)
    const [presentDistrict, setPresentDistrict] = useState(null)
    const [presentAddressInfo, setPresentAddressInfo] = useState(null)
    const [presentAddressInfo2, setPresentAddressInfo2] = useState(null)

    const [openAddressInfoModal, setOpenAddressInfoModal] = useState(false)
    const [openPresentAddressInfoModal, setOpenPresentAddressInfoModal] = useState(false)

    var headers = {"headers" : { "Authorization": `Bearer ${localStorage.getItem("access-token")}`}}

    const handleAddressInfoClose = () => {
        setOpenAddressInfoModal(false)
    }

    const handlePresentAddressInfoClose = () => {
        setOpenAddressInfoModal(false)
    }

    const handleUpdateAddressInfo = (e) => {
        e.preventDefault()

        const data = {
            "student_id": currStudentId,
            "permanent_address": {
                "city": city,
                "state": state,
                "country": country,
                "pincode": pincode,
                "district": district,
                "address_line_1": addressInfo,
                "address_line_2": addressInfo2
            },
            "is_permanent_equals_present": isPermanentEqualsPresent,
            "present_address": {
                "city": presentCity,
                "state": presentState,
                "country": presentCountry,
                "pincode": presentPincode,
                "district": presentDistrict,
                "address_line_1": presentAddressInfo,
                "address_line_2": presentAddressInfo2
            }
        }

        console.log(data)

        axios.put(`http://${ipAddress}:${port}/student/update/address`,data, headers )
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        }).finally(() => {
            handleAddressInfoClose()
            handlePresentAddressInfoClose()
        })

    }

    const handleOpenAddressUpdate = () => {
        setOpenAddressInfoModal(true)

        setCurrStudentId(props.student_id)
        setCity(props.permanent_address.city)
        setState(props.permanent_address.state)
        setCountry(props.permanent_address.country)
        setPincode(props.permanent_address.pincode)
        setDistrict(props.permanent_address.district)
        setAddressInfo(props.permanent_address.address_line_1)
        setAddressInfo2(props.permanent_address.address_line_2)
    }

    const handleOpenPresentAddressUpdate = () => {
        setOpenPresentAddressInfoModal(true)

        setCurrStudentId(props.student_id)
        setPresentCity(props.present_address.city)
        setPresentState(props.present_address.state)
        setPresentCountry(props.present_address.country)
        setPresentPincode(props.present_address.pincode)
        setPresentDistrict(props.present_address.district)
        setPresentAddressInfo(props.present_address.address_line_1)
        setPresentAddressInfo2(props.present_address.address_line_2)
    }

    isPermanentEqualsPresent ? console.log("true") : handleOpenPresentAddressUpdate()

    return(
        <div className='col-lg-6 cred-box'>
            <div className={classes.detailsHeader}>
                <div className={classes.credHeader}>Address Info</div>
                <IconButton className={classes.iconBtn} onClick={()=> handleOpenAddressUpdate()}>
                    <EditIcon className={classes.editIcon}/>
                </IconButton>
            </div>
            <div className={classes.detailsBox}>
                <div className={classes.fieldBox}>
                    <p className={classes.address}>Permanent Address <span className={classes.addressText}>
                    {permanentAddress.address_line_1}  {permanentAddress.address_line_2},  City-{permanentAddress.city} Dist-{permanentAddress.district} Country- {permanentAddress.country}, Pin - {permanentAddress.pincode}
                    </span></p>

                    <p>
                        Is Permanent address your present Address ? 
                        <Checkbox 
                            checked={checked}
                            onChange={(e) => {
                                setChecked(e.target.checked)
                                setIsPermanentEqualsPresent(e.target.checked)
                            }}
                        />
                    </p>

                    <p className={classes.address}>Present Address <span className={classes.addressText}>
                        
                    </span></p>
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
                    open={openAddressInfoModal}
                    onClose={handleAddressInfoClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 200,
                    }}
                >
                    <Fade in={openAddressInfoModal}>

                        <div className={classes.InfoModal}>
                        <div className={classes.closeCont}>
                                <IconButton onClick={handleAddressInfoClose}>
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
                                    <form onSubmit={handleUpdateAddressInfo } autoComplete='off' className={classes.modalForm}  >
                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" placeholder="Address Line 1" variant="outlined" value={addressInfo} onChange={e => setAddressInfo(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="Address Line 2" value={addressInfo2} onChange={e => setAddressInfo2(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="City" value={city} onChange={e => setCity(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="District" value={district} onChange={e => setDistrict(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="Pincode" value={pincode} onChange={e => setPincode(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="State" value={state} onChange={e => setState(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="Country" value={country} onChange={e => setCountry(e.target.value)} />
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
            <>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    open={openPresentAddressInfoModal}
                    onClose={handlePresentAddressInfoClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 200,
                    }}
                >
                    <Fade in={openPresentAddressInfoModal}>

                        <div className={classes.InfoModal}>
                        <div className={classes.closeCont}>
                                <IconButton onClick={handlePresentAddressInfoClose}>
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
                                    <form onSubmit={handleUpdateAddressInfo } autoComplete='off' className={classes.modalForm}  >
                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" placeholder="Address Line 1" variant="outlined" value={presentAddressInfo} onChange={e => setPresentAddressInfo(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="Address Line 2" value={presentAddressInfo2} onChange={e => setPresentAddressInfo2(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="City" value={presentCity} onChange={e => setPresentCity(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="District" value={presentDistrict} onChange={e => setPresentDistrict(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="Pincode" value={presentPincode} onChange={e => setPresentPincode(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="State" value={presentState} onChange={e => setPresentState(e.target.value)} />
                                        </div>

                                        <div className={classes.input}>
                                            <TextField className={classes.textField} id="outlined-basic" variant="outlined" placeholder="Country" value={presentCountry} onChange={e => setPresentCountry(e.target.value)} />
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
