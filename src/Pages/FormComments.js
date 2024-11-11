import React, { useState } from "react";
import { dataSet } from "../Config/firebase/firebasefunction"; // Assuming this is your function to add data to Firestore
import Screen from "../Components/Screen";

export default function FormComment() {
    const [userName, setUserName] = useState("");
    const [comment, setComment] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Send data to Firestore
        await dataSet("comments", null, { userName, comment });
        setIsSubmitted(true);
        setUserName("");
        setComment("");
    };

    return (
        <>    <Screen title={"Form"}  label={"Submit"}/>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
                >
                    <h2 className="text-2xl font-bold text-gray-700 mb-4">Leave a Comment</h2>

                    {/* Input for Username */}
                    <label className="block mb-2 text-gray-600">Username</label>
                    <input
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                        placeholder="Enter your username"
                        required
                    />

                    {/* Input for Comment */}
                    <label className="block mb-2 text-gray-600">Comment</label>
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                        placeholder="Write your comment here"
                        rows="4"
                        required
                    ></textarea>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full p-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                    >
                        Submit
                    </button>

                    {/* Success Message */}
                    {isSubmitted && (
                        <p className="text-green-500 mt-4">Your comment has been submitted!</p>
                    )}
                </form>
            </div>
        </>

    );
}

