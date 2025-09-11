'use client'
import React, { useState } from 'react'
import axios from '../../axios'


function Newsletter() {
  const [name,setName]=useState('')
  const [last,setLast]=useState('')
  const [email,setEmail]=useState('')
  const [loading,setLoading]=useState(false)
  const [loading2,setLoading2]=useState(false)
  const [alert,setAlert]=useState({})
  const id = "66b6151748ee1c92617b2712";
 
  const addSubscriber=async()=>{
    function isValidEmail(email) {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    }
    setLoading2(true)
    setLoading(true)
    setAlert({})
    if(name.trim()==""){
      setAlert({text:"subscriber name field is empty",type:"error"})
    setLoading(false)
      setTimeout(() => {
        setLoading2(false)
        setAlert({})
      }, 3000);
 
    }
    else if(email.trim()=="" || !isValidEmail(email) ){
   
      setAlert({text:"unsupported email format",type:"error"})
    setLoading(false)
      setTimeout(() => {
        setLoading2(false)
        setAlert({})
      }, 3000);
 

    }else{
    
      await axios.patch(`subscriber/${id}/subscribers/push`, {
        email:email,
        name,
        status:"active",
        signUpSource:"api"
      })
      .then((response) => {
      setAlert({text:"you successfully subscribed to my newsletter!!!",type:"success"})
      setLoading(false)
      }, (error) => {
      toast.error(`failed to add user to subscribers list`,{className:"font-normal z-[9999]"})
      setAlert({text:"failed to add user to subscribers list",type:"error"})
      setLoading(false)
      });
    }
  
  }
  return (
    <div className='container form-control gap-2 z-[9999] max-w-[450px]'>
      <p className='font-normal text-[20px] font-bold py-2 capitalize text-brand-text-dark'>subscribe for updates</p>
    <input value={name} onChange={(e)=>setName(e.target.value)} className='text-[#000] input capitalize font-normal' placeholder='first name'/> 
    <input value={last} onChange={(e)=>setLast(e.target.value)} className='text-[#000] input capitalize font-normal'  placeholder='last name (optional)'/> 
    <input  value={email} onChange={(e)=>setEmail(e.target.value)} className='text-[#000] input capitalize font-normal' type='email' placeholder='email address'/> 
    {loading2 && (
<p className={` ${alert.type=="error"?"font-normal text-[10px] bg-red-500 p-2 rounded-lg":alert.type=="success"?"font-normal text-[10px] bg-green-500 p-2 rounded-lg":""}`}>{alert.text}</p>
    )}
    <button onClick={addSubscriber} className='btn font-normal capitalize bg-[transparent] border border-[#ffffff] text-[#fff] '> {loading?"please wait...":"submit"}</button> 
   
   </div> 
  )
}

export default Newsletter