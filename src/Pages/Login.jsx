import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
	return (
		<div className="login-container h-screen flex justify-center items-center">
			<div className="login-wrapper w-96 h-auto bg-gray-200 rounded-lg flex flex-col dropshadow-box-35">
				<div className="top flex items-center blue-swbt rounded-tl-lg rounded-tr-lg">
					<img width={60} src="src/assets/logo.png" className="rounded-tl-lg" />
					<h1 className="text-sm text-white font-light ms-3  dropshadow-text">Reportheld</h1>
				</div>
				<div className="buttom p-12 flex flex-col justify-center">
					<h1 className="text-3xl text-center mb-4 font-bold">Welcome back!</h1>
                    <div className="flex flex-col gap-3 mt-5">
                        <div className="flex flex-col gap-1 mb-3">
                            <label className="text-black text-sm font-semibold">Username</label>
                            <input className="dropshadow-box-25 border-b-sky-400 rounded-md p-2 bg-transparent border-b-2 outline-none" type="text" />
                        </div>
                        <div className="flex flex-col gap-1 mb-3">
                            <label className="text-black text-sm font-semibold">Password</label>
                            <input className="dropshadow-box-25 border-b-sky-400 rounded-md p-2 bg-transparent border-b-2 outline-none" type="password" />
                        </div>
                    </div>
					<div className='flex justify-center'>
						<Link to='sites' className='w-36 mt-5 blue-swbt hover:bg-blue-500 rounded-md p-2 dropshadow-box-25 transition delay-100 ease-in-out duration-100 text-center text-white text-lg font-light'>Login</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
