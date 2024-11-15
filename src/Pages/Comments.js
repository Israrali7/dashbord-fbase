import React, { useEffect, useState } from 'react';
import Screen from '../Components/Screen';
import FormComment from './FormComments';
import { dtGet } from '../Config/firebase/firebasefunction';

export default function Comments() {
  const [showModal, setShowModal] = useState(false);
  const [comments, setComments] = useState([])

  // Toggle the modal visibility
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  useEffect(() => {
    // Fetch data and update state when data is received
    const unsubscribe = dtGet("Comments", (usersData) => {
      setComments(usersData);
    });

    // Cleanup function to unsubscribe from the snapshot when the component is unmounted
    return () => unsubscribe();
  }, []);


  return (
    <div>
      <Screen
        title="Comment"
        onclick={openModal}  // Open modal on click
        label={"Add Comments"}
      />

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md ">
            <button onClick={closeModal} className="float-right text-red-500 text-xl">
              X
            </button>
            <FormComment />
          </div>
        </div>
      )}
      {comments.map((dt, di) => (
        <div className="p-4 bg-white shadow-lg rounded-lg mb-5" key={di}>
          {/* User Info */}
          <div className="flex items-center mb-4">
            <div className="rounded-full h-11 w-11 bg-green-500 flex items-center justify-center text-white font-bold">
              {dt.userName?.charAt(0).toUpperCase()} 
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-gray-800 text-left ">{dt.userName}</h3>
              <span className="text-sm text-gray-500">{new Date().toLocaleString()}</span>
            </div>
          </div>

          {/* Comment Content */}
          <div className="border bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700 font-medium">{dt.Comment}</p>
          </div>
        </div>

      ))}
    </div>
  );
}
