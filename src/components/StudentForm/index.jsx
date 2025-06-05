import { Box } from '@chakra-ui/react';
import { ConfirmationModal } from '@components/ConfirmationModal';
import { SuccessModal } from '@components/SuccessModal';
import { AppRoutes } from '@models/routers.model';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router';

import { Form } from './components/Form';

/** @import { Student } from '@models/student.model' */

/**
 * Component that renders a form for adding a new student.
 * @param {Object} props - Component properties.
 * @param {boolean} [props.isEditing] - The unique identifier for the student when editing.
 * If provided, the form will be pre-filled with the student's data.
 * @returns {import('react').JSX.Element} The rendered component with a form for adding a new student.
 */
export const StudentForm = ({ isEditing }) => {
	const FORM = useRef(/** @type {HTMLFormElement | null} */ (null));
	const navigate = useNavigate();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [savedStudent, setSavedStudent] = useState(
		/** @type {Student | null} */ (null),
	);
	const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

	/**
	 * Handle modal close
	 * This function sets the modal state to closed and resets the saved student.
	 * @returns {void}
	 */
	const handleCloseModal = () => {
		setIsModalOpen(false);
		setSavedStudent(null);
		navigate(AppRoutes.students.studentsHome);
	};

	/**
	 * Handle form cancellation
	 * This function shows a confirmation modal before resetting the form.
	 * @returns {void}
	 */
	const handleCancelForm = () => {
		if (!FORM.current) {
			return;
		}

		const formData = new FormData(FORM.current);
		const hasData = Array.from(formData.values()).some(
			(value) => value.toString().trim() !== '',
		);

		if (hasData) {
			setIsConfirmationOpen(true);
		} else {
			navigate(AppRoutes.students.studentsHome);
		}
	};

	/**
	 * Handle confirmation of form cancellation
	 * @returns {void}
	 */
	const handleConfirmCancel = () => {
		if (FORM.current) {
			FORM.current.reset();
		}

		navigate(AppRoutes.students.studentsHome);
	};

	return (
		<Box
			borderRadius="0.5rem"
			boxShadowColor="blue.fg"
			maxWidth="3xl"
			p={6}
			shadow="0px 4px 8px color-mix(in srgb, var(--shadow-color) 10%, transparent),0px 0px 1px color-mix(in srgb, var(--shadow-color) 30%, transparent)"
			width="100%"
		>
			<Form
				formRef={FORM}
				isEditing={isEditing}
				onCancelForm={handleCancelForm}
				onSavedStudent={(student) => {
					setSavedStudent(student);
					setIsModalOpen(true);
				}}
			/>

			{/* Modal de éxito */}
			{savedStudent && (
				<SuccessModal
					isEditing={Boolean(isEditing)}
					isOpen={isModalOpen}
					student={savedStudent}
					onClose={handleCloseModal}
				/>
			)}

			{/* Modal de confirmación para cancelar */}
			<ConfirmationModal
				cancelText="No, continuar"
				confirmColorPalette="red"
				confirmText="Sí, cancelar"
				isOpen={isConfirmationOpen}
				message="¿Estás seguro de que deseas cancelar? Se perderán todos los datos ingresados."
				variant="warning"
				title={
					isEditing
						? '¿Cancelar modificación?'
						: '¿Cancelar registro?'
				}
				onClose={() => setIsConfirmationOpen(false)}
				onConfirm={handleConfirmCancel}
			/>
		</Box>
	);
};
