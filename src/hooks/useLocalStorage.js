import { useEffect, useState } from 'react';

/**
 * @template T
 * @typedef {[T[], (newItems: T[]) => void]} UseLocalStorageReturn
 */

/**
 * Custom hook to manage state synchronized with localStorage
 * @template T
 * @param {string} key - The localStorage key
 * @param {T[]} [initialValue=[]] - The initial value if no stored data exists
 * @returns {UseLocalStorageReturn<T>} Array containing the stored items and update function
 */
export function useLocalStorage(key, initialValue = []) {
	/**
	 * Gets the stored value from localStorage
	 * @returns {T[]} The parsed stored data or initial value
	 */
	function getStoredValue() {
		try {
			const STORED_DATA = localStorage.getItem(key);

			return STORED_DATA ? JSON.parse(STORED_DATA) : initialValue;
		} catch (error) {
			console.error(`Error parsing localStorage key "${key}":`, error);

			return initialValue;
		}
	}

	const [items, setItems] = useState(getStoredValue);

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(items));
	}, [key, items]);

	/**
	 * Updates the items and synchronizes with localStorage
	 * @param {T[]} newItems - The new items array
	 */
	const updateItems = (newItems) => {
		setItems(newItems);
	};

	return [items, updateItems];
}
