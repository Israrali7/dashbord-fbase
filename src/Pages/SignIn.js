import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInUser } from "../Config/firebase/firebasefunction";

function SignIn() {
    const [model, setModel] = useState({})
    const navigation = useNavigate()

    const handleData = () => {
        signInUser(model)
            .then((res) => {
                console.log(res);
                navigation("/home")
            })
            .catch((err) => {
                console.log(err);
            })
        console.log(model)
    }

    return (
        <div className={`min-h-screen bg-[#2d3748] flex justify-center items-center`}>
            <div className={`bg-[#353b41] p-8 rounded-lg shadow-lg w-full max-w-md`}>
                <h2 className={`text-3xl font-bold text-white text-center mb-6`}>Sign In</h2>

                <div className={`mb-4`}>
                    <label className={`block text-white`}>Email</label>
                    <input
                        type="email"
                        className={`w-full p-3 mt-1 bg-[#1F2933] text-white rounded-lg border-2 border-[#1F2933] focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        onChange={(e) => setModel({ ...model, email: e.target.value })}
                        required
                    />
                </div>

                <div className={`mb-6`}>
                    <label className={`block text-white`}>Password</label>
                    <input
                        type="password"
                        className={`w-full p-3 mt-1 bg-[#1F2933] text-white rounded-lg border-2 border-[#1F2933] focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        onChange={(e) => setModel({ ...model, password: e.target.value })}
                        required
                    />
                </div>

                <button
                    onClick={() => {
                        handleData()
                    }}
                    className={`w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                >
                    Sign In
                </button>

                <div className={`text-center mt-4`}>
                    <p className={`text-white text-sm`}>Don't have an account? <Link to={"/signup"} className={`text-blue-400 hover:text-blue-600`}> Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
