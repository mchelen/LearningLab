import { parseCity } from './APIfuncs.js';

describe('parseCity', () => {
    it('handles missing data', () => {
        expect(parseCity({})).toEqual({});
    });
    it('extracts the city name correctly', () => {
        expect(parseCity({
            results: [{
                formatted_address: 'Test City, US 01234'
            }]
        })).toEqual({
            city: 'Test City, US'
        });
    });
});
