import React from 'react';
import Icon from '@mdi/react';
import { mdiCloseBox } from '@mdi/js';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Stack } from '@chakra-ui/react';

export default function Sites() {
	return (
		<>
			<div className="bg-zinc-600 rounded-tl-xl rounded-bl-xl">
				<div className="bg-black bg-opacity-30 h-16 rounded-tl-xl">
					<div className="flex justify-between items-center h-16 mx-3">
						<div className="left flex gap-2 ms-4">
							<button className="bg-green-500 hover:bg-green-700 rounded-lg font-semibold text-white p-2 text-sm w-20 ">Add</button>
							<button className="bg-red-500 hover:bg-red-700 rounded-lg font-semibold text-white p-2 text-sm w-20">Cancel</button>
						</div>
						<div className="right flex gap-2 items-center">
							{/* <h1 className='font-semibold text-white text-md'>Add Site</h1> */}
							<button>
								<Icon path={mdiCloseBox} size={1.5} color="#E86B6B" />
							</button>
						</div>
					</div>
					<div className="input py-5 px-7 ">
						<Tabs variant="unstyled">
							<TabList className="bg-slate-400 p-1 rounded-lg bg-opacity-30 text-white">
								<Tab fontSize="20-px" className="rounded-lg" _selected={{ color: 'white', bg: '#01ABE9' }}>
									Site
								</Tab>
								<Tab className="rounded-lg" _selected={{ color: 'white', bg: '#01ABE9' }}>
									Address
								</Tab>
								<Tab className="rounded-lg" _selected={{ color: 'white', bg: '#01ABE9' }}>
									Responsibilities
								</Tab>
								<Tab className="rounded-lg" _selected={{ color: 'white', bg: '#01ABE9' }}>
									Image
								</Tab>
							</TabList>
							<TabPanels className="mt-5">
								<TabPanel>
									<div className="flex flex-col gap-3">
										<div className="flex flex-col gap-1 mb-3">
											<label className="text-white text-sm font-bold">Site Name</label>
											<input className="border border-slate-400 bg-gray-400 rounded-md p-2" type="text" />
										</div>
										<div className="flex flex-col gap-1 mb-3">
											<label className="text-white text-sm font-bold">Abbreviation Name</label>
											<input className="border border-slate-400 bg-gray-400 rounded-md p-2" type="text" />
										</div>
										<div class="flex flex-col gap-1 mb-3">
											<label className="text-white text-sm font-bold">Primary Group</label>
											<select class="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500">
												<option value="option1">Option 1</option>
												<option value="option2">Option 2</option>
												<option value="option3">Option 3</option>
											</select>
										</div>
									</div>
								</TabPanel>
								<TabPanel>
									<p>two!</p>
								</TabPanel>
								<TabPanel>
									<p>three!</p>
								</TabPanel>
								<TabPanel>
									<p>four!</p>
								</TabPanel>
							</TabPanels>
						</Tabs>
					</div>
				</div>
			</div>

			<div className="flex-grow bg-gray-300 me-7 rounded-tr-xl rounded-br-xl border border-slate-400"></div>
		</>
	);
}
