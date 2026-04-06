import { describe, it, expect } from "vitest";
import { formatArrayToString } from "./formatter";


describe('formatter: formatArrayToString', () => {
    it('handles an array with one item', () => {
        const expectedOutput = 'A';
        expect(formatArrayToString(['A'])).toEqual(expectedOutput);
    });

    it ('handles an array with two items', () => {
        const expectedOutput = 'A and B';
        expect(formatArrayToString(['A', 'B'])).toEqual(expectedOutput);
    });

    it ('handles an array with three items', () => {
        const expectedOutput = 'A, B and C';
        expect(formatArrayToString(['A', 'B', 'C'])).toEqual(expectedOutput);
    });

    it ('handles an array with four items', () => {
        const expectedOutput = 'A, B, C and D';
        expect(formatArrayToString(['A', 'B', 'C', 'D'])).toEqual(expectedOutput);
    });
})