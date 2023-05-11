import React from 'react';
import Icon from '@mdi/react';
import { Link } from 'react-router-dom';
import { mdiSignal, mdiDatabaseArrowDown, mdiAlertBox } from '@mdi/js';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, useDisclosure, Button, ModalCloseButton, Badge } from '@chakra-ui/react';
import Profile from '../Pages/Profile';

export default function Navbar() {
	const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } = useDisclosure();

	const [count, setCount] = React.useState(null);
	const [counttwo, setCountTwo] = React.useState(null);
	React.useEffect(() => {
		// Function to generate a random number between min (inclusive) and max (exclusive)
		const getRandomNumber = (min, max) => {
			return Math.floor(Math.random() * (max - min + 1)) + min;
		};

		const startCountdown = () => {
			// Start the countdown with a random number between 1000 and 9999
			setCount(getRandomNumber(1000, 9999));
			setCountTwo(getRandomNumber(1000, 9999));
		};

		const intervalId = setInterval(() => {
			setCount(prevCount => {
				// Update the countdown
				if (prevCount === null) {
					// If countdown is null, reset and start a new countdown
					startCountdown();
				} else if (prevCount > 0) {
					// If countdown is greater than 0, decrease the count by a random increment between 1 and 5
					const decrement = getRandomNumber(500, 1000);
					return prevCount - decrement;
				} else {
					// If countdown reaches 0, reset and start a new countdown
					startCountdown();
				}
			});

			setCountTwo(prevCount => {
				// Update the countdown
				if (prevCount === null) {
					// If countdown is null, reset and start a new countdown
					startCountdown();
				} else if (prevCount > 0) {
					// If countdown is greater than 0, decrease the count by a random increment between 1 and 5
					const decrement = getRandomNumber(500, 1000);
					return prevCount - decrement;
				} else {
					// If countdown reaches 0, reset and start a new countdown
					startCountdown();
				}
			});
		}, 1000);

		// Clean up the interval when the component unmounts
		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return (
		<>
			<div className="flex h-20 blue-swbt rounded-br-2xl rounded-bl-2xl dropshadow-box-35">
				<Link to="/" className="flex w-24">
					<img src="src/assets/logo.png" className="rounded-bl-2xl" />
				</Link>
				<div className="flex flex-row justify-between w-full items-center mx-6">
					<div className="text-white text-xl font-light flex items-center">
						<span className="dropshadow-text">Report</span>
						<span className="text-zinc-300">held</span>
						<div className="ms-2 flex items-center gap-1 font-sm">
							<Icon path={counttwo >= 0 ? mdiDatabaseArrowDown : mdiSignal} size={1} />
							<span className="text-sm font-bold">{counttwo}</span>
						</div>
						<button onClick={onModalOpen} className="ms-3 bg-sky-800 text-xs rounded-md p-2">
							After Login: Payload Loading UI
						</button>
						<Modal isOpen={isModalOpen} size="lg" onClose={onModalClose} isCentered closeOnOverlayClick={false}>
							<ModalOverlay bg="none" backdropFilter="auto" backdropBlur="2px" />;
							<ModalContent className="h-64">
								<ModalHeader className="text-center blue-swbt text-white rounded-tl-lg rounded-tr-lg">
									<div className="flex justify-between items-center gap-2">
										<div className="flex items-center gap-1">
											Please Wait
											<Icon path={mdiAlertBox} size={1} />
										</div>
										<Badge ml="1" fontSize="0.8em" p="1" colorScheme="linkedin">
											<div className="flex gap-1">
												<Icon path={mdiDatabaseArrowDown} size={1} />
												{count}
											</div>
										</Badge>
									</div>
								</ModalHeader>
								{/* <ModalCloseButton /> */}
								<ModalBody className="bg-slate-200 bg-opacity-60 rounded-bl-lg rounded-br-lg">
									<div className="flex justify-center items-center h-full flex-col gap-8">
										<span className="font-light">Please be patient while data is loaded completely</span>
										<Button onClick={onModalClose} isLoading={count <= 0 ? false : true} colorScheme="linkedin" loadingText="Payloads Loading" variant="solid">
											Close
										</Button>
									</div>
								</ModalBody>
							</ModalContent>
						</Modal>
					</div>
					<Profile />
				</div>
			</div>
		</>
	);
}

// Please wait while
// Please be patient while data is loaded completely
