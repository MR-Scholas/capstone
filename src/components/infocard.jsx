import { Link } from "react-router-dom";
import Owned from "./owned";


export default function InfoCard (props)
{
    return(
        <div className="infoCard">
            <div className="cardHeader">
                <img className ="icon" src={props.icon}/>
                <Link to={'./'+props.id}><h2>{props.name}</h2></Link>    
            </div>
            <div>Added: {props.patch}</div>
            <div>Owned: {props.owned}</div>
            <div>ID: {props.id}</div>
            <div><Owned/></div>
        </div>
    )
}