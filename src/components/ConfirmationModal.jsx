/* eslint-disable react/jsx-handler-names */
import {
	Button,
	CloseButton,
	Dialog,
	Flex,
	HStack,
	Portal,
	Text,
} from '@chakra-ui/react';
import { RiAlarmWarningLine, RiInformation2Line } from 'react-icons/ri';

/**
 * @typedef {Object} ConfirmationModalProps
 * @property {boolean} isOpen - Whether the modal is open
 * @property {() => void} onClose - Function to close the modal without confirming
 * @property {() => void} onConfirm - Function called when user confirms the action
 * @property {string} title - Modal title
 * @property {string} message - Confirmation message to display
 * @property {string} [confirmText='Confirmar'] - Text for the confirm button
 * @property {string} [cancelText='Cancelar'] - Text for the cancel button
 * @property {'red' | 'blue' | 'green' | 'yellow' | 'purple' | 'orange'} [confirmColorPalette='red'] - Color palette for confirm button
 * @property {'destructive' | 'warning' | 'info'} [variant='destructive'] - Visual variant of the modal
 */

/**
 * Reusable confirmation modal component for user confirmations
 * @param {ConfirmationModalProps} props - Component props
 * @returns {import('react').JSX.Element} The rendered confirmation modal component
 */
export const ConfirmationModal = ({
	isOpen,
	onClose,
	onConfirm,
	title,
	message,
	confirmText = 'Confirmar',
	cancelText = 'Cancelar',
	confirmColorPalette = 'red',
	variant = 'destructive',
}) => {
	const handleConfirm = () => {
		onConfirm();
		onClose();
	};

	const getIcon = () => {
		switch (variant) {
			case 'warning':
				return <RiAlarmWarningLine />;

			case 'info':
				return <RiInformation2Line />;

			case 'destructive':
				break;

			default:
				return '🗑️';
		}
	};

	return (
		<Dialog.Root
			open={isOpen}
			onOpenChange={({ open }) => !open && onClose()}
		>
			<Portal>
				<Dialog.Backdrop />
				<Dialog.Positioner>
					<Dialog.Content>
						<Dialog.Header>
							<Dialog.Title>
								<Flex
									align="center"
									gap="2"
								>
									<Text fontSize="lg">{getIcon()}</Text>
									{title}
								</Flex>
							</Dialog.Title>
						</Dialog.Header>
						<Dialog.Body pb="6">
							<Text color="fg.muted">{message}</Text>
						</Dialog.Body>
						<Dialog.Footer>
							<HStack
								gap="3"
								justify="flex-end"
								width="full"
							>
								<Button
									variant="outline"
									onClick={onClose}
								>
									{cancelText}
								</Button>
								<Button
									colorPalette={confirmColorPalette}
									onClick={handleConfirm}
								>
									{confirmText}
								</Button>
							</HStack>
						</Dialog.Footer>
						<Dialog.CloseTrigger asChild>
							<CloseButton size="md" />
						</Dialog.CloseTrigger>
					</Dialog.Content>
				</Dialog.Positioner>
			</Portal>
		</Dialog.Root>
	);
};
