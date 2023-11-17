function solution(A, K) {
    var N = A.length;

    if (N === 0) {
        // Handle empty array
        return A;
    }

    // Adjust K to avoid unnecessary rotations
    K = K % N;

    // If K is 0, no rotation is needed
    if (K === 0) {
        return A;
    }

    // Create a new array to store the rotated elements
    let loopedArray = new Array(N);

    // Perform the rotation
    for (let i = 0; i < N; i++) {
        let nexPosition = (i + K) % N;
        loopedArray[nexPosition] = A[i];
    }

    return loopedArray;
}

