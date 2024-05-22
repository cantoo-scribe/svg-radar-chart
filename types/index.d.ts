export { renderRadarChart as radar };
export * from "./smoothing.js";
/**
 * Represents a point in 2D space as a tuple of two numbers [x, y].
 */
export type Point = [number, number];
/**
 * Represents an array of Points, i.e., a path or a shape in 2D space.
 */
export type Points = [number, number][];
/**
 * <T>
 * Represents a record with keys of type T, and values of type string or number, with a special 'class' key that must be a string.
 */
export type Data<T extends string> = Record<T, string | number> & {
    class: string;
};
/**
 * <T>
 */
export type Column<T extends string> = {
    /**
     * - The unique key for identifying each column.
     */
    key: T;
    /**
     * - The caption that will be displayed on each axis.
     */
    caption: string;
    /**
     * - The angle at which the axis is displayed.
     */
    angle: number;
};
export type Options<T extends string> = {
    /**
     * - The overall size of the radar chart.
     */
    size: number;
    /**
     * - The number of concentric circles (scales) to show.
     */
    scales: number;
    /**
     * - Whether to display the axes.
     */
    axes: boolean;
    /**
     * - Whether to display the captions.
     */
    captions: boolean;
    /**
     * - The radial position of the captions.
     */
    captionsPosition: number;
    /**
     * - Function to smooth the path between points.
     */
    smoothing: (points: Points) => string;
    /**
     * - Function to define properties for axis elements.
     */
    axisProps: (col: Column<T>) => {
        className: string;
    } & import('react').SVGProps<SVGSVGElement>;
    /**
     * - Function to define properties for scale elements.
     */
    scaleProps: (scale: number) => {
        className: string;
    } & import('react').SVGProps<SVGSVGElement>;
    /**
     * - Function to define properties for shape elements.
     */
    shapeProps: (col: Data<T>) => {
        className: string;
    } & import('react').SVGProps<SVGSVGElement>;
    /**
     * - Function to define properties for caption elements.
     */
    captionProps: (col: Column<T>) => {
        className: string;
    } & import('react').SVGProps<SVGSVGElement>;
};
export type ExtendedOptions<T extends string> = Options<T> & {
    chartSize: number;
};
/**
 * @template {Exclude<string, 'class'>} T
 * @param {Record<Exclude<T, 'class'>, string>} columnsData - The data for the columns.
 * @param {Data<T>[]} data - The array of data to be plotted.
 * @param {Partial<Options<T>>} opt - Additional options to override the defaults.
 * @returns {string} The rendered radar chart as an SVG element.
 */
declare function renderRadarChart<T extends string>(columnsData: Record<Exclude<T, "class">, string>, data: Data<T>[], opt?: Partial<Options<T>>): string;
