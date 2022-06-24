import "./Education.scss";
import React from "react";
import { Avatar, IconButton, makeStyles } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import ClearIcon from "@material-ui/icons/Clear";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AddIcon from "@material-ui/icons/Add";
import BackupOutlinedIcon from "@material-ui/icons/BackupOutlined";
import { Button, Input } from "@mui/material";
import  {uploadScoreCard} from "../../../../../Services/storage";
import { PropaneSharp, WindowSharp } from "@mui/icons-material";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  editBtn: {
    display: "flex",
    flexDirection: "row-reverse",
  },
  detailsHeader: {
    display: "flex",
  },
  credHeader: {
    alignSelf: "center",
    marginRight: "1rem",
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
  iconBtn: {
    backgroundColor: "rgb(233, 233, 233)",
    alignSelf: "center",
  },
  editIcon: {
    color: "#0066ff",
  },
  detailsBox: {
    marginTop: "1.2rem",
    fontSize: "14px",
  },
  badge: {
    backgroundColor: "#0066ff",
    color: "white",
    fontWeight: "500",
    borderRadius: "5px",
    marginRight: "0.5rem",
    marginBottom: "0.7rem",
    display: "inline-block",
    padding: "10px",
    fontSize: "0.8rem",
    lineHeight: "1",
    textAlign: "center",
    whiteSpace: "nowrap",
    verticalAlign: "baseline",
    borderRadius: ".40rem",
  },
  badgeText: {
    display: "flex",
    flexDirection: "row",
  },
  fieldBox: {
    fontWeight: "500",
  },
  scoreBadge: {
    backgroundColor: "#d1d1d1",
    color: "#424242",
    fontWeight: "500",
    borderRadius: "5px",
    marginRight: "0.5rem",
    marginBottom: "0.7rem",
    padding: "10px",
    fontSize: "0.8rem",
    lineHeight: "1",
    borderRadius: ".40rem",
    display: "inline-block",
  },
  pdfBadge: {
    backgroundColor: "#0066ff",
    color: "white",
    fontWeight: "500",
    borderRadius: "5px",
    marginRight: "0.5rem",
    marginBottom: "0.7rem",
    padding: "10px",
    fontSize: "0.8rem",
    lineHeight: "1",
    borderRadius: ".40rem",
    display: "inline-block",
  },
}));

const certificates = ["Machine Learning", "Boostrap", "NASA Research"];

const scorecard = {
  0: { name: "All Sem", url: "" },
  // 1: { name: "Sem 2", url: "" },
  // 2: { name: "Sem 3", url: "" },
  // 3: { name: "Sem 4", url: "" },
  // 4: { name: "Sem 5", url: "" },
  // 5: { name: "Sem 6", url: "" },
  // 6: { name: "Sem 7", url: "" },
  // 7: { name: "Sem 8", url: "" },
};

const ScoreBadge = ({ url,sem , student_id }) => {
  const classes = useStyles();
  return (
    <div>
      <p className={classes.scoreBadge}>{sem}</p>
      <label htmlFor="contained-button-file">
        <Input
          accept="document/*"
          id="contained-button-file"
          multiple
          type="file"
            style={{ width:"0px" }}
            onChange={(e) => {
                let file = e.target.files[0];
                uploadScoreCard(file, student_id , sem);
            }}
        />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>

      <IconButton>
        <VisibilityIcon color="enabled" style={{ cursor: "pointer" }} 
          onClick={() => {
            console.log(url);
            window.open( url, '_blank');
          }}
        />
      </IconButton>
    </div>
  );
};

export default function ScoreCard(props) {
  const classes = useStyles();

  if(props.score){
    console.log(props.score);
    scorecard[0].url = props.score;
  }

  return (
    <div className="col-lg-6 cred-box" style={{}}>
      <div className={classes.detailsHeader}>
        <div className={classes.credHeader}>Score Card Info</div>
      </div>
      <div className={classes.detailsBox}>
        {Object.keys(scorecard).map((index) => {
          return (
            <div key={index}>
              <ScoreBadge key={index} url={scorecard[index].url} sem={scorecard[index].name} student_id={props.student_id} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
