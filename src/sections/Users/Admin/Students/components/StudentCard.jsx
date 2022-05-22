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
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.219)',
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
        marginBottom: '0.5rem'
    },
    body: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        width: '80%'
    },
    sections: {
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 2fr 1fr 1fr 2fr',
        paddingTop:'8px',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '10px'
    },
    actionGrp: {
        alignSelf: 'center'
    }
})

export default function StudentCard(props) {
    const classes = useStyles();
    return(
        <div className={classes.card}
        style={props.noExtras ? {height : '60px' , marginBottom : '0.5rem'} : {}}
        >
            <div className={classes.body}>
                <div>
                     <Checkbox
                        defaultChecked
                        color="primary"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                </div>
                {console.log(props)}
                <div className={classes.sections}>
                    <div>{props.data.roll_no}</div>
                    <div>{props.data.fname +" "+ props.data.lname}</div>
                    <div>{props.data.batch}</div>
                    <div>{props.data.branch}</div>
                    <div>{props.data.email}</div>
                </div>
            </div>
            <div className={classes.actionGrp}>
                <IconButton>
                    <EditIcon style={props.noExtras ? {opacity : '0.3'} : {color: 'black'}} />
                </IconButton>

                <IconButton>
                    <DeleteIcon style={{ color: 'black' }} />
                </IconButton>
                
                <IconButton>
                    <NotInterestedIcon style={{ color: 'black' }} />
                </IconButton>

                <IconButton>
                    <PersonIcon style={props.noExtras ? {opacity : '0.3'} : {color: 'black'}}/>
                </IconButton>
            </div>
        </div>
    )
}
