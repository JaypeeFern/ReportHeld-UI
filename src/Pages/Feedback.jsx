import React from 'react';
import { Box, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody, PopoverArrow, PopoverCloseButton, useDisclosure, Button, Textarea, Select, Text, Divider } from '@chakra-ui/react';
import Icon from '@mdi/react';
import { mdiOpenInNew } from '@mdi/js';

export default function Feedback() {
	const { isOpen, onToggle, onClose } = useDisclosure();
	return (
		<Box className="transition-opacity duration-150 ease-in-out" bottom={4} right={4} position="fixed" p={2} borderRadius="full" display="flex" justifyContent="center" alignItems="center">
			<Popover placement="top-start">
				<PopoverTrigger returnFocusOnClose={false} isOpen={isOpen} onClose={onClose} placement="left">
					<Button colorScheme="blue" borderRadius="full" w={55} h={55}>
						<Box className="flex justify-center">
							<Icon path={mdiOpenInNew} size={1} color="white" />
						</Box>
					</Button>
				</PopoverTrigger>
				<PopoverContent>
					<PopoverArrow />
					<PopoverCloseButton />
					<PopoverHeader fontWeight="semibold">Feedback</PopoverHeader>
					<PopoverBody>
						<Box display="flex" flexDirection="column" gap={4} p={3}>
							<Textarea borderColor="red"></Textarea>
							<Box>
								<Text fontSize='sm' fontWeight='light'>Please contact me by:</Text>
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
					</PopoverBody>
				</PopoverContent>
			</Popover>
		</Box>
	);
}
