import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CartIconCount from "../carIconCount/CartIconCount";
import useStyles from "../../styleComponets/StyleComponents";

const Navbar = ({counter}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            LOGO
          </Typography> 
          <CartIconCount cartCount={counter}/>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
