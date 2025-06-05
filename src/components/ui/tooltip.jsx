// @ts-nocheck
/* eslint-disable check-file/folder-naming-convention */
import { Portal, Tooltip as ChakraTooltip } from '@chakra-ui/react';
import * as React from 'react';

export const Tooltip = React.forwardRef((properties, reference) => {
	const {
		showArrow,
		children,
		disabled,
		portalled = true,
		content,
		contentProps,
		portalRef,
		...rest
	} = properties;

	if (disabled) {
		return children;
	}

	return (
		<ChakraTooltip.Root {...rest}>
			<ChakraTooltip.Trigger asChild>{children}</ChakraTooltip.Trigger>
			<Portal
				container={portalRef}
				disabled={!portalled}
			>
				<ChakraTooltip.Positioner>
					<ChakraTooltip.Content
						ref={reference}
						{...contentProps}
					>
						{showArrow && (
							<ChakraTooltip.Arrow>
								<ChakraTooltip.ArrowTip />
							</ChakraTooltip.Arrow>
						)}
						{content}
					</ChakraTooltip.Content>
				</ChakraTooltip.Positioner>
			</Portal>
		</ChakraTooltip.Root>
	);
});
