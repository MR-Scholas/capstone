import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

export default function User (props)
{
    const {loggedIn,user,login,logout,register}=useContext(UserContext)
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')

    const handleLogin=()=>
    {
        login(username,password)
    }

    const handleRegister=()=>
    {
        register(username,password)
    }

    return(
        <div className="userPanel">
            {loggedIn ? (
                <div className="loggedInPanel">
                    <h3>{user.username}</h3>
                    <button onClick={logout}>Logout</button>
                </div>
            ) : (
                <div className="loggedOutPanel">
                    <div className="login">
                        <input
                            type="text"
                            value={username}
                            onChange={(e)=>setUsername(e.target.value)}
                            placeholder="Username"
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            placeholder="Password"
                        />
                        <button onClick={handleLogin}>Login</button>
                    </div>
                    <div className="register">
                        <input
                            type="text"
                            value={username}
                            onChange={(e)=>setUsername(e.target.value)}
                            placeholder="Username"
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            placeholder="Password"
                        />
                        <button onClick={handleRegister}>Sign Up</button>
                    </div>
                </div>
            )}
        </div>
    )

    return(loggedIn ? <LogIn/> : <UserStatus/>)
}