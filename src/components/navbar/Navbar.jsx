import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CartIcon from "../cart/CartIcon";
import useStyles from "./Style";
import CartContext from '../../CartContext';
import {Link} from "react-router-dom";


const Navbar = () => {
  const { cartCount } = React.useContext(CartContext);

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
             <Link to="/">LOGO</Link>
          </Typography>
          <CartIcon count={cartCount} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
