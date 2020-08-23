import React from "react";
import Box from '@material-ui/core/Box';


const Item = ({detail: {name, description, img, stock}}) => (
    <Box flexDirection="colum"> 
        <h2>{name}</h2>
        <img src={img} alt="img" width="400" />
        <p>{description}</p>
        <p>Stock disponible: {stock}und</p>
    </Box>
);

export default Item;