function permute(permutation) {
	var length = permutation.length,
		result = [permutation.slice()],
		c = new Array(length).fill(0),
		i = 1, k, p;

	while (i < length) {
		if (c[i] < i) {
			k = i % 2 && c[i];
			p = permutation[i];
			permutation[i] = permutation[k];
			permutation[k] = p;
			++c[i];
			i = 1;
			result.push(permutation.slice());
		} else {
			c[i] = 0;
			++i;
		}
	}
	return result;
}

function bestPermutation(permutations, distanceMatrix) {
	let bestScore = -1
	let bestPermutation = permutations[0]

	for (let i = 0; i < permutations.length; i++) {
		let ps = score(permutations[i])
		if (ps > bestScore) {
			bestScore = ps
			bestPermutation = permutations[i];
		}
	}
	return bestPermutation

}

function score(perm, distanceMatrix) {
	// best distance
	console.log(distanceMatrix)
}

export const solve = (users, distanceMatrix) => {
	console.log(distanceMatrix)
	return bestPermutation(permute(users), distanceMatrix)
}