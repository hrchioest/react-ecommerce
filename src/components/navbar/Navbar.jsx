import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CartIconCount from "../carIconCount/CartIconCount";
import useStyles from "./Style";
import CartContext from '../../CartContext';

const Navbar = () => {
  const { cartCount } = React.useContext(CartContext);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            LOGO
          </Typography> 
          <CartIconCount count={cartCount} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
