import React, { useState } from 'react'
import { dataSet } from '../Config/firebase/firebasefunction';

export default function CreatePost() {
    const [about, setAbout] = useState({})
    const [isSubmitted, setisSubmitted] = useState(false)
    const handleSubmit = () => {
        dataSet("Post", about)
        console.log(about);

    }


    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Add your Post</h2>
            <label className=" mb-2 text-gray-600">userName</label>
            <input
                type="text"
                className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                onChange={(e) => { setAbout({ ...about, userName: e.target.value }) }}
                placeholder="Enter your User Name"
                required
            />
            <label className=" mb-2 text-gray-600">Main Topic or Heading</label>
            <input
                type="text"
                className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                onChange={(e) => { setAbout({ ...about, heading: e.target.value }) }}
                placeholder="Enter your Topic or Heading"
                required
            />
            <label className=" mb-2 text-gray-600">Description</label>
            <input
                type="text"
                className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                onChange={(e) => { setAbout({ ...about, description: e.target.value }) }}
                placeholder="Enter your description"
                required
            />
            <button
                type="submit"
                className="w-full p-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                onClick={handleSubmit}
            >
                Submit
            </button>
            {isSubmitted && (
                <p className="text-green-500 mt-4">Todo has been successfully submitted</p>
            )
            }


        </div>
    )
}
