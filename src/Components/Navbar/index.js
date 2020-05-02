import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from '@material-ui/core/Button';

import logo from "../../Assets/images/logo.png";
import ImgUser from "../../Assets/images/Ellipse 2.png";
import "./style.min.css";
import "../../Styles/App.min.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openS, setOpenS] = React.useState(false);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpen = () => {
    setOpenS(true);
  };
  return (
    <div className={classes.root}>
      <AppBar color="white" position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={`${classes.menuButton} only-mobile`}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <div className="logo-nav">
              <img src={logo} alt="logo Tethyr" />
            </div>
          </Typography>
          <span className="nav-middle-menu">
            <span> Menu: </span>
            
            <Button className={classes.button} onClick={handleOpen}>
            <b>
            Playlist & Group manager
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.6567 8L7.99988 13.6569L2.34303 8"
                stroke="#56B05B"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </b>
      </Button>
          </span>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <img style={{ height: 30 }} src={ImgUser} alt="user avatar" />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
