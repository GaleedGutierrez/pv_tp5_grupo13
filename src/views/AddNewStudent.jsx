import { Flex, Grid } from '@chakra-ui/react';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { StudentForm } from '@components/StudentForm';

/**
 * This component renders a form to add a new student.
 * @returns {import('react').JSX.Element} The rendered component with a form to add a new student.
 */
export const AddNewStudent = () => (
	<Grid
		gridTemplateRows="auto 1fr auto"
		height="100vh"
	>
		<Header />
		<main>
			<Flex
				borderRadius="0.5rem"
				justifyContent="center"
				p={10}
			>
				<StudentForm />
			</Flex>
		</main>
		<Footer />
	</Grid>
);
