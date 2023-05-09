import React from 'react';
import { Box, Text, Flex, HStack, VStack, Input, Button, Select, Textarea, Grid } from '@chakra-ui/react';
import Icon from '@mdi/react';
import { mdiAccountPlus, mdiChevronLeft, mdiCloseBox } from '@mdi/js';
import { Table, Toggle, TagPicker, Pagination } from 'rsuite';
import { faker } from '@faker-js/faker';

export default function Users({ show, handleHide }) {
	const { Column, HeaderCell, Cell } = Table;

	const [sortColumn, setSortColumn] = React.useState();
	const [sortType, setSortType] = React.useState();
	const [loading, setLoading] = React.useState(false);
	const [limit, setLimit] = React.useState(10);
	const [page, setPage] = React.useState(1);

	const generateRandomUsers = count => {
		const data = [];
		for (let i = 0; i < count; i++) {
			data.push({
				username: faker.internet.userName(),
				firstname: faker.name.firstName(),
				lastname: faker.name.lastName(),
				primarygroup: faker.company.name(),
				email: faker.internet.email(),
				phone: faker.phone.number('+6391########')
			});
		}
		return data;
	};

	const data = generateRandomUsers(20);

	const getData = () => {
		if (sortColumn && sortType) {
			return data.sort((a, b) => {
				let x = a[sortColumn];
				let y = b[sortColumn];
				if (typeof x === 'string') {
					x = x.charCodeAt();
				}
				if (typeof y === 'string') {
					y = y.charCodeAt();
				}
				if (sortType === 'asc') {
					return x - y;
				} else {
					return y - x;
				}
			});
		}
		return data;
	};

	const handleSortColumn = (sortColumn, sortType) => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			setSortColumn(sortColumn);
			setSortType(sortType);
		}, 500);
	};

	const handleChangeLimit = dataKey => {
		setPage(1);
		setLimit(dataKey);
	};

	const [searchKeyword, setSearchKeyword] = React.useState('');

	const handleSearch = value => {
		setSearchKeyword(value);
	};

	const filteredData = data.filter(item => Object.values(item).some(value => value.toString().toLowerCase().includes(searchKeyword.toLowerCase())));

	function createColumn(dataKey, headerText, width = null) {
		return (
			<Column className='cursor-pointer' flexGrow={1} width={width} align="center" sortable fullText>
				<HeaderCell>{headerText}</HeaderCell>
				<Cell dataKey={dataKey} />
			</Column>
		);
	}

	return (
		<>
			{show && (
				<Box>
					<Flex gap={0} className="rounded-tl-lg rounded-bl-lg h-full w-full flex-col bg-zinc-600">
						<HStack py={1.5} px={4} className="justify-between rounded-tl-lg bg-black bg-opacity-30 h-16">
							<Flex gap={2}>
								<Button size="sm" colorScheme="green">
									Save
								</Button>
								<Button size="sm" colorScheme="red">
									Cancel
								</Button>
							</Flex>
							<Box onClick={handleHide} cursor="pointer">
								<Icon path={mdiCloseBox} size={1.5} className="text-red-500 hover:text-red-600 transition-all duration-150 ease-in-out" />
							</Box>
						</HStack>
						<Grid p={4} gap={3} templateColumns="repeat(2, 150px)">
							<Box>
								<Text fontSize={15} textAlign="left" fontWeight="semibold" mb={1.5} className="text-white ">
									Username
								</Text>
								<Input rounded="md" size="sm" bg="gray.400" border={0} borderRight="2px" borderRightColor="red.500" focusBorderColor="#0288d1" />
							</Box>
							<Box>
								<Text fontSize={15} textAlign="left" fontWeight="semibold" mb={1.5} className="text-white ">
									Password
								</Text>
								<Input rounded="md" size="sm" bg="gray.400" border={0} borderRight="2px" borderRightColor="red.500" focusBorderColor="#0288d1" type="password" />
							</Box>
							<Box>
								<Text fontSize={15} textAlign="left" fontWeight="semibold" mb={1.5} className="text-white ">
									First Name
								</Text>
								<Input rounded="md" size="sm" bg="gray.400" border={0} borderRight="2px" borderRightColor="red.500" focusBorderColor="#0288d1" />
							</Box>
							<Box>
								<Text fontSize={15} textAlign="left" fontWeight="semibold" mb={1.5} className="text-white ">
									Last Name
								</Text>
								<Input rounded="md" size="sm" bg="gray.400" border={0} borderRight="2px" borderRightColor="red.500" focusBorderColor="#0288d1" type="password" />
							</Box>
							<Box>
								<Text fontSize={15} textAlign="left" fontWeight="semibold" mb={1.5} className="text-white ">
									Date of Birth
								</Text>
								<Input rounded="md" size="sm" bg="gray.400" border={0} focusBorderColor="#0288d1" type="date" />
							</Box>
							<Box>
								<Text fontSize={15} textAlign="left" fontWeight="semibold" mb={1.5} className="text-white ">
									Phone
								</Text>
								<Input rounded="md" size="sm" bg="gray.400" border={0} focusBorderColor="#0288d1" type="text" />
							</Box>
						</Grid>
						<Grid py={2} px={4} gap={3}>
							<Box>
								<Text fontSize={15} textAlign="left" fontWeight="semibold" mb={1.5} className="text-white ">
									Primary Group
								</Text>
								<Select placeholder="Select option" size="sm" bg="gray.400" rounded="md" border={0} focusBorderColor="#0288d1" type="text">
									<option value="option1">Option 1</option>
									<option value="option2">Option 2</option>
									<option value="option3">Option 3</option>
								</Select>
							</Box>
							<Box>
								<Text fontSize={15} textAlign="left" fontWeight="semibold" mb={1.5} className="text-white ">
									User Configuration Presets
								</Text>
								<Select placeholder="Select option" size="sm" bg="gray.400" rounded="md" border={0} focusBorderColor="#0288d1" type="text">
									<option value="option1">Option 1</option>
									<option value="option2">Option 2</option>
									<option value="option3">Option 3</option>
								</Select>
							</Box>
						</Grid>
					</Flex>
				</Box>
			)}

			<Box bg="whiteAlpha.600" p={4} className={`gap-4 ${show ? 'rounded-tr-md rounded-br-md' : 'rounded-md'} flex me-7 flex-col flex-grow`}>
				<HStack>
					<Button bg="#b7ee5b" onClick={handleHide} _hover={{ backgroundColor: '#99c74b' }} className="dropshadow-box-25">
						<Icon path={mdiChevronLeft} size={1} />
					</Button>
					<Flex h={38} className="rounded-md table-header-color w-full ps-4 items-center border-b dropshadow-box-25">
						<Icon path={mdiAccountPlus} size={1} className="text-gray-600" />
						<Text fontWeight="medium" fontSize="lg" className="p-3 rounded-lg text-gray-600">
							Users
						</Text>
					</Flex>
					<Box>
						<Input bg="white" rounded="md" type="text" value={searchKeyword} onChange={e => handleSearch(e.target.value)} placeholder="Search" className="dropshadow-box-25" />
					</Box>
				</HStack>
				<Table className="rounded-md dropshadow-box-25" height={600} wordWrap="break-word" bordered data={filteredData} sortColumn={sortColumn} sortType={sortType} onSortColumn={handleSortColumn} loading={loading}>
					{createColumn('username', 'Username')}
					{createColumn('firstname', 'First Name', 150)}
					{createColumn('lastname', 'Last Name', 150)}
					{createColumn('primarygroup', 'Primary Group')}
					{createColumn('email', 'Email')}
					{createColumn('phone', 'Phone')}
				</Table>
				<Box p={4} bg="gray.50" className="rounded-md dropshadow-box-25">
					<Pagination prev next first last ellipsis boundaryLinks maxButtons={5} size="xs" layout={['total', '-', 'limit', '|', 'pager', 'skip']} total={data.length} limitOptions={[10, 30, 50]} limit={limit} activePage={page} onChangePage={setPage} onChangeLimit={handleChangeLimit} />
				</Box>
			</Box>
		</>
	);
}