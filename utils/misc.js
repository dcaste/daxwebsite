// Miscellaneous functions.

// Returns the proper Item Key needed for REACT.
export function getItemKey(itemName, itemId) {
	const key = itemName + itemId;
	return key;
}
