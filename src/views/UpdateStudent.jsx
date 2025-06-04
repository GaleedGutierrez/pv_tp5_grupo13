import { Flex } from '@chakra-ui/react';
import { Navbar } from '@components/NavBar';
import { StudentForm } from '@components/StudentForm';

/**
 * UpdateStudent component that renders a form to edit an existing student.
 * @returns {import('react').JSX.Element} The rendered component with a form to update a student.
 */
export const UpdateStudent = () => (
	<>
		<header>
			<Navbar />
		</header>
		<main>
			<Flex
				borderRadius="0.5rem"
				justifyContent="center"
				p={10}
			>
				<StudentForm isEditing />
			</Flex>
		</main>
	</>
);
