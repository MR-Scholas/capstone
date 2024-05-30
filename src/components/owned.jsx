import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

export default function Owned (props)
{
    const {user}=useContext(UserContext)

    if(user===null) return('You are not logged in.')
}