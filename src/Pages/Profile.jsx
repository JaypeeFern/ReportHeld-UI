import React from 'react';
import Icon from '@mdi/react';
import { mdiLogout, mdiAccountCircle, mdiContentSave, mdiDelete, mdiInformation } from '@mdi/js';
import { useDisclosure, Button, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Text, IconButton, Heading, Card, CardHeader, CardBody, CardFooter, Box, Grid, Flex, Avatar, Stack, Divider, Select, Input } from '@chakra-ui/react';

export default function Profile() {
	const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();

	return (
		<Flex gap={2} alignItems='center' color='white'>
			<Heading textShadow="outline" as="h6" size="sm" fontWeight={500}>
				Administrator
			</Heading>
			<IconButton icon={<Icon path={mdiAccountCircle} size={1.2} />} colorScheme="blackAlpha" bg="blackAlpha.400" onClick={onDrawerOpen} rounded="full" p={0} />
			<Drawer isOpen={isDrawerOpen} placement="left" onClose={onDrawerClose}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerBody
						mt={1}
						overflowY="scroll"
						css={{
							'&::-webkit-scrollbar': {
								width: '0.4em'
							},
							'&::-webkit-scrollbar-track': {
								boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.1)'
							},
							'&::-webkit-scrollbar-thumb': {
								backgroundColor: 'rgba(0, 0, 0, 0.1)',

								borderRadius: '1rem'
							},
							'&:hover::-webkit-scrollbar-thumb': {
								backgroundColor: 'rgba(0, 0, 0, 0.3)'
							},
							'&::-webkit-scrollbar-thumb:hover': {
								backgroundColor: 'rgba(0, 0, 0, 0.3)'
							},
							'&::-webkit-scrollbar-thumb:active': {
								backgroundColor: 'rgba(0, 0, 0, 0.6)'
							},
							'&::-webkit-scrollbar-corner': {
								backgroundColor: 'transparent'
							},
							scrollbarWidth: 'thin',
							scrollbarColor: 'rgba(0, 0, 0, 0.1) transparent'
						}}
					>
						<Card>
							<CardBody>
								<Stack divider={<Divider />}>
									<Flex justify="center" alignItems="center" flexDirection="column" gap={2}>
										<Avatar size="2xl" name="Fernandez" src="https://scontent.fmnl9-4.fna.fbcdn.net/v/t1.6435-9/148402430_3697595457001051_2562848210691438013_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE3Ah8Vrrc7dZuixPxoNtDKTnb6gpxfXDVOdvqCnF9cNbG6hNqh1DdL1OYPxrZmsBbodSJoQ_-YQR55Cj0IIcBK&_nc_ohc=dSYHexgfFcwAX_-_nhk&_nc_oc=AQklUqooSJz2KxeRSq8lU4aHgPUOTZHSwsppuQxYCyMMBObGFasjjOse26I1dRNcI0Y&_nc_ht=scontent.fmnl9-4.fna&oh=00_AfDTf_KXtrg3nyPYtrNvONPadNOryA-Bldng9hlWGkVmvw&oe=6483EF59" />
										<Flex direction="column">
											<Text textAlign="center" fontWeight={500}>
												John Paul Fernandez
											</Text>
											<Text textAlign="center" fontWeight={300} fontSize="sm" color="blackAlpha.700">
												Administrator
											</Text>
										</Flex>
									</Flex>
									<Flex>
										<Stack w="full" spacing={3}>
											<Flex direction="column" gap={1}>
												<Text fontWeight={500}>Language</Text>
												<Select fontWeight={300} variant="outline" placeholder="Default" />
											</Flex>
											<Flex direction="column" gap={1}>
												<Text fontWeight={500}>Advanced Graphics Settings:</Text>
												<Select fontWeight={300} variant="outline" placeholder="Compatibility" />
											</Flex>
											<Divider />
											<Stack spacing={2}>
												<Text fontWeight={500}>Your Current Password</Text>
												<Input fontWeight={300} variant="outline" placeholder="Enter your current password" />
												<Text fontWeight={500}>New Password</Text>
												<Input fontWeight={300} variant="outline" placeholder="Enter your new password" />
												<Text fontWeight={500}>Confirm New Password</Text>
												<Input fontWeight={300} variant="outline" placeholder="Confirm your new password" />
												<Box w="full" pt={2}>
													<Button leftIcon={<Icon path={mdiContentSave} size={1} />} w="full" colorScheme="linkedin" variant="outline">
														Save
													</Button>
												</Box>
											</Stack>
											<Divider />
											<Flex gap={3} direction="column">
												<Button leftIcon={<Icon path={mdiDelete} size={1} />} size="md" w="full" colorScheme="green" variant="outline">
													Removed Unused Data
												</Button>
												<Button leftIcon={<Icon path={mdiInformation} size={1} />} size="md" w="full" colorScheme="green" variant="outline">
													System Info
												</Button>
											</Flex>
										</Stack>
									</Flex>
								</Stack>
							</CardBody>
						</Card>
					</DrawerBody>
					<DrawerFooter>
						<Flex w="full">
							<Button w="full" leftIcon={<Icon path={mdiLogout} size={1} />} colorScheme="red" variant="outline">
								Sign out
							</Button>
						</Flex>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</Flex>
	);
}
