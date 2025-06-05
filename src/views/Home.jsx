import {
	Button,
	Center,
	Flex,
	Grid,
	Heading,
	Link as ChakraLink,
	Text,
} from '@chakra-ui/react';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { AppRoutes } from '@models/routers.model';
import { RiArrowRightLine } from 'react-icons/ri';
import { Link } from 'react-router';

/**
 * Home component that serves as the main entry point of the application.
 * @returns {import('react').JSX.Element} The rendered component with routes and a not found page.
 * */
export const Home = () => (
	<Grid
		gridTemplateRows="auto 1fr auto"
		height="100vh"
	>
		<Header />
		<main>
			<Center
				flexDirection="column"
				gap={4}
				height="93.25vh"
				verticalAlign="middle"
			>
				<Heading size="6xl">Facultad de Ingeniería</Heading>
				<Heading size="3xl">Universidad Nacional de Jujuy</Heading>
				<Text
					color="fg.muted"
					fontSize="xl"
					lineHeight="1.6"
					maxW="3xl"
					textAlign="center"
				>
					Bienvenido al sistema de gestión estudiantil de la Facultad
					de Ingeniería. Aquí podrás administrar la información de los
					estudiantes y consultar datos académicos.
				</Text>
				<Flex
					alignItems="center"
					gap={4}
				>
					<Button
						asChild
						colorPalette="blue"
					>
						<Link to={AppRoutes.students.studentsHome}>
							Gestionar Alumnos
						</Link>
					</Button>
					<ChakraLink
						asChild
						colorPalette="blue"
					>
						<Link to={AppRoutes.teamDetails}>
							Sobre el proyecto
							<RiArrowRightLine />
						</Link>
					</ChakraLink>
				</Flex>
			</Center>
		</main>
		<Footer />
	</Grid>
);
