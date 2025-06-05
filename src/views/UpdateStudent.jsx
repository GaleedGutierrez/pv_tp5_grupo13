import { Flex, Grid } from '@chakra-ui/react';
import { StudentForm } from '@components/StudentForm';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

/**
 * UpdateStudent component that renders a form to edit an existing student.
 * @returns {import('react').JSX.Element} The rendered component with a form to update a student.
 */
export const UpdateStudent = () => (
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
				<StudentForm isEditing />
			</Flex>
		</main>
		<Footer />
	</Grid>
);
