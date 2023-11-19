// Thanks stackoverflow

// mean = middle of the numbers (most common aroun this)
// stdev = how far the numbers go from the mean (plus and minus)
export const RandGauss = (mean = 0, stdev = 1) => {
    const u = 1 - Math.random();
    const v = Math.random();
    const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    return z * stdev + mean;
}