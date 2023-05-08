import React from 'react';
import { Box, Text, Flex, HStack, VStack } from '@chakra-ui/react';
import Icon from '@mdi/react';
import { mdiAccountPlus } from '@mdi/js';
import { Table, Toggle, TagPicker, Pagination } from 'rsuite';
import { faker } from '@faker-js/faker';

export default function Users() {
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

	const data = generateRandomUsers(100);

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

	const paginationData = data.filter((v, i) => {
		const start = limit * (page - 1);
		const end = start + limit;
		return i >= start && i < end;
	});

	return (
		<>
			<Box bg="gray.300" className={`rounded-lg flex flex-col gap-4 p-6 me-7 border border-opacity-50 border-slate-400 flex-grow`} width={200}>
				<Table height={600} wordWrap="break-word" bordered data={getData()} sortColumn={sortColumn} sortType={sortType} onSortColumn={handleSortColumn} loading={loading}>
					<Column flexGrow={1} align="center" sortable fullText>
						<HeaderCell>Username</HeaderCell>
						<Cell dataKey="username" />
					</Column>

					<Column width={150} sortable fullText>
						<HeaderCell>First Name</HeaderCell>
						<Cell dataKey="firstname" />
					</Column>

					<Column width={150} sortable fullText>
						<HeaderCell>Last Name</HeaderCell>
						<Cell dataKey="lastname" />
					</Column>

					<Column flexGrow={1} sortable fullText>
						<HeaderCell>Primary Group</HeaderCell>
						<Cell dataKey="primarygroup" />
					</Column>

					<Column flexGrow={1} sortable fullText>
						<HeaderCell>Email</HeaderCell>
						<Cell dataKey="email" />
					</Column>

					<Column flexGrow={1} sortable fullText>
						<HeaderCell>Phone</HeaderCell>
						<Cell dataKey="phone" />
					</Column>
				</Table>
				<Box p={4} bg="gray.50" rounded='md'>
					<Pagination prev next first last ellipsis boundaryLinks maxButtons={5} size="xs" layout={['total', '-', 'limit', '|', 'pager', 'skip']} total={data.length} limitOptions={[10, 30, 50]} limit={limit} activePage={page} onChangePage={setPage} onChangeLimit={handleChangeLimit} />
				</Box>
			</Box>
		</>
	);
}


/*

https://rsuitejs.com/components/table/#pagination
https://www.npmjs.com/package/@faker-js/faker
https://fakerjs.dev/guide/usage.html
https://swbt-43857.alpha.reportheld-saas.com/admin/main.html#users
https://github.com/rsuite/rsuite
https://chakra-ui.com/docs/components/select/usage

*/