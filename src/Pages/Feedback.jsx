import React from 'react';
import { Box, Flex, Divider, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverArrow, PopoverCloseButton, Button, Textarea, Select, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Icon from '@mdi/react';
import { mdiAccountCircle, mdiChevronRight, mdiChevronLeft } from '@mdi/js';
import FeedbackIcon from '@mui/icons-material/Feedback';

export default function Feedback() {
	const generateRandomMessages = count => {
		const data = [];
		for (let i = 0; i < count; i++) {
			data.push(
				<Flex key={i} className="transition-all duration-150 ease-in-out" bg="blackAlpha.100" _hover={{ bg: 'blackAlpha.300' }} rounded="lg" p={2} gap={3} justify="center" alignItems="center">
					<Box p={2}>
						<Icon path={mdiAccountCircle} size={1.25} />
					</Box>
					<Flex flex={1} flexDirection="column">
						<Text fontSize="sm" fontWeight="normal">
							John Paul Fernandez
						</Text>
						<Text noOfLines={1} fontSize="xs" fontWeight="light">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
						</Text>
						<Text fontSize="xs" fontWeight="thin">
							{new Date().toLocaleDateString()}
						</Text>
					</Flex>
					<Box className="transition-all duration-150 ease-in-out" p={2} cursor="pointer" rounded="full" _hover={{ bg: 'blackAlpha.400' }} onClick={handleShow}>
						<Icon path={mdiChevronRight} size={1.25} />
					</Box>
				</Flex>
			);
		}
		return data;
	};

	const [showMessage, setShowMessage] = React.useState(false);
	const handleShow = () => {
		setShowMessage(prevState => !prevState);
		setShowMore(false);
	};

	const [showMore, setShowMore] = React.useState(false);
	const handleShowMore = () => {
		setShowMore(prevState => !prevState);
	};

	return (
		<Box className="transition-opacity duration-500 ease-in-out opacity-40 hover:opacity-100" bottom={4} right={4} position="fixed" p={2} borderRadius="full" display="flex" justifyContent="center" alignItems="center">
			<Popover placement="top-start">
				<PopoverTrigger returnFocusOnClose={false} placement="left">
					<Button colorScheme="blue" borderRadius="full" w={55} h={55}>
						<Box className="flex justify-center">
							<FeedbackIcon fontSize="medium" />
						</Box>
					</Button>
				</PopoverTrigger>
				<PopoverContent>
					<PopoverArrow />
					{/* <PopoverCloseButton /> */}
					<Tabs variant="enclosed" isFitted>
						<PopoverHeader fontWeight="semibold">
							<TabList>
								<Tab>Feedback</Tab>
								<Tab>Messages</Tab>
							</TabList>
						</PopoverHeader>
						<PopoverBody>
							<TabPanels>
								<TabPanel>
									<Box display="flex" flexDirection="column" gap={4} p={2.5}>
										<Textarea placeholder="Enter feedback" borderColor='blackAlpha.400' />
										<Box>
											<Text fontSize="sm" fontWeight="light">
												Please contact me by:
											</Text>
											<Select borderColor="blackAlpha.500">
												<option>Email</option>
												<option>Telefon</option>
												<option>Do not contact me</option>
											</Select>
										</Box>
										<Button colorScheme="red" textAlign="start">
											Send
										</Button>
									</Box>
								</TabPanel>
								<TabPanel p={2} className="flex flex-col gap-2">
									{!showMessage && generateRandomMessages(3)}
									{showMessage && (
										<Flex flexDirection="column" gap={3} p={0}>
											<Flex className='justify-between items-center'>
												<Box rounded="full" _hover={{ bg: 'blackAlpha.200' }} cursor="pointer" onClick={handleShow}>
													<Icon path={mdiChevronLeft} size={1.2} />
												</Box>
												<Box rounded="full" w={150} className='text-end'>
													<Text fontSize="xs" fontWeight="normal">
														John Paul Fernandez
													</Text>
													<Text fontSize="xs" fontWeight="thin">
														{new Date().toLocaleDateString()}
													</Text>
												</Box>
											</Flex>
											<Divider />
											<Box p={2}>
												<Text noOfLines={showMore ? 0 : 6} fontSize={15} className="text-justify text-black text-opacity-80">
													Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
												</Text>
												<Text fontSize={15} fontWeight="light" color="blue.600" cursor="pointer" _hover={{ textDecoration: 'underline' }} mt={2} className="text-justify text-black text-opacity-80" onClick={handleShowMore}>
													{showMore ? 'Show Less' : 'Show More'}
												</Text>
											</Box>
										</Flex>
									)}
								</TabPanel>
							</TabPanels>
						</PopoverBody>
					</Tabs>
				</PopoverContent>
			</Popover>
		</Box>
	);
}
