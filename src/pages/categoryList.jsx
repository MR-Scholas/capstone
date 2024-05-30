import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import InfoCard from "../components/infocard";

export default function CategoryList (props) {
    const params=useParams()
    const category=params.category
    const url=`https://ffxivcollect.com/api/${category}`
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

    useEffect(()=>{ getSubject() },[category])

    const loaded=()=>
    {   
        const items=subject.results
        if (!items) return loading()
        return(
            <div className="cardContainer">
                {items.map((subj)=>
                    {
                        if(subj.patch>6.0) return(null);
                        return(
                            <InfoCard
                                key={subj.id}
                                id={subj.id}
                                name={subj.name}
                                icon={subj.icon}
                                patch={subj.patch}
                                owned={subj.owned}
                            />
                        )
                    })}
            </div>
        )
    }

    const loading=()=>
    {
        { return <h1>Loading...</h1> }
    }

    return (subject==='null' ? loading() : loaded())
  }