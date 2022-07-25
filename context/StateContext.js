import React, { createContext, useContex, useState, useEffect } from "react";
import { toast } from "react-hot-toast"; //pop up notification when add something to cart

const Context = createContext();

export const StateContext = ({children}) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItem, setCartItems] = useState();

    //keep track of total price
    
}