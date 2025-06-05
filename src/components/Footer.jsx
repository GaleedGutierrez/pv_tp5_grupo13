import { Box, Text } from '@chakra-ui/react';

/**
 * Footer component that renders the footer of the application.
 * @returns {import('react').JSX.Element} The rendered footer component.
 * */
export const Footer = () => (
	<Box paddingBlock={10}>
		<footer>
			<Text
				color="gray.500"
				fontSize="sm"
				mt={8}
				textAlign="center"
			>
				2025 - Universidad Nacional de Jujuy - Facultad de Ingeniería
			</Text>
		</footer>
	</Box>
);
