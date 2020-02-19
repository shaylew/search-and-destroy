'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	const length = array.length;

	if(length < 1){
		return false
	} else if( length === 1){
		return  array[0] === target
	} else {
		const midpoint = Math.floor(length/2)
		const left = array.slice(0, midpoint);
		const right = array.slice(midpoint)
		if(target === right[0]){
			return true
		} else if (target < right[0]){
			return binarySearch(left,target)
		} else {
			return binarySearch(right,target)
		}
	}

};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch