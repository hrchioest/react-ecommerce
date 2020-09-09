import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CartContext from '../../CartContext';



const Cart = () =>{
       
        const { cartItem } = React.useContext(CartContext);
       
        if(cartItem.length ===0){
               return(<div>¡No se tiene productos seleccionados!</div>);
        }
    return(
        
        <TableContainer component={Paper}>
                <Table aria-label="simple table">
                        <TableHead>
                                <TableRow>
                                        <TableCell>Producto</TableCell>
                                        <TableCell>Nombre</TableCell>
                                        <TableCell align="right">cantidad</TableCell>
                                        <TableCell align="right">precio</TableCell>
                                </TableRow>
                        </TableHead>
                        <TableBody>
                                {  cartItem.map((item) => (
                                        <TableRow key={item.id}>
                                                <TableCell component="th" scope="row">
                                                <img src={item.img} alt="img" style={{width:"120px"}}  />
                                                </TableCell>
                                                <TableCell >{item.name}</TableCell>
                                                <TableCell align="right">{item.count}</TableCell>
                                                <TableCell align="right">{item.price}</TableCell>
                                        </TableRow>
                                ))}
                        </TableBody>
                </Table>
        </TableContainer>
    );
}

export default Cart;