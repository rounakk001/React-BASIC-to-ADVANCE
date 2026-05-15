import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


export default function Github(){
    const data=useLoaderData()
    // const [data,setdata] = useState([])

    // useEffect(()=>{
    //     fetch("https://api.github.com/users/rounakk001")
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data)
    //         setdata(data)
    //     })
    // },[])


    return(
        <div className="flex flex-col items-center text-center m-4 bg-gray-700 text-white p-4 text-3xl">
            Github followers: {data.followers}
            <img src={data.avatar_url} alt="GithubProfilePicture" width={300}/>
        </div>
    )
}

export const githubInfoLoader=async()=>{
    const response=await fetch("https://api.github.com/users/rounakk001")

    return response.json()
}