import { Box, Grid, Table, Text } from '@chakra-ui/react';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { TablesTableRow } from '@components/TablesTableRow';
import { useGlobalContext } from '@context/global.context';

/**
 * This component renders a simple list of students.
 * @returns {import('react').JSX.Element} The rendered component with a list of students.
 */
export const ListOfStudents = () => {
	const { students } = useGlobalContext();

	return (
		<Grid
			gridTemplateRows="auto 1fr auto"
			height="100vh"
		>
			<Header />
			<main>
				<Box
					as="section"
					p={10}
				>
					<Table.Root interactive>
						<Table.Header>
							<Table.Row>
								<Table.ColumnHeader>Alumno</Table.ColumnHeader>
								<Table.ColumnHeader>L.U.</Table.ColumnHeader>
								<Table.ColumnHeader>Curso</Table.ColumnHeader>
								<Table.ColumnHeader>
									Domicilio
								</Table.ColumnHeader>
								<Table.ColumnHeader>
									Teléfono
								</Table.ColumnHeader>
								<Table.ColumnHeader>
									Acciones
								</Table.ColumnHeader>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							{students.length === 0 && (
								<Table.Row>
									<Table.ColumnHeader colSpan={6}>
										<Text textAlign="center">
											No hay alumnos registrados.
										</Text>
									</Table.ColumnHeader>
								</Table.Row>
							)}
							{students.length > 0 &&
								students.map((student) => (
									<TablesTableRow
										key={student.lu}
										student={student}
									/>
								))}
						</Table.Body>
						<Table.Footer>
							<Table.Row>
								<Table.ColumnHeader colSpan={6}>
									<Text textAlign="center">
										Total de alumnos: {students.length}
									</Text>
								</Table.ColumnHeader>
							</Table.Row>
						</Table.Footer>
					</Table.Root>
				</Box>
			</main>
			<Footer />
		</Grid>
	);
};
