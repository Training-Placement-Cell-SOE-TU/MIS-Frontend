import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AdminNavbar from "../AdminNavbar";
import "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
import Style from "./DataCollect.module.css";
import { Divider, Switch, TextField } from "@mui/material";

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

const drawerWidth = 240;
let data = {};

let inputType = {
    0 : {name : "Short Answer" , icon : <ShortTextIcon /> , Selected :true},
    1 : {name : "Paragraph" , icon : <SegmentIcon /> , Selected :false},
    2 : {name : "Multiple Choices" , icon : <RadioButtonCheckedIcon /> , Selected :false},
    3 : {name : "Checkbox" , icon : <CheckBoxIcon /> , Selected :false},
    4 : {name : "Dropdown" , icon : <ArrowDropDownCircleIcon /> , Selected :false},
    5 : {name : "File Upload" , icon : <CloudUploadIcon /> , Selected :false},
    6 : {name : "Date" , icon : <CalendarMonthIcon /> , Selected :false},
    7 : {name : "Time" , icon : <AccessTimeFilledIcon /> , Selected :false}
}

const useStyles = makeStyles((theme) => ({}));

function DataCollect(props) {
  const classes = useStyles();
  const [emptyState, setEmptyState] = useState(true);
  const [i, seti] = useState(0);

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
            <lottie-player
              src="https://assets1.lottiefiles.com/packages/lf20_ydo1amjm.json"
              background="transparent"
              speed="1"
              style={{
                width: "50%",
                height: "auto",
              }}
              loop
              autoplay
            ></lottie-player>
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
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Input Type">
                            {Object.keys(inputType).map((key) => {
                                return (
                                    <MenuItem value={key} selected={inputType[key].Selected}>
                                        <span className={Style.spanIcon}>{inputType[key].icon}</span>
                                        <span className={Style.spanLabel}>{inputType[key].name}</span>
                                    </MenuItem>
                            )
                            })}
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
                type: "Short Answer",
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
