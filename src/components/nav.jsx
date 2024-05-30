import { Link } from "react-router-dom"

export default function Nav (props)
{
    return(
        <div className="nav">
            <Link to="/achievements">
                <div>Achievements</div>
            </Link>
            <Link to="/armoires">
                <div>Armoire</div>
            </Link>
            <Link to="/emotes">
                <div>Emotes</div>
            </Link>
            <Link to="/hairstyles">
                <div>Hairstyles</div>
            </Link>
            <Link to="/mounts">
                <div>Mounts</div>
            </Link>
            <Link to="/minions">
                <div>Minions</div>
            </Link>
        </div>
    )
}