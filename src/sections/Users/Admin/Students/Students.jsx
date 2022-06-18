import React, { useState, useEffect } from 'react';

import IconButton from '@material-ui/core/IconButton';

import { makeStyles, useTheme } from '@material-ui/core/styles';
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
import axios from 'axios';

const drawerWidth = 240;

const baseurl = process.env.REACT_APP_BASE_URL;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    saveDataBtn : {
        textTransform: 'none',
        marginTop: '1rem',
        marginLeft: '1rem',
        backgroundColor: 'green'
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


function studentCardGe(data , year , branch , branch_list){
    let newData = data;
    
    if(year !== 0){ newData = newData.filter(obj => obj.batch === year)}
    if(branch !== 0){ newData = newData.filter(obj => obj.branch === branch_list[branch]) }

    return Object.keys(newData).map(key => {
        return (
            <StudentCard
                key={key}
                data = {newData[key]}/>
        )
    })
}


function Students(props) {
    const classes = useStyles();

    const history = useHistory();
    console.log(history.location.pathname);

    const [search, setSearch] = useState('');
    const [year, setYear] = useState(0);
    const [branch , setBranch] = useState(0)

    const handleYearChange = (event) => {
        setYear(parseInt(event.target.value));
    };

    
    const handleBranchChange = (event) => {
        console.log(event.target.value);
        setBranch(parseInt(event.target.value));
    };

    const [data , setData] = useState([]);
    const [branch_list , setBranchList] = useState({});
    const [year_list , setYearList] = useState({});

    useEffect(() => {
        axios.get(`${baseurl}/admin/all_student`)
        .then(res => {
            setData(res.data);

            //get unique branch list and add to branch_list
            let count =  1;
            let branch_dict = {
                0 : 'All'
            }
            Object.keys(res.data).forEach(key => {
                if(!(Object.values(branch_dict).includes(res.data[key].branch) )){
                    branch_dict[count] = res.data[key].branch;
                    count++;
                }
            })
            setBranchList(branch_dict);

            //get unique year list and add to year_list
            let year_li = {
                0 : 'All'
            }

            Object.keys(res.data).forEach(key => {
                if(!(Object.values(year_li).includes(res.data[key].batch) )){
                    year_li[res.data[key].batch] = res.data[key].batch;
                }
            })
            setYearList(year_li);

        })
        .catch(err => console.log(err));
    }, []);


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
                            defaultValue={year}
                            value={year}
                            onChange={handleYearChange}
                            label="Age"
                        >

                        { Object.keys(year_list).map(key => {
                            return (
                                <MenuItem value={key}>{year_list[key]}</MenuItem>
                            )
                        }
                        )}

                        </Select>
                    </FormControl>
                </div>

                <div className={classes.filter}>
                    <FormControl variant='filled' className={classes.formControl}>
                        <InputLabel id="demo-simple-select-outlined-label">Branch</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={branch}
                            onChange={handleBranchChange}
                            label="Age"
                        >

                        {
                            Object.keys(branch_list).map(key => {
                                return (
                                    <MenuItem key={key} value={key}>{branch_list[key]}</MenuItem>
                                )
                            })
                        }
                        </Select>
                    </FormControl>
                </div>
            </div>
            <Button variant="contained" color="secondary" className={classes.saveDataBtn} onClick={() => {
                axios.post(`${baseurl}/admin/student/data`)
                .then(response => {
                    console.log(response)
                    window.open(`${baseurl}/admin/student/data`, '_blank')
                }).catch(e => {
                    console.log(e.message)
                })
            }}>
                Save Data As Excel
            </Button>
            <div className={classes.studentGrp}>
                        <StudentCard 
                            key = {100}
                            data = {{
                                batch: "Batch",
                                branch: "Branch",
                                email: "Email",
                                fname: "Name",
                                gender: "Gender",
                                lname: " ",
                                roll_no: "Roll Number"
                            }}
                            noExtras = {true}
                        />
                        {/* create a student card for each student */}
                    {
                            studentCardGe(data , year , branch , branch_list)
                    }
            </div>
        </AdminNavbar>
    );
}

export default Students;