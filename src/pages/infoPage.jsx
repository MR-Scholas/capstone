import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function InfoPage(props)
{
    const params=useParams()
    const category=params.category
    const id=params.id
    const url=`https://ffxivcollect.com/api/${category}/${id}`
    const [subject,setSubject]=useState('null')

    const getSubject=async ()=>
    {
        try
        {
            setSubject('null')
            const response=await fetch(url)
            const data=await response.json()
            setSubject(data)
        } catch(e) { console.error(e) }
    }

    useEffect(()=>{ getSubject() },[id])
    return (
        <div className="infoPage">
            
        </div>
    )

}