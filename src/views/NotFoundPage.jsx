import { Button, Center, Heading, Text } from '@chakra-ui/react';
import { Navbar } from '@components/NavBar';
import { Link, Navigate, Route, Routes } from 'react-router';

/**
 * NotFoundPage component.
 * This component renders a simple "not found" page with a title and a message.
 * @returns {import('react').JSX.Element} The rendered component with routes and a not found page.
 * */
const NotFoundPage = () => (
	<>
		<header>
			<Navbar />
		</header>
		<main>
			<Center
				flexDirection="column"
				gap={4}
				height="93.25vh"
				verticalAlign="middle"
			>
				<Heading
					color="fg.error"
					size="6xl"
				>
					Ups! Página no encontrada
				</Heading>
				<Text textStyle="2xl">
					Lo sentimos, la página que estás buscando no existe.
				</Text>
				<Button
					asChild
					colorPalette="blue"
					fontSize="xl"
				>
					<Link to="/">Volver al Inicio</Link>
				</Button>
			</Center>
		</main>
	</>
);

/**
 * RoutesWithNotFound component.
 * This component wraps the provided children routes and adds a catch-all route
 * that redirects to a "not found" page if no other routes match.
 * @param {Object} props - The component props.
 * @param {import('react').ReactNode} props.children - The child routes to render.
 * @returns {import('react').JSX.Element} The rendered component with routes and a not found page.
 * */
export const RoutesWithNotFound = ({ children }) => (
	<Routes>
		{children}
		<Route
			element={<Navigate to="/404" />}
			path="*"
		/>
		<Route
			element={<NotFoundPage />}
			path="/404"
		/>
	</Routes>
);
