import React from 'react'
import { useState } from 'react'
import {useMutation } from '@tanstack/react-query'
import client from "../react-query-client";
import {Link} from 'react-router-dom'


function AddEvent()
{
   const [error,setError]=useState("")
   const [formData,setFormData]=useState({
      title:"",
      date:"",
      location:"",
      description:""
   })


   const fetcher= (url,formdata)=>{
      return fetch(url,{
         method: 'POST',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(formdata)
      }).then(res=>res.json())
   }


const mutation = useMutation({
  mutationFn: (formData) => {
    return fetcher("http://localhost:3002/api/create-record", formData);
  },
  onSuccess: (data) => {
    console.log("data posted on server:", data);
    client.invalidateQueries({ queryKey: ['events'] });
    setFormData({
      title: "",
      date: "",
      location: "",
      description: ""
    });
  },
  onError: (error) => {
    console.log(`error occurred: ${error}`);
  }
});



   const handleAddEvent = () => {
      if (!formData.title || !formData.date || !formData.location) {
         setError("Title, Date, and Location are required.");
         return;  // stop if validation fails
      }
      setError(""); // clear error if all good
      mutation.mutate(formData);
   };



   return(
      <div className="min-h-screen flex flex-col">
         <div className="absolute top-4 left-4">
            <Link to="/" className="homebtn">Home</Link>
         </div>
         <h6 className='h6'> Add Events </h6>
         <div className="mainborder flex flex-col items-center justify-center mt-18 w-[90vw] max-w-[500px]">

            <div>
               <h3>Title</h3>
               <input className='inputfield text-gray-700' type='text' value={formData.title} onChange={e=>setFormData({...formData,title:e.target.value})} />
            </div>

            <div>
               <h3 className="-ml-8 ">Date</h3>
               <input type='date' value={formData.date}
                  onChange={e => setFormData({ ...formData, date: e.target.value })} 
                  className={`pt-[2px] -ml-8 mt-[4px] mb-[6px] border border-[#ccc] rounded w-[186%] focus:border-[1.5px] focus:border-[#2e2b27] focus:outline-none focus:ring-0 px-2 h-[31px] 
                  ${formData.date ? 'text-gray-700' : 'text-gray-400'}`}
               />
            </div>

            <div>
               <h3>Location</h3>
               <input className='inputfield text-gray-700' type='text' value={formData.location} onChange={e=>setFormData({...formData,location:e.target.value})} />
            </div>

            <div>
               <h3>Description</h3>
               <input className='inputfield text-gray-700' type='text' value={formData.description} onChange={e=>setFormData({...formData,description:e.target.value})} />
            </div>

            {error && ( <p className="text-red-500 text-sm mt-1 text-center break-words max-w-full"> {error} </p>
            )}

            <div>
               <button className='btn mt-3 ml-10' onClick={handleAddEvent} >Add Event</button>
            </div>
         </div>

      </div>
   )
}

export default AddEvent