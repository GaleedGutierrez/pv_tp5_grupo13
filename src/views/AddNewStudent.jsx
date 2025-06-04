import { Flex } from '@chakra-ui/react';
import { Navbar } from '@components/NavBar';
import { StudentForm } from '@components/StudentForm';

/**
 * This component renders a form to add a new student.
 * @returns {import('react').JSX.Element} The rendered component with a form to add a new student.
 */
export const AddNewStudent = () => (
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
				<StudentForm />
			</Flex>
		</main>
	</>
);
