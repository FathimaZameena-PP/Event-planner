import React from 'react'
import { useQuery} from '@tanstack/react-query'
import EventCard from '../components/EventCard';
import {Link} from 'react-router-dom'

function Event()
{
   const { data: event, isLoading, isError } = useQuery({
      queryKey: ['events'],
      queryFn: () => {
         return fetch('http://localhost:3002/api/get-record')
         .then(res => {
               if (!res.ok) throw new Error('Network response was not ok');
               return res.json();
         }) .then(data => data.events)
      }
   });


   if(isLoading){
      return(
         <p>is Loading.......</p>
      )
   }
   if(isError){
      return(
         <p>Error occured</p>
      )
   }

   return(
      <div>
         <div className="absolute top-4 left-4">
            <Link to="/" className="homebtn">Home</Link>
         </div>
         <h6 className="h6">Events</h6>

         {
            event.map((e,eid)=>{
               return(
                  <EventCard key={eid} event={e}/>
               )
            })
         }
      </div>
   )
}

export default Event

