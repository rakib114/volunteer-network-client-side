import React from 'react';

const Event = ({ event }) => {
    const deletEvent = id => {
        // It Will be Update Letter
    }
    return (
        <div className="col-md-3 shadow-sm p-3 mb-5 bg-body rounded px-3 ">
            <img style={{ height: '300px' }} src={event.imageUrl} alt="Not Found" />
            <h3>{event.name} <button className="btn btn-info" onClick={() => deletEvent(event._id)} >Delete</button> </h3>
        </div>
    );
};

export default Event;