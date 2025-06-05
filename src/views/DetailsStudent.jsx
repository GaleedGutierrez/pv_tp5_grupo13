import {
	Avatar,
	Button,
	Card,
	Flex,
	Grid,
	Heading,
	HStack,
	Stack,
	Strong,
	Text,
	VStack,
} from '@chakra-ui/react';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { Navbar } from '@components/NavBar';
import { useGlobalContext } from '@context/global.context';
import { getRandomColorPalette } from '@utils/getRandomColorPalette';
import { Link, useParams } from 'react-router';

/**
 * DetailsStudent component that renders a form to view student details.
 * @returns {import('react').JSX.Element} The rendered component with a form to view student details.
 */
export const DetailsStudent = () => {
	const { students } = useGlobalContext();
	const { alumnoId: lu } = useParams();
	const STUDENT = students.find((student) => student.lu === lu);

	if (!STUDENT) {
		return (
			<Grid
				gridTemplateRows="auto 1fr auto"
				height="100vh"
			>
				<Header />
				<main>
					<VStack
						justifyContent="center"
						p={10}
					>
						<Heading size="4xl">Estudiante no encontrado</Heading>
						<Button
							asChild
							colorPalette="blue"
							fontSize="xl"
						>
							<Link to="/">Volver al Inicio</Link>
						</Button>
					</VStack>
				</main>
				<Footer />
			</Grid>
		);
	}

	const { name, lastName, email, yearOfStudy, address, phone } = STUDENT;
	const COLOR_PALLETTE = getRandomColorPalette(name);

	return (
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
					<Card.Root>
						<Card.Body>
							<HStack
								gap="3"
								mb="6"
							>
								<Avatar.Root
									colorPalette={COLOR_PALLETTE}
									size="xl"
								>
									<Avatar.Fallback name={name} />
								</Avatar.Root>
								<Stack gap="0">
									<Heading textStyle="xl">
										{`${lastName}, ${name}`}
									</Heading>
									<Text
										color="fg.muted"
										textStyle="md"
									>
										L.U.: {lu}
									</Text>
								</Stack>
							</HStack>
							<Text textStyle="lg">Detalles del estudiante:</Text>{' '}
							<VStack
								alignItems="flex-start"
								gap="2"
								mt="4"
							>
								<Text
									as="div"
									textStyle="md"
								>
									<Strong>Curso:</Strong> {yearOfStudy} año
								</Text>
								<Text
									as="div"
									textStyle="md"
								>
									<Strong>Dirección:</Strong> {address}
								</Text>
								<Text
									as="div"
									textStyle="md"
								>
									<Strong>Teléfono:</Strong> {phone}
								</Text>
								<Text
									as="div"
									textStyle="md"
								>
									<Strong>Correo electrónico:</Strong> {email}
								</Text>
							</VStack>
						</Card.Body>
					</Card.Root>
				</Flex>
			</main>
		</>
	);
};
