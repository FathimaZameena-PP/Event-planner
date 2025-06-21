import React from 'react';
import { useQuery } from '@tanstack/react-query'
import {Link} from 'react-router-dom'
import EventCard from '../components/EventCard';

function Home()
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


    return(
        <div className="flex flex-col justify-center   items-center min-h-screen">
            <h1 className="h1"> Event Planner</h1>
            <h3 className='h3 text-center'>Welcome To Event Planning Application. Manage And Organise Your Events With Ease.</h3>
            
            <h2 className='h2'>Upcoming Events</h2>

            {isLoading && <p>is Loading...</p>}
            {isError && <p>is error...</p>}

            <div className="mb-6">
                <ul className=' justify-center border-[1.4px] border-[#ccc]  h-fit pt-[1px] pb-[6px] pl-[25px] pr-[17vw] my-[20px] bg-[#f9f9f9] rounded-[9px] mx-auto w-[70vw] max-w-[500px]'>
                    {event && event.length > 0 ? (
                        event.slice(-3).reverse().map((ev, idx) => ( <li
                                key={idx}
                                className="flex justify-between w-[280px] px-1"
                                >
                                <span className="text-green-900">{ev.title}</span>
                                <span className="text-gray-700">{ev.date}</span>
                            </li>
                            ))
                        ) : (
                        !isLoading && !isError && (
                        <p className="text-gray-500 italic mt-4">
                            No upcoming events yet. To add events: <Link to="/add-event" className="text-blue-600 underline">click</Link>!
                        </p>
                        )
                    )}
                </ul>
            </div>

            <div className='flex justify-center space-x-6 '>
                <Link to="/events" className='btn' >View Events</Link>
                <Link to="/add-event" className='btn' >Add Event</Link>
            </div>
        </div>
    )
}

export default Home