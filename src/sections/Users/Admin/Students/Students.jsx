import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { tabs } from '../Tabs';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import SearchIcon from '@material-ui/icons/Search';
import CancelIcon from '@material-ui/icons/Cancel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button } from '@material-ui/core';
import StudentCard from './components/StudentCard';
import AdminNavbar from '../AdminNavbar';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
        display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    avatar: {
        width: '200px',
        height: '200px',
        overflow: 'hidden',
        borderRadius: '50%',
    },
    username: {
        marginTop: '20px',
        // fontWeight: 'bold'
    },
    topBar: {
        display: 'flex',
        flexDirection: 'row'
    },
    header: {
    },
    searchContainer: {
        display: 'inline-block',
        // width: '60%',
    },
    searchForm: {
        display: 'flex',
        flexDirection: 'row',
        boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.219)',
    },
    searchBar: {
        '&:focus': {
            outline: 'none'
        },
        // padding: '1.5%',
        width: '100%',
        // borderRadius: '10px',
        border: 'none',
        
        paddingLeft: '1.5rem',
        // borderRadius: '10px',
        minHeight: '55px',
        paddingRight: '1.5rem',
    },
    formControl: {
        minWidth: 120,
        // marginTop: theme.spacing(1),
    },
    selectEmpty: {
        // marginTop: theme.spacing(2),
    },
    filterGrp: {
        display: 'flex',
        marginTop: '2rem'
    },
    filter: {
        marginRight: '1.2rem'
    },
    studentGrp: {
        marginTop: '2rem'
    }
}));

function Students(props) {
    const classes = useStyles();

    const history = useHistory();
    console.log(history.location.pathname);

    const [search, setSearch] = useState('');
    const [year, setYear] = useState('');

    const handleYearChange = (event) => {
        setYear(event.target.value);
    };

    return (
        <AdminNavbar tab='Students'>
            <div className={classes.searchContainer}>
                <div className={classes.searchForm}>
                    <form>
                        <input
                        type='text'
                        className={classes.searchBar}
                        value={search}
                        onChange={e => {
                            setSearch(e.target.value)
                        }}
                        />
                    </form>

                    <IconButton>
                        <CancelIcon color='disabled' />
                    </IconButton>

                    <IconButton>
                        <SearchIcon style={{ fontSize: '2rem' }} />
                    </IconButton>
                </div>
            </div>

            <div className={classes.filterGrp}>
                <div className={classes.filter}>
                    <FormControl variant='filled' className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Batch</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={year}
                            onChange={handleYearChange}
                            label="Age"
                        >
                        <MenuItem value={2020}>2020</MenuItem>
                        <MenuItem value={2021}>2021</MenuItem>
                        <MenuItem value={2022}>2022</MenuItem>
                        <MenuItem value={2023}>2023</MenuItem>
                        <MenuItem value={2024}>2024</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className={classes.filter}>
                    <FormControl variant='filled' className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Batch</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={year}
                            onChange={handleYearChange}
                            label="Age"
                        >
                        <MenuItem value={2020}>2020</MenuItem>
                        <MenuItem value={2021}>2021</MenuItem>
                        <MenuItem value={2022}>2022</MenuItem>
                        <MenuItem value={2023}>2023</MenuItem>
                        <MenuItem value={2024}>2024</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <div className={classes.filter}>
                    <FormControl variant='filled' className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Batch</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={year}
                            onChange={handleYearChange}
                            label="Age"
                        >
                        <MenuItem value={2020}>2020</MenuItem>
                        <MenuItem value={2021}>2021</MenuItem>
                        <MenuItem value={2022}>2022</MenuItem>
                        <MenuItem value={2023}>2023</MenuItem>
                        <MenuItem value={2024}>2024</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <Button variant='contained' color='primary'>Filter</Button>
            </div>

            <div className={classes.studentGrp}>
                <StudentCard />
                <StudentCard />
                <StudentCard />
                <StudentCard />
                <StudentCard />
                <StudentCard />
                <StudentCard />
            </div>
        </AdminNavbar>
    );
}

export default Students;