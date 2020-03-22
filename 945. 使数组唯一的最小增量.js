var minIncrementForUnique = function (A) {
    let sum = 0,
        newSum = 0
    A.sort((a, b) => a - b)
    console.log(A)
    for (let i = 0; i < A.length - 1; i++) {
        if (A[i] == A[i + 1]) {
            sum += 1
            A[i + 1] = A[i] + 1
        } else if (A[i] > A[i + 1]) {
            sum += A[i] - A[i + 1] + 1
            A[i + 1] = A[i] + 1
        }
    }

    return sum
};

console.log(minIncrementForUnique([0, 2, 2]))