import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'


export const productsContext = createContext()
function ProductContext({children}) {
    const [product,setProduct] = useState([])
console.log("jfjafhsdghe",product);

    useEffect( ()=>{
        const fetch = async()=>{
        const res = await axios.get('http://localhost:3000/products')
        setProduct(res.data)
        }
        fetch()
    },[])
  return (
    <productsContext.Provider value={{product}}>
        {children}
    </productsContext.Provider>
  )
}

export default ProductContext