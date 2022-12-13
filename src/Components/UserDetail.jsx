import { useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react";
function UserDetail(){
    const { user,isAuthenticated} = useAuth0();
    /*useEffect(()=>{
            
    })*/

    return isAuthenticated?<div>
        <img src={user.picture} alt={user.name} />
        <p>nombre: {user.name}</p>
        <p>email: {user.email}</p>

    </div>
    :<p>no autenticado</p>
}
export default UserDetail