import React, { useState } from 'react';
import Image from "./image/download.png"

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
    
        // if (email.trim() === '' && password.trim() === '') {
        //     console.log('Email and password fields are empty.');
        // } else if (email.trim() === '') {
        //     console.log('Email field is empty.');
        // } else if (password.trim() === '') {
        //     console.log('Password field is empty.');
        // } else {
        //     console.log('Email:', email);
        //     console.log('Password:', password);
        //     // Add your login logic here
        // }

        setEmail('');
        setPassword('');
    };
    return (
        <div className="flex items-start justify-center min-h-screen my-5">
            <form className="w-full max-w-sm bg-gray-100 p-5" onSubmit={handleSubmit}>

                <div className="flex justify-center items-center">
                <img className="h-20 rounded-full border-4 animate-bounce" src={Image}/>
                    <div>
                        {/* <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">Login Form!</h1> */}
                    </div>
                </div>


                {/* Email input */}
                <div className="mb-4">
                    <label className="block mb-2 text-lg text-gray-600" htmlFor="email">
                        Email :
                    </label>
                    <input
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        type="email"
                        id="email"
                        placeholder="Enter your email..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                {/* Password input */}
                <div className="mb-4">
                    <label className="block mb-2 text-lg text-gray-600" htmlFor="password">
                        Password :
                    </label>
                    <input
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                        type="password"
                        id="password"
                        placeholder="Enter your password..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {/* Submit button */}
                <div className="grid justify-items-center ">
                    <button
                        className=" bg-transparent hover:bg-blue-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded ring-2 ring transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 duration-700"
                        type="submit">
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;