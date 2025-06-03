// @ts-nocheck
/* eslint-disable check-file/folder-naming-convention */
'use client';

import { ChakraProvider, defaultSystem } from '@chakra-ui/react';

import { ColorModeProvider } from './color-mode';

export function Provider(properties) {
	return (
		<ChakraProvider value={defaultSystem}>
			<ColorModeProvider {...properties} />
		</ChakraProvider>
	);
}
