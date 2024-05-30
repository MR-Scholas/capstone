import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

export default function Owned (props)
{
    const {user}=useContext(UserContext)

    if(user===null) return('❌ You are not logged in.')

    const isOwned=async()=>
    {
        try
        {
            const response=await fetch(`http://localhost:3000/read/${props.category}/${props.id}`,
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ }),
            })
        } catch (error)
        {

        }
    }
}