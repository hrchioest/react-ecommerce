import React from "react";
import Box from '@material-ui/core/Box';
import {Link} from 'react-router-dom';


const Item = ({ item:{ id, name, description, img, price } }) => (
    <Box flexDirection="colum"> 
        <h2>{name}</h2>
        <Link to = {`/item/${id}`}><img src={img} alt="img" width="400" /></Link>
        <p>{description}</p>
        <p>Precio: {price}</p>
    </Box>
);

export default Item;