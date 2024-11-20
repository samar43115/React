// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom";

function GitHub() {
    // const [data,setData] = useState({})
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((response)=> response.json())
    //     .then((response)=>setData(response))
    //     .catch(err=>{
    //         console.log(err);
    //     })
    // },[])
    const data = useLoaderData();
  return (
    <div  className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>GitHub Followers:{data.followers}</div>
  )
}

export default GitHub

export const getGithubInfo = async()=>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary');
    return response.json();
}