import { createContext, useContext } from 'react';
/** @import { Student } from '@models/student.model' */
/**
 * @typedef {Object} GlobalContextType
 * @property {Student[]} students - Array of students
 * @property {import('react').Dispatch<import('react').SetStateAction<Student[]>>} setStudents - Function to update the students array
 */

/**
 * Global context for managing application state
 */
export const GlobalContext = createContext(/** @type {any} */ (null));

/**
 * Hook to use the global context
 * @returns {GlobalContextType} The global context value
 * @throws {Error} When used outside of GlobalContextProvider
 */
export const useGlobalContext = () => {
	const CONTEXT = useContext(GlobalContext);

	if (!CONTEXT) {
		throw new Error(
			'GlobalContext must be used within a GlobalContextProvider',
		);
	}

	return CONTEXT;
};
