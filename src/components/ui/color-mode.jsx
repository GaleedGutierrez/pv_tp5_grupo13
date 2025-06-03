/* eslint-disable unicorn/filename-case */
// @ts-nocheck
/* eslint-disable check-file/folder-naming-convention */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/jsx-handler-names */
'use client';

import { ClientOnly, IconButton, Skeleton, Span } from '@chakra-ui/react';
import { ThemeProvider, useTheme } from 'next-themes';
import * as React from 'react';
import { LuMoon, LuSun } from 'react-icons/lu';

export function ColorModeProvider(properties) {
	return (
		<ThemeProvider
			disableTransitionOnChange
			attribute="class"
			{...properties}
		/>
	);
}

export function useColorMode() {
	const { resolvedTheme, setTheme, forcedTheme } = useTheme();
	const colorMode = forcedTheme || resolvedTheme;
	const toggleColorMode = () => {
		setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
	};

	return {
		colorMode,
		setColorMode: setTheme,
		toggleColorMode,
	};
}

export function useColorModeValue(light, dark) {
	const { colorMode } = useColorMode();

	return colorMode === 'dark' ? dark : light;
}

export function ColorModeIcon() {
	const { colorMode } = useColorMode();

	return colorMode === 'dark' ? <LuMoon /> : <LuSun />;
}

export const ColorModeButton = React.forwardRef((properties, reference) => {
	const { toggleColorMode } = useColorMode();

	return (
		<ClientOnly fallback={<Skeleton boxSize="8" />}>
			<IconButton
				ref={reference}
				aria-label="Toggle color mode"
				size="sm"
				variant="ghost"
				onClick={toggleColorMode}
				{...properties}
				css={{
					_icon: {
						width: '5',
						height: '5',
					},
				}}
			>
				<ColorModeIcon />
			</IconButton>
		</ClientOnly>
	);
});

export const LightMode = React.forwardRef((properties, reference) => (
	<Span
		ref={reference}
		className="chakra-theme light"
		color="fg"
		colorPalette="gray"
		colorScheme="light"
		display="contents"
		{...properties}
	/>
));

export const DarkMode = React.forwardRef((properties, reference) => (
	<Span
		ref={reference}
		className="chakra-theme dark"
		color="fg"
		colorPalette="gray"
		colorScheme="dark"
		display="contents"
		{...properties}
	/>
));
