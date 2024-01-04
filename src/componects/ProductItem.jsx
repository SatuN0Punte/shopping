import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/carts/actions";
import { removeQuantity } from "../redux/products/actions" 
const Home = () => {
    const product = useSelector((state) => state.product);
    console.log(product)
    
}