import React, { useState, useEffect } from "react";
import Screen from "../Components/Screen";
import AddTodo from "./AddTodo";
import { Button } from "antd";
import { dataDelete, dtGet } from "../Config/firebase/firebasefunction";

export default function Todo() {
  const [showModal, setShowModal] = useState(false);
  const [todoList, setTodoList] = useState([]);

  // Toggle the modal visibility
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  // Delete a specific todo item
  const dlt = async (id) => {
    try {
      await dataDelete("Tasks", id); // Delete the task from Firestore
      setTodoList((prev) => prev.filter((item) => item.id !== id)); // Update the state
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  useEffect(() => {
    const list = dtGet("Tasks", (li) => setTodoList(li));
    return () => list();
  }, []);

  return (
    <>
      <Screen title={"Todo List"} label={"Add Todo"} onclick={openModal} />

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md ">
            <button onClick={closeModal} className="float-right text-red-500 text-xl">
              X
            </button>
            <AddTodo />
          </div>
        </div>
      )}

      {todoList.map((x, i) => (
        <div className="m-16" key={x.id}>
          <ul>
            <li className="flex items-center justify-between p-2 border-b shadow-md border-gray-200">
              <span className="text-lg">*{x.todoitem}</span>
              <Button
                className="text-red-500"
                type="danger"
                onClick={() => dlt(x.id)} // Pass the task ID to the delete function
              >
                Delete
              </Button>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
}
