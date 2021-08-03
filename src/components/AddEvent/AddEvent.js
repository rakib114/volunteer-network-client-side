import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
const AddEvent = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imgUrl, setImgUrl] = useState(null);
    const onSubmit = data => {
        const eventData = {
            name: data.name,
            imageUrl: imgUrl
        };
        const url = `http://localhost:5000/addEvent`
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('surver response', res))
    }
    const handleImageChange = (event) => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '3eda1263bdfb0543143d549b38bd0edc');
        imageData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImgUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <div>
            <h1>Add a New Event</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" defaultValue="New Event" {...register("name")} />
                <br />
                <input type='file' onChange={handleImageChange} />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddEvent;