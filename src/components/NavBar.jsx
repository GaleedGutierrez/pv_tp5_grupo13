import { Button, Flex, HStack, Link as ChakraLink } from '@chakra-ui/react';
import { AppRoutes } from '@models/routers.model';
import { RiSchoolLine } from 'react-icons/ri';
import { Link } from 'react-router';

const NAV_LINKS = [
	{ id: 'home', name: 'Inicio', path: AppRoutes.home },
	{ id: 'students', name: 'Alumnos', path: AppRoutes.students.studentsHome },
	{ id: 'about', name: 'Sobre el proyecto', path: AppRoutes.teamDetails },
];
/**
 * NavLink Component
 * @param {Object} props - The component props
 * @param {string} props.name - The link name
 * @param {string} props.path - The link path
 */
const NavLink = ({ name, path }) => (
	<ChakraLink
		asChild
		_hover={{
			color: 'blue.solid',
		}}
	>
		<Link to={path}>{name}</Link>
	</ChakraLink>
);

/**
 * This component renders a navigation bar with links to different sections of the application.
 * @returns {import('react').JSX.Element} The rendered component with routes and a not found page.
 * */
export const Navbar = () => (
	<Flex
		alignItems="center"
		boxShadowColor="blue.fg"
		h={16}
		justifyContent="space-between"
		mx="auto"
		px={4}
		shadow="0px 4px 8px color-mix(in srgb, var(--shadow-color) 10%, transparent),0px 0px 1px color-mix(in srgb, var(--shadow-color) 30%, transparent)"
	>
		<ChakraLink
			asChild
			_hover={{
				color: 'blue.solid',
			}}
		>
			<Link to={AppRoutes.home}>
				<RiSchoolLine size={32} />
			</Link>
		</ChakraLink>
		<HStack
			alignItems="center"
			as="nav"
			gap={12}
		>
			{NAV_LINKS.map((link) => (
				<NavLink
					key={link.id}
					{...link}
				/>
			))}
		</HStack>
		<Button
			asChild
			colorPalette="blue"
		>
			<Link to={AppRoutes.students.addNewStudent}>+ Agregar alumno</Link>
		</Button>
	</Flex>
);
