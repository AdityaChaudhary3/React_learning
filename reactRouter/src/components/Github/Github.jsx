import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    // useEffect(() => {
    //     fetch('https://api.github.com/users/adityachaudhary3')
    //     .then(response => response.json())
    //     .then(data => {
    //         setData(data);
    //     })
    // },[])
  return (
    <>
      <h1 className='text-center p-4 bg-green-600'>Followers: {data.followers}</h1>
      <div className='flex items-center justify-center'><img  src={data.avatar_url} alt="Git picture" width={300} /></div>
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/adityachaudhary3')
    return response.json()
}