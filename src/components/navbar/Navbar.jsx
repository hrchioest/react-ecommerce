import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CartIcon from "../cart/CartIcon";
import useStyles from "./Style";
import {NavLink} from "react-router-dom";
import { useState } from "react";

const categories = [{ name:'Notebooks', id:'notebooks'}, {name: 'Audio', id:'audio'}, {name:'Smartwatches', id:'smartwatches'}]

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
             <NavLink to="/">LOGO</NavLink>
          </Typography>
        {categories.map(cat =><li key={cat.id}><NavLink to ={`/categories/${cat.id}`}>{cat.name}</NavLink></li>)}
        <NavLink to="/cart"><CartIcon  /></NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
