import React from 'react'
import {useParams} from 'react-router-dom' 

function Users(){
    const {userid} =useParams()

    return(
        <div className="flex items-center justify-center ">User{userid}</div>
    )
}
 export default Users