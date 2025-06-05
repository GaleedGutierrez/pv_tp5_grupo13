import { useState } from 'react';

import { useGlobalContext } from '@/context/global.context';

import { ConfirmationModal } from '../ConfirmationModal';
import { TablesRow } from './components/TablesRow';

/** @import { Student } from '@models/student.model' */
/**
 * Table row component for displaying user data in Chakra UI v3
 * @param {Object} props - Component props
 * @param {Student} props.student - Student object containing user data
 * @returns {React.ReactElement} Table row element
 */
export const TablesTableRow = ({ student }) => {
	const { students, setStudents } = useGlobalContext();
	const { lu } = student;
	const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

	/**
	 * Handle confirmation of form cancellation
	 * @returns {void}
	 */
	const handleConfirmDelete = () => {
		const STUDENTS = structuredClone(students);
		const STUDENT_DELETED_INDEX = STUDENTS.findIndex(
			(student) => student.lu === lu,
		);

		if (STUDENT_DELETED_INDEX !== -1) {
			STUDENTS.splice(STUDENT_DELETED_INDEX, 1);
			setStudents(STUDENTS);
			setIsConfirmationOpen(false);
		}
	};

	return (
		<>
			<TablesRow
				student={student}
				onDeleteStudent={() => setIsConfirmationOpen(true)}
			/>
			<ConfirmationModal
				cancelText="No, mantener"
				confirmColorPalette="red"
				confirmText="Sí, borrar"
				isOpen={isConfirmationOpen}
				message="¿Está seguro de que desea eliminar al alumno? Esta acción no se puede deshacer."
				title="¿Seguro quiere eliminar al alumno?"
				variant="warning"
				onClose={() => setIsConfirmationOpen(false)}
				onConfirm={handleConfirmDelete}
			/>
		</>
	);
};
