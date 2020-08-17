import React from "react";
import Item from "../item/Item";
import Box from '@material-ui/core/Box';
import { useState } from "react";
import { useEffect } from "react";

const imgs = [
    "https://d26lpennugtm8s.cloudfront.net/stores/001/063/033/products/prod-91-99d1fa9eb7125e47b915718462204871-480-0.jpg",
    "https://d26lpennugtm8s.cloudfront.net/stores/001/063/033/products/prod-141-17d52c3880823e17f615718526349866-480-0.jpg",
    "https://d26lpennugtm8s.cloudfront.net/stores/001/063/033/products/prod-11-29d75e057330bb437c15706249551096-480-0.jpg"];

const imgList = new Promise ((result, reject) =>{
    setTimeout(()=>{
        result(imgs)
    }, 2000)
});

const ItemList =() =>{

    const [list,setList ] = useState([]);
   
    useEffect(()=>{
        imgList.then(res=>{
            setList(res)
        })
    }, [])

    return(
        <Box display="flex" justifyContent="space-around">
            {list.map((img,index) =><Item key={index} img={img} />)}
        </Box>
    )
}

export default ItemList;