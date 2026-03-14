import { createContext, useContext, useState } from "react"

const CartContext = createContext()

export function CartProvider({children}){

  const [count, setCount] = useState(0)

  return (
    <CartContext.Provider value={{count, setCount}}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart(){
  return useContext(CartContext)
}