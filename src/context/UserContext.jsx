import axios from "axios";
import { createContext, useEffect, useState } from "react";


export const UsersContext = createContext();

function UserContext({children}) {
    const [user, setUser] = useState([])
    
    useEffect(()=>{
        const fetch = async() => {
            const res = await axios.get('http://localhost:3000/users')
            setUser(res.data)
        }
        fetch()
    },[])
  return (
    <UsersContext.Provider value={{user}}>
        {children}
    </UsersContext.Provider> 
  )
}

export default UserContext