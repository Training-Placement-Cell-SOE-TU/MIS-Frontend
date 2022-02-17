import { IconButton, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import PersonIcon from '@material-ui/icons/Person';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles({
    card: {
        '&:hover': {
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.219)',
        },
        // border: '1px solid black',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '1.2%',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: '0.2s ease all',
        backgroundColor: '#e8e8e8',
        marginBottom: '2rem'
    },
    body: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        width: '80%'
    },
    text: {
        alignSelf: 'center'
    },
    actionGrp: {
        alignSelf: 'center'
    }
})

export default function StudentCard() {
    const classes = useStyles();
    return(
        <div className={classes.card}>
            <div className={classes.body}>
                <div>
                    <Checkbox
                        defaultChecked
                        color="primary"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                </div>
                <Typography className={classes.text}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </Typography>
            </div>
            <div className={classes.actionGrp}>
                <IconButton>
                    <EditIcon style={{ color: 'black' }} />
                </IconButton>

                <IconButton>
                    <DeleteIcon style={{ color: 'black' }} />
                </IconButton>
                
                <IconButton>
                    <NotInterestedIcon style={{ color: 'black' }} />
                </IconButton>

                <IconButton>
                    <PersonIcon style={{ color: 'black' }} />
                </IconButton>
            </div>
        </div>
    )
}
