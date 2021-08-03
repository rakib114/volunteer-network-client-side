import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Event from '../Event/Event';

const Home = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    return (
        <div className="row container-fluid text-center">
            {
                events.map(event => <Event event={event} ></Event>)
            }
        </div>
    );
};

export default Home;