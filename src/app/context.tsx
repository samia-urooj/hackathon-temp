"use client"
import { createContext} from "react"

interface Cart{
    [x:string]:any
}

const CartContext = createContext({} as Cart )

export default CartContext;