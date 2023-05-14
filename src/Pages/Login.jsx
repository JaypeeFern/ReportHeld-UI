import React from 'react';
import { Link } from 'react-router-dom';
import { mdiAccount, mdiKeyVariant } from '@mdi/js';
import { Icon } from '@mdi/react';
import { useDisclosure, Fade, Box, Flex, Text, Input, Select, Image, Grid, Button, InputLeftElement, InputGroup, Divider, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';

export default function Login() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [submitStatus, setSubmitStatus] = React.useState(false);
	function handleSubmit() {
		setSubmitStatus(prevState => !prevState);
	}

	return (
		<Grid placeItems="center" className="login-container h-screen" p={10}>
			<Flex direction={'column'} w={500} gap={8}>
				<Flex w="full" justify="center" alignItems="center" gap={2}>
					<Image width={82} src="src/assets/logo.png" rounded={'sm'} />
					<Text color={'white'} fontSize={20} fontWeight={300}>
						Reportheld
					</Text>
				</Flex>
				<Flex rounded={'md'} direction={'column'} bg={'blackAlpha.300'} justify="start" alignItems="center" p={5} gap={3}>
					<Box p={2}>
						<Text textAlign={'center'} color={'whiteAlpha.800'} fontSize={16} fontWeight={400}>
							WELCOME BACK
						</Text>
						<Text textAlign={'center'} color={'white'} fontSize={20} fontWeight={800}>
							Log into your account
						</Text>
					</Box>
					<Box p={3}>
						<Box mb={3} w={350} p={2}>
							<Text mb={2.5} fontWeight={400} fontSize={15} color={'gray.200'}>
								Username
							</Text>
							<InputGroup>
								<InputLeftElement pointerEvents="none">
									<Icon path={mdiAccount} size={1} className="text-white" />
								</InputLeftElement>
								<Input size={'md'} placeholder="Enter your username" variant={'outline'} _placeholder={{ color: 'whiteAlpha.500' }} color={'white'} _focus={{ borderColor: 'whiteAlpha.800' }} borderColor={'whiteAlpha.600'} />
							</InputGroup>
						</Box>
						<Box mb={3} p={2}>
							<Text mb={2.5} fontWeight={400} fontSize={15} color={'gray.200'}>
								Password
							</Text>
							<InputGroup>
								<InputLeftElement pointerEvents="none">
									<Icon path={mdiKeyVariant} size={1} className="text-white" />
								</InputLeftElement>
								<Input size={'md'} placeholder="Enter your password" variant={'outline'} type="password" _placeholder={{ color: 'whiteAlpha.500' }} color={'white'} _focus={{ borderColor: 'whiteAlpha.800' }} borderColor={'whiteAlpha.600'} />
							</InputGroup>
						</Box>
						<Box mt={5} p={2}>
							<Button colorScheme="linkedin" bg={'linkedin.400'} w={'full'}>
								<Link to={'sites'} className="w-full">
									Login
								</Link>
							</Button>
						</Box>
					</Box>
					<Divider w={200} />
					<Box p={2}>
						<Text fontSize={12} textAlign={'center'} color={'gray.200'} fontWeight={300}>
							Having trouble logging in?
						</Text>
						<Text fontSize={12} textAlign={'center'} color={'gray.200'} fontWeight={300}>
							<Link onClick={onOpen} className="underline hover:text-sky-300 transition-colors duration-300 ease-in-out">
								Click here
							</Link>{' '}
							to contact an Administrator
						</Text>
						<Modal isCentered closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
							<ModalOverlay bg="none" backdropFilter="auto" backdropBlur="1px" />
							<ModalContent>
								<ModalHeader position={'relative'}>
									<Box>
										<Text>Report a Problem</Text>
									</Box>
									<Box position={'absolute'} top={2} right={2}>
										<ModalCloseButton />
									</Box>
								</ModalHeader>
								<ModalBody>
									<Flex direction={'column'} gap={5} p={6}>
										<Fade unmountOnExit in={submitStatus}>
											<Alert status="success" variant="subtle" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" height="200px">
												<AlertIcon boxSize="40px" mr={0} />
												<AlertTitle mt={4} mb={1} fontSize="lg">
													Report submitted!
												</AlertTitle>
												<AlertDescription maxWidth="sm">Thanks for submitting your report. Our team will get back to you soon.</AlertDescription>
											</Alert>
										</Fade>
										<Fade unmountOnExit in={!submitStatus}>
											<Flex mb={3} direction={'column'} gap={1}>
												<Text>Username</Text>
												<Input placeholder="Provide your username"></Input>
											</Flex>
											<Flex mb={3} direction={'column'} gap={1}>
												<Text>Description</Text>
												<Input placeholder="Describe the problem you are encountering"></Input>
											</Flex>
											<Flex mb={3} direction={'column'} gap={1}>
												<Text>Problem Type</Text>
												<Select>
													<option>Account</option>
												</Select>
											</Flex>
											<Flex mb={6} direction={'column'} gap={1}>
												<Text>Contact me by</Text>
												<Select>
													<option>Email</option>
												</Select>
											</Flex>
											<Flex direction={'column'} gap={2}>
												<Button as="button" onClick={handleSubmit} colorScheme="linkedin">
													Submit
												</Button>
											</Flex>
										</Fade>
									</Flex>
								</ModalBody>
							</ModalContent>
						</Modal>
					</Box>
				</Flex>
			</Flex>
		</Grid>
	);
}
