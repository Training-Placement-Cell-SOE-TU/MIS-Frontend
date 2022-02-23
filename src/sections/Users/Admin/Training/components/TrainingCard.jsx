import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    cardContainer: {
        marginBottom: '2rem',
        textAlign: 'left',
        // paddingLeft: '10%',
        // paddingRight: '10%'
    },
    root: {
      display: 'flex',
    //   width: '70%'
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: '50%',
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
    attdBtn: {
      textTransform: 'none',
      marginTop: '1rem'
    },
    cardTitle: {
        fontWeight: 'bold',
        marginBottom: '1rem'
    },
    cardDesc: {
        marginTop: '1rem'
    },
    startDate: {
        display: 'inline-block',
        padding: '6px 14px 6px 14px',
        marginRight: '1rem',
        borderRadius: '50px',
        background: '#5bde52',
        color: 'white',
        fontSize: '0.8rem'
    },
    endDate: {
        display: 'inline-block',
        padding: '6px 14px 6px 14px',
        borderRadius: '50px',
        background: '#ff6b6b',
        color: 'white',
        fontSize: '0.8rem'
    },
}));

export default function TrainingCard(props) {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className={classes.cardContainer}>
            <Card className={classes.root}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>

                        <Typography className={classes.cardTitle}>
                            Lorem Ipsum
                        </Typography>

                        <Typography variant="subtitle2" color="textSecondary" className={classes.startDate}>
                            Start Date: 23 February 2022
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" className={classes.endDate}>
                            End Date: 25 February 2022
                        </Typography>

                        <Typography variant="subtitle2" color="textSecondary" className={classes.cardDesc}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam urna nulla, feugiat et justo quis, lobortis feugiat enim. Quisque facilisis tincidunt erat, iaculis vulputate sapien posuere sed. Duis facilisis posuere mi non pulvinar. Ut ut ligula scelerisque, lobortis diam vitae, molestie nisi. In hac habitasse platea dictumst. Aliquam fermentum id....
                        </Typography>

                        <Button variant="contained" color="secondary" className={classes.attdBtn} onClick={props.handleAttdModalOpen}>
                            Take Attendance
                        </Button>
                    </CardContent>
                </div>
            </Card>
        </div>
    )
}