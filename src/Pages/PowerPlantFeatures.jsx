import React from 'react';
import { Box, Text, Flex, Input, Button, HStack, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import Icon from '@mdi/react';
import { mdiChevronRight, mdiChevronLeft, mdiHelp, mdiCheckBold, mdiCloseThick } from '@mdi/js';
import { faker } from '@faker-js/faker/locale/en';

export default function PowerPlantFeatures({ show, handleHide }) {
	const [buttonState, setButtonState] = React.useState(true);
	function handleButtonState() {
		setButtonState(prevState => !prevState);
	}

	const generateRandomData = (count, templateHeader = [], templateName, templateItems, templateProtocols, templateStatusClose, templateStatusOpen, templateGroup) => {
		const data = [];
		for (let i = 1; i <= count; i++) {
			data.push(
				<AccordionItem key={i}>
					<h2>
						<AccordionButton bg='blackAlpha.200' _expanded={{ bg: '#52525b', color: 'white' }}>
							<Box as="span" flex="1" textAlign="left" p={2}>
								{templateHeader[i - 1]}
							</Box>
							<AccordionIcon />
						</AccordionButton>
					</h2>
					<AccordionPanel w='full' padding={0}>
						<Flex w='full' direction='column' textAlign='center'>
							<Box className=" bg-gray-400 bg-opacity-40 cursor-pointer hover:bg-gray-500 hover:bg-opacity-50 p-3 grid grid-cols-3 place-items-center text-sm ">
								<Text>{templateName}</Text>
								<Text>{templateItems}</Text>
								<Text>{templateProtocols}</Text>
							</Box>
						</Flex>
					</AccordionPanel>
				</AccordionItem>
			);
		}
		return data;
	};

    const generateFaker = (count) => {
        const data = []
        for (let i = 1; i <= count; i++) {
            data.push(
                faker.company.name()
            )
        }
        return data
    } 
	return (
		<>
			{show && (
				<Box>
					<Flex gap={0} className="rounded-tl-lg rounded-bl-lg h-full w-full flex-col bg-zinc-600">
						<HStack py={1.5} px={4} className="justify-end rounded-tl-lg bg-black bg-opacity-30 h-16">
							<Box onClick={handleHide} cursor="pointer">
								<Icon path={mdiChevronRight} size={1.5} className="text-red-400 hover:text-red-500 transition-all duration-150 ease-in-out" />
							</Box>
						</HStack>
						<Flex direction="column" px={7} py={5}>
                            
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
					<Accordion allowMultiple className=" w-full bg-gray-400 bg-opacity-40">
						{generateRandomData(8, generateFaker(10), 'Test', 'Test', 'Test')}
					</Accordion>
				</Flex>
			</Box>
		</>
	);
}
