import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { dataSet, signUpUser } from "../Config/firebase/firebasefunction";

const SignUp = () => {
    const [model, setModel] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");  // To hold any error message
    const navigation = useNavigate();

    // Handle form submission
    const handleData = (e) => {
        e.preventDefault();  // Prevent page reload on form submit

        // Call the signUpUser function
        signUpUser(model)
            .then((res) => {
                console.log(res);
                navigation("/"); // Redirect to home or any page after successful sign-up
                dataSet("DataOfUser",  model)

            })
            .catch((error) => {
                setError(error.message); // Set the error message if sign-up fails
            });
    };

    return (
        <div className={"min-h-screen bg-[#2d3748] flex justify-center items-center"}>
            <div className={`bg-[#353b41] p-8 rounded-lg shadow-lg w-full max-w-md`}>
                <h2 className={`text-3xl font-bold text-white text-center mb-6`}>Sign Up</h2>

                <div className={`mb-6`}>
                    <label className={`block text-white`}> User Name</label>
                    <input
                        type="text"
                        className={`w-full p-3 mt-1 bg-[#1F2933] text-white rounded-lg border-2 border-[#1F2933] focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        onChange={(e) => setModel({ ...model, userName: e.target.value })}
                        required
                    />
                </div>
                <div className={`mb-4`}>
                    <label className={`block text-white`}>Email</label>
                    <input
                        type="email"
                        className={`w-full p-3 mt-1 bg-[#1F2933] text-white rounded-lg border-2 border-[#1F2933] focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        onChange={(e) => setModel({ ...model, email: e.target.value })}
                        required
                    />
                </div>

                <div className={`mb-4`}>
                    <label className={`block text-white`}>Password</label>
                    <input
                        type="password"
                        className={`w-full p-3 mt-1 bg-[#1F2933] text-white rounded-lg border-2 border-[#1F2933] focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        onChange={(e) => setModel({ ...model, password: e.target.value })}
                        required
                    />
                </div>


                {error && <p className="text-red-500 text-center">{error}</p>}

                <button
                    className={`w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    onClick={handleData}  // Call handleData when the button is clicked
                >
                    Create Account
                </button>
            </div>
        </div>
    );
};

export default SignUp;
