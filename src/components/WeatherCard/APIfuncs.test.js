import { parseCity } from './APIfuncs.js';

describe('parseCity', () => {
    it('handles missing data', () => {
        expect(parseCity({})).toEqual({});
    });
    //add more?
});
