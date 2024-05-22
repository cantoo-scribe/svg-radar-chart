// @ts-check
// https://github.com/d3/d3-shape/blob/04f60b8/test/curve/cardinalClosed-test.js#L11

import {line, curveCardinalClosed} from 'd3-shape'

/**
 * Create a basic smoothing
 * @param {number} tension The tension of the smoothing
 * @returns {(points: import('./index').Points) => string}
 */
const createAddSmoothing = (tension = .3) => (points) => {
	return line().curve(curveCardinalClosed.tension(tension))(points)
}

export {
	createAddSmoothing as smoothing,
}
