import React from 'react';
import Icon from '@mdi/react';
import { Link } from 'react-router-dom'
import { mdiAccountCircle, mdiSignal } from '@mdi/js';

export default function Navbar() {
	return (
		<>
			<div className="flex h-20 blue-swbt rounded-br-2xl rounded-bl-2xl dropshadow-box-35">
				<Link to='/' className='flex w-24'>
					<img src="src/assets/logo.png" className="rounded-bl-2xl" />
				</Link>
				<div className="flex flex-row justify-between w-full items-center mx-6">
					<div className="text-white text-xl font-light flex">
						<span className="dropshadow-text">Report</span>
						<span className="text-zinc-300">held</span>
						<span className='ms-2'>
							<Icon path={mdiSignal} size={1} />
						</span>
					</div>
					<div className="flex gap-2 items-center text-white">
						<span className="text-xs">Administrator</span>
						<Icon path={mdiAccountCircle} size={1} />
					</div>
				</div>
			</div>
		</>
	);
}
