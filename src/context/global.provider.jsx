import { STUDENTS_EXAMPLE } from '@data/studentsExample';
import { useLocalStorage } from '@hooks/useLocalStorage';
import { useMemo } from 'react';

import { GlobalContext } from './global.context';

/**
 * @typedef {Object} GlobalProviderProps
 * @property {import('react').ReactNode} children - Child components
 */

/**
 * Global context provider component
 * @param {GlobalProviderProps} props - Component props
 * @returns {import('react').JSX.Element} The provider component
 */
const GlobalProvider = ({ children }) => {
	const [students, setStudents] = useLocalStorage(
		'students',
		STUDENTS_EXAMPLE,
	);
	const CONTEXT_VALUE = useMemo(
		() => ({ students, setStudents }),
		[students, setStudents],
	);

	return (
		<GlobalContext.Provider value={CONTEXT_VALUE}>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalProvider;
