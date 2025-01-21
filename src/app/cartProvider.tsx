"use client"
import { useState, useEffect } from "react";
import CartContext from "./context";

interface Obj{
    title:string,
    image:string,
}

const CartProvider = ({ children }: {children: React.ReactNode}) => {
    const del = (title:string)=>{
        const newCart = cart.filter((val)=> val.title !== title);
        return setCart([...newCart])
    }

  


    const [cart, setCart] = useState<Obj[]>([])
    const add = (obj:Obj)=> setCart([...cart,obj])

   

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart)); // Parse and set the stored cart
        }
    }, []);

    // Update localStorage whenever the cart changes
    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart]);

    
    const cartCount = cart.length;

    return (
    <CartContext.Provider value={{cart,add, del, cartCount}}>
    {children}
    </CartContext.Provider>
   )
}

export default CartProvider;