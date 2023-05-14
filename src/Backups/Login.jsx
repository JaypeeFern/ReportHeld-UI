import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Text, Input, Image } from '@chakra-ui/react';

export default function Login() {
	return (
		<Flex className="login-container h-screen flex justify-center items-center">
			<Flex className="login-wrapper w-96 h-auto bg-gray-200 rounded-lg flex flex-col dropshadow-box-35">
				<Box className="top flex items-center blue-swbt rounded-tl-lg rounded-tr-lg">
					<Image width={62} src="src/assets/logo.png" className="rounded-tl-lg" />
					<Text className="text-sm text-white font-light ms-3  dropshadow-text">Reportheld</Text>
				</Box>
				<Flex className="buttom p-12 flex flex-col justify-center">
					<Text className="text-3xl text-center mb-4 font-bold">Welcome back!</Text>
                    <Flex className="flex flex-col gap-3 mt-5">
                        <Flex className="flex flex-col gap-1 mb-3">
                            <Text className="text-black text-sm font-semibold">Username</Text>
                            <Input className="dropshadow-box-25 border-b-sky-400 rounded-md p-2 bg-transparent border-b-2 outline-none" type="text" />
                        </Flex>
                        <Flex className="flex flex-col gap-1 mb-3">
                            <Text className="text-black text-sm font-semibold">Password</Text>
                            <Input className="dropshadow-box-25 border-b-sky-400 rounded-md p-2 bg-transparent border-b-2 outline-none" type="password" />
                        </Flex>
                    </Flex>
					<Flex className='flex justify-center'>
						<Link to='sites' className='w-36 mt-5 blue-swbt hover:bg-blue-500 rounded-md p-2 dropshadow-box-25 transition delay-100 ease-in-out duration-100 text-center text-white text-lg font-light'>Login</Link>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
}
