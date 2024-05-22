export { createAddSmoothing as smoothing };
/**
 * Create a basic smoothing
 * @param {number} tension The tension of the smoothing
 * @returns {(points: import('./index').Points) => string}
 */
declare function createAddSmoothing(tension?: number): (points: import('./index').Points) => string;
