import react, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile(){
    const {user} =useContext(UserContext);
    
        if(!user) return <div>Please Login first!!</div>

        return <div>Welecome! {user.username} </div>
   
}

export default Profile