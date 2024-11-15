import React, { useState, useEffect } from "react";
import { FaThumbsUp, FaCommentAlt, FaShare } from "react-icons/fa";
import Screen from "../Components/Screen";
import CreatePost from "./createPost";
import { dtGet } from "../Config/firebase/firebasefunction";

export default function Post() {
    const [showModal, setShowModal] = useState(false);
    const [postdt, setPostdt] = useState([]);

    // Function to open and close modal
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    useEffect(() => {
        // Simulate fetching data
        const unsubscribe = dtGet("Post", (usersData) => {
            setPostdt(usersData);
        });
        return () => unsubscribe();
    }, []);

    return (
        <div>
            {/* Header with Add Post Button */}
            <Screen label={"Add Post"} title={"Post"} onclick={openModal} />

            {/* Modal for Adding Posts */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg w-full max-w-md">
                        <button
                            onClick={closeModal}
                            className="float-right text-red-500 text-xl"
                        >
                            X
                        </button>
                        <CreatePost closeModal={closeModal} />
                    </div>
                </div>
            )}

            {/* Rendering Posts */}
            {postdt.map((x, i) => (
                <div
                    key={i}
                    className="bg-white border border-gray-300 rounded-lg p-4 shadow-md mb-4"
                >
                    {/* Post Header */}
                    <div className="flex items-center mb-4">
                        <div className="h-10 w-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
                            {x.userName.charAt(0).toUpperCase()}
                        </div>
                        <div className="ml-3">
                            <h3 className="text-gray-800 font-semibold">
                                {x.userName}
                            </h3>
                            <span className="text-sm text-gray-500">
                                {new Date(x.date).toLocaleString()}
                            </span>
                        </div>
                    </div>

                    {/* Post Content */}
                    <div>
                        <h2 className="text-lg font-bold text-gray-800 mb-2">
                            {x.heading}
                        </h2>
                        <p className="text-gray-600">{x.description}</p>
                    </div>

                    {/* Post Actions */}
                    <div className="mt-4 flex justify-around border-t pt-3">
                        <button className="flex items-center text-gray-600 hover:text-blue-500 transition">
                            <FaThumbsUp className="mr-2" />
                            Like
                        </button>
                        <button className="flex items-center text-gray-600 hover:text-blue-500 transition">
                            <FaCommentAlt className="mr-2" />
                            Comment
                        </button>
                        <button className="flex items-center text-gray-600 hover:text-blue-500 transition">
                            <FaShare className="mr-2" />
                            Share
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
