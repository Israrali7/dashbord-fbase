import React, { useState } from 'react';
import { dataSet } from '../Config/firebase/firebasefunction';


export default function AddTodo() {
    const [Todo, setTodo] = useState({})
    const [isSubmitted, setisSubmitted] = useState(false)
    const handleSubmit = () => {
        dataSet("Tasks" , Todo)
        setisSubmitted(true)
        console.log(Todo);
    }
    return (
        <>
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Add your To-do</h2>
            <label className=" mb-2 text-gray-600">Todo</label>
            <input
                type="text"
                className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                onChange={(e) => { setTodo({ todoitem: e.target.value }) }}
                placeholder="Enter your todo"
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
        </>
    );
}
