const { run } = require('jest');
const Runway = require('./Runway');

describe('Runway', () => {
    let runway;
    
    beforeEach(() => {
        runway = new Runway('Test Runway');
    });

    afterEach(() => {
        Runway.planes = [];
    });

    test('maximum number of planes allowed', () => {
        expect(Runway.MAX_PLANES_ALLOWED_ON_ALL_RUNWAYS).toBe(100);
    });

    test('adds planes to runway', () => {
        runway.add('Plane 1');
        expect(Runway.planes).toEqual(['Plane 1']);
    });

    test('initialize a runway with a name', () => {
        expect(runway.name).toBe('Test Runway');
    });

    test('error when adding planes to a full runway', () => {
        for(let i = 0; i < Runway.MAX_PLANES_ALLLOWED_ON_ALL_RUNWAYS; i++) {
            runway.add(`Plane ${i}`);
        }
        expect(runway.add.bind(runway, 'Plane 101')).toThrow('runway at full capacity!');
    });    

    test('remove planes from the runway', () => {
        runway.add('Plane 1');
        runway.remove('Plane 1');
        expect(Runway.planes).toEqual([]);
    });

    test('error when removing planes from an empty runway', () => {
        expect(() => runway.remove('Plane 1')).toThrowError('plane not found on runway');
    });
});
