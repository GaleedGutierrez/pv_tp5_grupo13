import { Heading, Link as ChakraLink, Text, VStack } from '@chakra-ui/react';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { RiGithubFill } from 'react-icons/ri';
import { Link } from 'react-router';

/**
 * About component that renders information about the project and team.
 * @returns {import('react').JSX.Element} The rendered component with project information.
 */
export const About = () => (
	<>
		<Header />
		<main>
			<VStack
				alignItems="start"
				gap={6}
				marginBlockStart={10}
				marginInline="auto"
				maxWidth="65ch"
			>
				<Heading textStyle="5xl">Sobre el proyecto</Heading>

				<Text
					fontSize="lg"
					lineHeight="1.6"
				>
					El <strong>Sistema de Gestión Estudiantil</strong> es una
					aplicación web moderna desarrollada como parte del Trabajo
					Práctico N°5 de la materia Programación Visual de la
					Facultad de Ingeniería de la Universidad Nacional de Jujuy.
				</Text>

				<VStack
					alignItems="start"
					gap={4}
				>
					<Heading textStyle="2xl">🎯 Objetivo del Proyecto</Heading>
					<Text>
						Crear una solución integral para la gestión de
						información estudiantil que permita administrar de
						manera eficiente los datos de los alumnos de la
						facultad, implementando las mejores prácticas de
						desarrollo web moderno.
					</Text>
					<Heading textStyle="2xl">
						🚀 Características Principales
					</Heading>
					<VStack
						alignItems="start"
						gap={2}
						pl={4}
					>
						<Text>
							• Gestión completa CRUD (Crear, Leer, Actualizar,
							Eliminar) de estudiantes.
						</Text>
						<Text>• Interfaz moderna con Chakra UI.</Text>
						<Text>• Navegación intuitiva con React Router</Text>
						<Text>• Persistencia de datos con localStorage.</Text>
						<Text>
							• Avatares dinámicos con paletas de colores
							aleatorias.
						</Text>
						<Text>
							• Validaciones de formularios en tiempo real.
						</Text>
					</VStack>
					<Heading textStyle="2xl">🛠️ Tecnologías Utilizadas</Heading>
					<VStack
						alignItems="start"
						gap={2}
						pl={4}
					>
						<Text>
							<strong>Frontend:</strong> React y React Router.
						</Text>
						<Text>
							<strong>UI Framework:</strong> Chakra UI.
						</Text>
						<Text>
							<strong>Build Tool:</strong> Vite con SWC.
						</Text>
					</VStack>
					<Heading textStyle="2xl">👥 Equipo de Desarrollo</Heading>
					<Text>
						Este proyecto fue desarrollado colaborativamente por el{' '}
						<strong>Grupo 13</strong>, conformado por estudiantes de
						segundo año de la carrera Analista Programador
						Universitario.
					</Text>
					<VStack
						alignItems="start"
						gap={1}
						pl={4}
					>
						<ChakraLink
							asChild
							colorPalette="blue"
						>
							<Link to="https://github.com/Ezequiel12354s">
								• Alfredo Ezequiel Gonzalez Lopez
							</Link>
						</ChakraLink>
						<ChakraLink
							asChild
							colorPalette="blue"
						>
							<Link to="https://github.com/GaleedGutierrez">
								• Axel Enrique Galeed Gutierrez
							</Link>
						</ChakraLink>
						<ChakraLink
							asChild
							colorPalette="blue"
						>
							<Link to="https://github.com/isaiahOZ">
								• Enzo Isaías Condori
							</Link>
						</ChakraLink>
						<ChakraLink
							asChild
							colorPalette="blue"
						>
							<Link to="https://github.com/VasquezFranklin">
								• Franklin Fernando Alexander Vazquez
							</Link>
						</ChakraLink>
					</VStack>
					<Heading textStyle="2xl">Repositorio de GitHub</Heading>
					<Text>
						Para ver el código fuente del proyecto, visita nuestro
						repositorio en{' '}
						<ChakraLink
							asChild
							colorPalette="blue"
						>
							<Link to="https://github.com/GaleedGutierrez/pv_tp5_grupo13">
								<RiGithubFill /> GitHub
							</Link>
						</ChakraLink>
					</Text>
				</VStack>
			</VStack>
		</main>
		<Footer />
	</>
);
