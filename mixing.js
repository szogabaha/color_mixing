//As per the description, I assumed that the array only contains one color at most once, there are no duplicates
export function feladat01(szinek) {
    let n = szinek.length;
    let totalCombinations = 0;

    // Starting from two, there should be at least two colors selected in the combination.
    for(let k = 2; k<= n; k++) {
        
        // (C(K) = n! / (k! * (n-k)!))
        const combinations = factorial(n) / (factorial(k) * factorial(n - k))
        // C(total) = C(1) + C(2) + .. + C(n)
        totalCombinations += combinations;
    }

    return totalCombinations;

}

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }

    let result = 1;
    for(let i = 2; i <= num; i++) {
        result *= i;
    }

    return result;
}
