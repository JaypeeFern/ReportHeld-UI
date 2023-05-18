import React from 'react';
import { Grid, GridItem, Checkbox, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverFooter, PopoverArrow, PopoverCloseButton, PopoverAnchor, Box, InputLeftElement, InputGroup, Text, Flex, Input, Button, HStack, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Divider } from '@chakra-ui/react';
import Icon from '@mdi/react';
import { mdiChevronRight, mdiChevronLeft, mdiHelp, mdiChevronDown, mdiMagnify } from '@mdi/js';
import { faker } from '@faker-js/faker/locale/en';

export default function PowerPlantFeatures({ show, handleHide }) {
	const [buttonState, setButtonState] = React.useState(true);
	function handleButtonState() {
		setButtonState(prevState => !prevState);
	}

	const generateCheckBox = count => {
		const data = [];
		for (let i = 1; i <= count; i++) {
			data.push(
				<GridItem key={i}>
					<Checkbox size={'sm'} defaultChecked={i % 2 ? true : false}>
						Type
					</Checkbox>
				</GridItem>
			);
		}
		return data;
	};

	const generateRandomData = (count, templateHeader = [], templateName, templateItems, templateProtocols, templateStatusClose, templateStatusOpen, templateGroup) => {
		const data = [];
		for (let i = 1; i <= count; i++) {
			data.push(
				<AccordionItem position={'relative'} key={i}>
					<h2>
						<AccordionButton bg="blackAlpha.200" _expanded={{ bg: '#52525b', color: 'white' }}>
							<Box as="span" flex="1" textAlign="left" p={2}>
								{templateHeader[i - 1]}
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel w="full" padding={0}>
						<Flex w="full" direction="column">
							<Box className=" bg-gray-400 bg-opacity-40 cursor-pointer hover:bg-gray-500 hover:bg-opacity-50 p-3 grid grid-cols-3 place-items-center text-sm ">
								<Text>{templateName}</Text>
								<Text>{templateItems}</Text>
								{/* <Flex _hover={{ borderColor: 'black' }} cursor={'pointer'} alignItems={'center'} border={'1px'} borderColor={'blackAlpha.500'} w={300} h={35}>
									<Box ps={2} flexGrow={1}>
										<Text fontWeight={400} fontSize={12} color={'blackAlpha.700'}>
											Select Powerplant Type
										</Text>
									</Box>
									<Box>
										<Text fontWeight={400} fontSize={12} color={'blackAlpha.800'}>
											|
										</Text>
									</Box>
									<Flex alignItems={'center'}>
										<Icon path={mdiChevronDown} size={1} className="opacity-60" />
									</Flex>

									<Flex position={'absolute'} border={'1px'} borderColor={'blackAlpha.600'} boxShadow={'lg'} mt={1} gap={2} direction={'column'} p={3} bg={'white'} h={200} w={300} top={105} right={147}>
										<Flex justifyContent={'space-between'} alignItems={'center'}>
											<Text fontWeight={700} fontSize={14}>
												Search and Select
											</Text>
											<Button size={'xs'}>SELECT ALL</Button>
										</Flex>
										<Box>
											<Input size={'sm'} placeholder="Search type" />
										</Box>
										<Flex direction={'column'} w={'55px'}>
											<Checkbox size={'sm'} defaultChecked>
												Type
											</Checkbox>
											<Checkbox size={'sm'} defaultChecked>
												Type
											</Checkbox>
											<Checkbox size={'sm'} defaultChecked>
												Type
											</Checkbox>
											<Checkbox size={'sm'} defaultChecked>
												Type
											</Checkbox>
											<Checkbox size={'sm'} defaultChecked>
												Type
											</Checkbox>
										</Flex>
									</Flex>
								</Flex> */}
								{buttonState ? (
									<Popover>
										<PopoverTrigger>
											<Button p={0}>
												<Flex w={300} alignItems={'center'}>
													<Flex px={2} flexGrow={1}>
														{/* <Text fontWeight={400} fontSize={12} color={'blackAlpha.700'}>
															Select Powerplant Type
														</Text> */}
														<Flex gap={'7px'}>
															<Box bg={'blackAlpha.300'} p={1.5}>
																<Text fontWeight={700} fontSize={12} color={'blackAlpha.700'}>
																	Type
																</Text>
															</Box>
															<Box bg={'blackAlpha.300'} p={1.5}>
																<Text fontWeight={700} fontSize={12} color={'blackAlpha.700'}>
																	Type
																</Text>
															</Box>
															<Box bg={'blackAlpha.300'} p={1.5}>
																<Text fontWeight={700} fontSize={12} color={'blackAlpha.700'}>
																	Type
																</Text>
															</Box>
															<Box bg={'blackAlpha.300'} p={1.5}>
																<Text fontWeight={700} fontSize={12} color={'blackAlpha.700'}>
																	Type
																</Text>
															</Box>
															<Box p={1.5} w={'full'}>
																<Text fontWeight={700} fontSize={12} color={'blackAlpha.700'}>
																	+4 more
																</Text>
															</Box>
														</Flex>
													</Flex>
													<Box>
														<Text fontWeight={400} fontSize={12} color={'blackAlpha.800'}>
															|
														</Text>
													</Box>
													<Flex alignItems={'center'}>
														<Icon path={mdiChevronDown} size={1} className="opacity-60" />
													</Flex>
												</Flex>
											</Button>
										</PopoverTrigger>
										<PopoverContent w={300}>
											<PopoverBody boxShadow={'lg'}>
												<Flex gap={2} direction={'column'} p={2} bg={'white'}>
													<Flex gap={2} justifyContent={'space-between'} alignItems={'center'}>
														{/* <Text fontWeight={700} fontSize={14}>
															Search and Select
														</Text> */}
														<Input size={'sm'} placeholder="Search type" />
														<Button size={'sm'}>CLEAR</Button>
													</Flex>
													<Box>
														<Divider mt={2} />
													</Box>
													<Grid overflowWrap={'anywhere'} templateColumns={'repeat(4, 58px)'} templateRows="repeat(4, 1fr)" gap={2} w={'55px'} mt={3}>
														{generateCheckBox(16)}
													</Grid>
												</Flex>
											</PopoverBody>
										</PopoverContent>
									</Popover>
								) : (
									templateProtocols
								)}
							</Box>
						</Flex>
					</AccordionPanel>
				</AccordionItem>
			);
		}
		return data;
	};

	const generateFaker = count => {
		const data = [];
		for (let i = 1; i <= count; i++) {
			data.push(faker.company.name());
		}
		return data;
	};

	const generateTypes = (count, typeName) => {
		const data = [];
		for (let i = 1; i <= count; i++) {
			data.push(
				<Flex key={i} alignItems={'center'} border={'1px'} borderColor={'whiteAlpha.500'} w={'full'}>
					<Box flexGrow={1} ps={2}>
						<Text fontWeight={400} color={'white'}>
							{`${typeName} ${i}`}
						</Text>
					</Box>
					<Box>
						<Button rounded={'none'} colorScheme={i % 2 ? 'green' : ''} bg={i % 2 ? 'green.600' : 'slategray'} isDisabled={i % 2 ? false : true} fontSize={24}>
							-
						</Button>
					</Box>
				</Flex>
			);
		}
		return data;
	};

	const randomNumber = count => {
		const data = [];
		for (let i = 0; i < count; i++) {
			data.push(Math.floor(Math.random() * 4));
		}
		return data;
	};

	return (
		<>
			{show && (
				<Box>
					<Flex className="rounded-tl-lg rounded-bl-lg h-full w-full flex-col bg-zinc-600">
						<HStack py={1.5} px={4} className="justify-between rounded-tl-lg bg-black bg-opacity-30 h-16">
							<Box>
								<Text fontWeight={600} color={'white'}>
									{buttonState ? 'List of Types' : 'Predefined Values'}
								</Text>
							</Box>
							<Box onClick={handleHide} cursor="pointer">
								<Icon path={mdiChevronRight} size={1.5} className="text-red-400 hover:text-red-500 transition-all duration-150 ease-in-out" />
							</Box>
						</HStack>
						<Flex h="full" direction={'column'} px={7} py={5} w={325}>
							{buttonState && (
								<Flex direction={'column'} h="full">
									<Flex alignItems={'center'} mb={3}>
										<Flex direction={'column'}>
											<InputGroup>
												<InputLeftElement pointerEvents="none">
													<Icon path={mdiMagnify} size={1} className="text-white" />
												</InputLeftElement>
												<Input size={'md'} placeholder="Search Powerplant Type" variant={'outline'} _placeholder={{ color: 'whiteAlpha.500' }} color={'white'} _focus={{ borderColor: 'whiteAlpha.800' }} borderColor={'whiteAlpha.600'} />
											</InputGroup>
										</Flex>
									</Flex>
									<Flex flexGrow={1} position={'relative'} direction={'column'} gap={2} mb={3}>
										{generateTypes(11, 'Netzleitstelle')}
									</Flex>
									<Flex gap={4} alignItems={'center'} justifyContent={'center'} py={2} px={2} bg={'whiteAlpha.500'} rounded={'md'}>
										<Icon path={mdiChevronLeft} size={1} />
										<Text fontWeight={500}>Page 1 of 10</Text>
										<Icon path={mdiChevronRight} size={1} />
									</Flex>
								</Flex>
							)}
						</Flex>
					</Flex>
				</Box>
			)}
			<Box bg="gray.300" className={`${show ? 'rounded-tr-lg rounded-br-lg' : 'rounded-lg'} flex flex-col gap-4 p-6 me-7 border border-opacity-50 border-slate-400 flex-grow`} width={200}>
				<HStack>
					{!show && (
						<Button bg="#b7ee5b" _hover={{ backgroundColor: '#99c74b' }} onClick={handleHide} className="dropshadow-box-25">
							<Icon path={mdiChevronLeft} size={1} />
						</Button>
					)}
					<Flex className="table-header-color w-full ps-2 items-center rounded-lg dropshadow-box-25">
						<Icon path={mdiHelp} size={1} />
						<Text fontWeight="medium" fontSize="lg" className="p-2 rounded-lg text-gray-600">
							{buttonState ? 'Powerplant Types' : 'Predefined Values'}
						</Text>
					</Flex>
					<Flex>
						<Button colorScheme="blackAlpha" bg="blackAlpha.600" variant="solid" onClick={handleButtonState} fontSize={14} className="dropshadow-box-25">
							{!buttonState ? 'Powerplant Types' : 'Predefined Values'}
						</Button>
					</Flex>
				</HStack>
				<Flex gap={2}>
					<Input variant="filled" placeholder="Search" borderRadius="lg" className="dropshadow-box-25" />
					{buttonState && (
						<Button rounded="lg" variant="solid" colorScheme="green" fontSize={14} className="dropshadow-box-25">
							Add New Type
						</Button>
					)}
				</Flex>
				<Flex w="full">
					<Accordion position={'relative'} allowMultiple index={buttonState ? [0] : randomNumber(5)} borderBottomColor={'whiteAlpha.300'} className="w-full bg-gray-400 bg-opacity-40">
						{buttonState ? generateRandomData(7, generateFaker(10), 'Störungen', 'NLS') : generateRandomData(8, generateFaker(10), 'Test', 'Test', 'Please choose a predefined value that will be changed')}
					</Accordion>
				</Flex>
			</Box>
		</>
	);
}
