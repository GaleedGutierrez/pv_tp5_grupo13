import {
	Avatar,
	Badge,
	Button,
	HStack,
	Table,
	Text,
	VStack,
} from '@chakra-ui/react';
import { getRandomColorPalette } from '@utils/getRandomColorPalette';
import { useMemo } from 'react';
import { RiDeleteBin2Line, RiEdit2Line, RiEyeLine } from 'react-icons/ri';

/** @import { Student } from '@models/student.model' */
/**
 * Table row component for displaying user data in Chakra UI v3
 * @param {Object} props - Component props
 * @param {Student} props.student - Student object containing user data
 * @returns {React.ReactElement} Table row element
 */
export const TablesTableRow = ({ student }) => {
	const { name, lastName, email, lu, yearOfStudy, address, phone } = student;
	const COLOR_PALLETTE = useMemo(() => getRandomColorPalette(name), [name]);

	return (
		<Table.Row>
			<Table.Cell>
				<HStack py=".8rem">
					<Avatar.Root
						colorPalette={COLOR_PALLETTE}
						shape="rounded"
						size="lg"
					>
						<Avatar.Fallback name={name} />
					</Avatar.Root>
					<VStack
						align="start"
						gap={0}
					>
						<Text
							fontSize="md"
							fontWeight="bold"
							minWidth="100%"
						>
							{`${lastName}, ${name}`}
						</Text>
						<Text
							color="fg.muted"
							fontSize="sm"
						>
							{email}
						</Text>
					</VStack>
				</HStack>
			</Table.Cell>

			<Table.Cell>
				<Text
					fontSize="md"
					fontWeight="bold"
				>
					{lu}
				</Text>
			</Table.Cell>

			<Table.Cell>
				<Badge
					borderRadius="0.5rem"
					colorPalette={COLOR_PALLETTE}
					fontSize="16px"
					p="0.25rem 0.75rem"
				>
					{yearOfStudy} año
				</Badge>
			</Table.Cell>

			<Table.Cell>
				<Text fontSize="md">{address}</Text>
			</Table.Cell>

			<Table.Cell>
				<Text
					fontSize="md"
					fontWeight="bold"
				>
					{phone}
				</Text>
			</Table.Cell>
			<Table.Cell>
				<HStack>
					<Button
						colorPalette="purple"
						title="Ver detalles"
					>
						<RiEyeLine />
					</Button>
					<Button
						colorPalette="cyan"
						title="Editar"
					>
						<RiEdit2Line />
					</Button>
					<Button
						colorPalette="red"
						title="Borrar"
						variant="outline"
					>
						<RiDeleteBin2Line />
					</Button>
				</HStack>
			</Table.Cell>
		</Table.Row>
	);
};
