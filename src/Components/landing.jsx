import { Link } from "react-router-dom"
import "./landing.css"
export default function Landing(){
    return <div className="landing">
        <Link to ="home"><button> go to home </button></Link> 
    </div>
}