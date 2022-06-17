import './Education.scss'
import React, { useState } from 'react';
import { Avatar, Checkbox, IconButton, makeStyles } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
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
    const [addressInfo, setAdressInfo] = useState(null)
    const [addressInfo2, setAdressInfo2] = useState(null)
    const [isPermanentEqualsPresent, setIsPermanentEqualsPresent] = useState(false)

    const [openAddressInfoModal, setOpenAddressInfoModal] = useState(false)

    var headers = {"headers" : { "Authorization": `Bearer ${localStorage.getItem("access-token")}`}}

    const handleAddressInfoClose = () => {
        setOpenAddressInfoModal(false)

        setPermanentAddress(null)
        setCity(null)
        setState(null)
        setCountry(null)
        setPincode(null)
        setDistrict(null)
        setAdressInfo(null)
        setAdressInfo2(null)
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
                "address_info": addressInfo,
                "address_info2": addressInfo2
            },
            "is_permanent_equals_present": isPermanentEqualsPresent,
            "present_address": {
                "city": "",
                "state": "",
                "country": "",
                "pincode": "",
                "district": "",
                "address_info": "",
                "address_info2": ""
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
            setOpenAddressInfoModal(false)

            setPermanentAddress(null)
            setCity(null)
            setState(null)
            setCountry(null)
            setPincode(null)
            setDistrict(null)
            setAdressInfo(null)
            setAdressInfo2(null)
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
        setAdressInfo(props.permanent_address.address_info)
        setAdressInfo2(props.permanent_address.address_info2)
        setIsPermanentEqualsPresent(props.is_permanent_equals_present)

    }

    return(
        <div className='col-lg-6 cred-box'>
            <div className={classes.detailsHeader}>
                <div className={classes.credHeader}>Address Info</div>
                <IconButton className={classes.iconBtn} onClick={()=>handleOpenAddressUpdate()}>
                    <EditIcon className={classes.editIcon}/>
                </IconButton>
            </div>
            <div className={classes.detailsBox}>
                <div className={classes.fieldBox}>
                    <p className={classes.address}>Permanent Address <span className={classes.addressText}>
                    {permanentAddress.address_line_1}  {permanentAddress.address_line_2},  City-{permanentAddress.city} Dist-{permanentAddress.district} Country- {permanentAddress.country}, Pin - {permanentAddress.pincode}
                    </span></p>

                    <p>
                        Is Permanent address your present Address ? <Checkbox />
                    </p>

                    <p className={classes.address}>Present Address <span className={classes.addressText}>
                        
                    </span></p>
                </div>
            </div>
        </div>
    );
}
