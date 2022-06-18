import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AdminNavbar from "../AdminNavbar";
// import "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
import Style from "./DataCollect.module.css";
import { Button, Divider, Switch, TextField } from "@mui/material";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import ShortTextIcon from '@mui/icons-material/ShortText';
import SegmentIcon from '@mui/icons-material/Segment';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

import Delete from "@material-ui/icons/Delete";
import Copy from '@mui/icons-material/ContentCopy';
import { Input } from "@material-ui/core";
import { set } from "date-fns";

const drawerWidth = 240;
let data = {};

let inputType = {
    0 : {name : "Short Answer" , icon : <ShortTextIcon /> , 
    responseType:<Input type="text" defaultValue="Response" disabled/>},
    1 : {name : "Paragraph" , icon : <SegmentIcon /> , 
    responseType:<Input type="textarea" defaultValue="Response" disabled/>},
    2 : {name : "Multiple Choices" , icon : <RadioButtonCheckedIcon /> , 
    responseType:<Input type="text" defaultValue="Option"/> , multipleInput:true},
    3 : {name : "Checkbox" , icon : <CheckBoxIcon /> ,
     responseType:<Input type="text" defaultValue="Option"/> ,  multipleInput:true},
    4 : {name : "Dropdown" , icon : <ArrowDropDownCircleIcon /> , 
    responseType:<Input type="text" defaultValue="Option"/> ,  multipleInput:true},
    5 : {name : "File Upload" , icon : <CloudUploadIcon /> , 
    responseType:<Input type="file" defaultValue="file" disabled/> },
    6 : {name : "Date" , icon : <CalendarMonthIcon />, 
    responseType:<Input type="date" value="13-06-2022" />},
    7 : {name : "Time" , icon : <AccessTimeFilledIcon  /> , 
    responseType:<Input type="time" defaultValue="12:30" disabled/>},
}

const useStyles = makeStyles((theme) => ({}));

function DataCollect(props) {
  const classes = useStyles();
  const [emptyState, setEmptyState] = useState(true);
  const [i, seti] = useState(0);
  const [update , setUpdate] = useState(true);

  function checkData() {
    if (Object.keys(data).length > 0) {
      console.log(data);
      setEmptyState(false);
    }
  }

  return (
    <AdminNavbar tab="Student Data">
      <div style={{ width: "100%", height: "80vh" }}>
        {emptyState && (
          <div className={Style.EmptyState}>
            {/* <lottie-player
              src="https://assets1.lottiefiles.com/packages/lf20_ydo1amjm.json"
              background="transparent"
              speed="1"
              style={{
                width: "50%",
                height: "auto",
              }}
              loop
              autoplay
            ></lottie-player> */}
            <div className={Style.EmptyMsg}>
              <h3 className={Style.EmptyLabel}>
                No Additional Data Is Being Collected
              </h3>
            </div>
          </div>
        )}

        <div className={Style.formatOfData}>
          {!emptyState && (
            <div className={Style.formsChild}>
              {Object.keys(data).map((key) => {
                return (
                  <div className={Style.formBox}>
                    
                    <div>
                    
                    <TextField
                      id="standard-basic"
                      label="Title*"
                      variant="standard"
                      defaultValue={data[key].title}
                      fullWidth
                    />
                    </div>

                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-helper-label">Type</InputLabel>
                        <Select
                        id="simple-select"
                        labelId="demo-helper-label"
                        label="Type"
                        defaultValue={data[key].type}
                        onChange={(event)=>{
                          console.log(event.target.value)
                          data[key].type = event.target.value
                          setUpdate(!update);                          
                        }}>
                            {Object.keys(inputType).map((key2) => {
                                return (
                                  <MenuItem key={key2} value={key2} selected={key2 === data[key].type}>
                                          <span className={Style.spanIcon}>{inputType[key2].icon}</span>
                                          <span className={Style.spanLabel}>{inputType[key2].name}</span>
                                    </MenuItem>
                                )
                            })
                            }
                        </Select>
                    </FormControl>

                    <TextField
                      id="standard-basic"
                      label="Description"
                      variant="standard"
                      defaultValue={data[key].description}
                    />

                   

                    <div className={Style.actionIconContainer}>
                    <Delete className={Style.actionIcons}/>
                    <Copy className={Style.actionIcons}/>
                    <span>| Required</span><Switch {..."required"} />
                    </div>
                    {inputType[data[key].type].responseType}
                    <div className={Style.blank}></div>
                    <div className={Style.blank}></div>
                    <div className={Style.blank}></div>
                    {(inputType[data[key].type].multipleInput) && 
                      <Button variant="contained" >Add More Option</Button>
                    }

                  </div>
                );
              })}
            </div>
          )}

            <div>
          <span
            className={Style.EmptyBtn}
            onClick={() => {
              data[i] = {
                type: 0,
                title: "",
                description: "",
                required: true,
                answer: "______",
              };
              seti(i + 1);
              checkData();
            }}
          >
            Add a New One
          </span>

          {!emptyState && <span
            className={Style.EmptyBtn}>
                Save
            </span>
            }
            </div>

        </div>
      </div>
    </AdminNavbar>
  );
}

export default DataCollect;