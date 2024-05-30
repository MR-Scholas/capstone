import { createContext, useState } from "react";

export const UserContext=createContext()

// const loginVerification=async(username,password)=>
// {
//     let collection=await db.collection("users")
//     let query={username:username}
//     let result=await collection.findOne(query)

//     if(!result) return(false)
//     else if(password===result.password) return(true)
//     else return(false)
// }

export function UserProvider({children})
{
    const [loggedIn,setLoggedIn]=useState(false)
    const [user, setUser]=useState(null)

    const login=async(username,password)=>
    {
        try 
        {
            const response = await fetch('/login', 
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ username, password }),
            })

            if (response.ok) 
            {
                const data = await response.json()
                setUser(data.username)
                setLoggedIn(true)
            }
            else {alert('Invalid username or incorrect password')}
        } catch (error) 
        {
            console.error('Error during login:', error)
            alert('Error during login')
        }
    }

    const register = async (username, password) => 
    {
        try 
        {
            const response = await fetch('/register', 
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ username, password }),
            })

            if (response.ok) 
            {
                setUser(username);
                setLoggedIn(true);
            } 
            else if (response.status === 409) 
            {
                alert('Username already exists');
            } 
            else 
            {
                alert('Error during registration');
            }
        } catch (error) 
        {
            console.error('Error during registration:', error);
            alert('Error during registration');
        }
    };
    
    const logout=()=>
    {
        setUser(null)
        setLoggedIn(false)
    }

    return(
        <UserContext.Provider value={{loggedIn,user,login,logout,register}}>
            {children}
        </UserContext.Provider>
    )
}