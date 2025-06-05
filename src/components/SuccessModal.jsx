/* eslint-disable react/jsx-handler-names */
import {
	Avatar,
	Badge,
	Button,
	CloseButton,
	DataList,
	Dialog,
	HStack,
	Portal,
	Text,
} from '@chakra-ui/react';
import { getRandomColorPalette } from '@utils/getRandomColorPalette';
import { useMemo } from 'react';

/** @import { Student } from '@models/student.model' */

/**
 * @typedef {Object} SuccessModalProps
 * @property {boolean} isOpen - Whether the modal is open
 * @property {() => void} onClose - Function to close the modal
 * @property {Student} student - Student data to display in the modal
 * @property {boolean} isEditing - Whether the modal is in editing mode
 */

/**
 * Success modal component that shows student registration confirmation
 * @param {SuccessModalProps} props - Component props
 * @returns {import('react').JSX.Element} The rendered success modal component
 */
export const SuccessModal = ({ isOpen, onClose, student, isEditing }) => {
	const COLOR_PALETTE = useMemo(
		() => getRandomColorPalette(student.name),
		[student.name],
	);

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
								{isEditing
									? '¡Alumno Editado Exitosamente!'
									: '¡Alumno Registrado Exitosamente!'}
							</Dialog.Title>
						</Dialog.Header>
						<Dialog.Body pb="8">
							<Text
								color="fg.muted"
								mb="4"
							>
								{isEditing
									? 'El siguiente alumno ha sido editado correctamente:'
									: 'El siguiente alumno ha sido agregado correctamente:'}
							</Text>

							<DataList.Root orientation="vertical">
								<DataList.Item>
									<DataList.ItemLabel>
										Alumno
									</DataList.ItemLabel>
									<DataList.ItemValue>
										<HStack>
											<Avatar.Root
												colorPalette={COLOR_PALETTE}
												shape="rounded"
												size="sm"
											>
												<Avatar.Fallback
													name={student.name}
												/>
											</Avatar.Root>
											{`${student.lastName}, ${student.name}`}
										</HStack>
									</DataList.ItemValue>
								</DataList.Item>
								<DataList.Item>
									<DataList.ItemLabel>
										L.U.
									</DataList.ItemLabel>
									<DataList.ItemValue>
										<Badge colorPalette={COLOR_PALETTE}>
											{student.lu}
										</Badge>
									</DataList.ItemValue>
								</DataList.Item>
								<DataList.Item>
									<DataList.ItemLabel>
										Curso
									</DataList.ItemLabel>
									<DataList.ItemValue>
										{student.yearOfStudy}° año
									</DataList.ItemValue>
								</DataList.Item>
								<DataList.Item>
									<DataList.ItemLabel>
										Domicilio
									</DataList.ItemLabel>
									<DataList.ItemValue>
										{student.address}
									</DataList.ItemValue>
								</DataList.Item>
								<DataList.Item>
									<DataList.ItemLabel>
										Teléfono
									</DataList.ItemLabel>
									<DataList.ItemValue>
										{student.phone}
									</DataList.ItemValue>
								</DataList.Item>
								<DataList.Item>
									<DataList.ItemLabel>
										Email
									</DataList.ItemLabel>
									<DataList.ItemValue>
										{student.email}
									</DataList.ItemValue>
								</DataList.Item>
							</DataList.Root>
						</Dialog.Body>
						<Dialog.Footer>
							<Button
								colorPalette="green"
								width="full"
								onClick={onClose}
							>
								Continuar
							</Button>
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
