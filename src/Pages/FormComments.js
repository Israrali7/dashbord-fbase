import React, { useState } from "react";
import { dataSet } from "../Config/firebase/firebasefunction"; // Assuming this is your function to add data to Firestore


export default function FormComment() {
    const [userComment, setUserComment] = useState({ });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitted(true)
        dataSet("Comments" , userComment)
        
    };

    return (
        <>
            <div className="flex items-center justify-center min-h-28 bg-gray-100">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-6   w-full max-w-md"
                >
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Leave a Comment</h2>

                    <label className=" mb-2 text-gray-600">Username</label>
                    <input
                        type="text"
                        onChange={(e) => setUserComment({ ...userComment, userName: e.target.value })}
                        className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                        placeholder="Enter your username"
                        required
                    />

                    <label className=" mb-2 text-gray-600">Comment</label>
                    <textarea
                        onChange={(e) => setUserComment({ ...userComment, Comment: e.target.value })}
                        className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                        placeholder="Write your comment here"
                        rows="4"
                        required
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full p-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                    >
                        Submit
                    </button>

                    {isSubmitted && (
                        <p className="text-green-500 mt-4">Your comment has been submitted!</p>
                    )}
                </form>
            </div>
        </>

    );
}

