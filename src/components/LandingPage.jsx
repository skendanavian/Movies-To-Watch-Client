import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Backdrop from "@material-ui/core/Backdrop";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import "./LandingPage.scss";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 3, 2),
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div className="landing-page">
      <CssBaseline />
      <div className="flex-column">
        <h1 className="shadow-red">The Watch List</h1>
        <h2>Never Waste Another Minute When Choosing A Movie!</h2>

        <div className="flex-row">
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
