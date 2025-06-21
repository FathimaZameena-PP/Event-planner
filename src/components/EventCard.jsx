import React from 'react'

function EventCard({ event }) {
  return (
    <div className="eventcardborder px-4 py-3 rounded-md bg-white shadow border border-gray-200 text-sm w-full max-w-xs mx-auto mb-3">
      <div className="font-semibold text-green-800 text-base ">{event?.title}</div>

      <div className="text-gray-700">
        <span className="font-medium text-gray-600">Date:</span> {event?.date}
      </div>
      <div className="text-gray-700">
        <span className="font-medium text-gray-600">Location:</span> {event?.location}
      </div>
      <div className="text-gray-700">
        <span className="font-medium text-gray-600">Description:</span> {event?.description}
      </div>
    </div>
  );
}


export default EventCard

// import React from 'react';

// function EventCard({ event }) {
//   return (
//     <div className="eventcardborder">
//       <div className="event-title">{event?.title}</div>

//       <div className="event-detail">
//         <span className="event-label">Date:</span> {event?.date}
//       </div>
//       <div className="event-detail">
//         <span className="event-label">Location:</span> {event?.location}
//       </div>
//       <div className="event-detail">
//         <span className="event-label">Description:</span> {event?.description}
//       </div>
//     </div>
//   );
// }

// export default EventCard;


