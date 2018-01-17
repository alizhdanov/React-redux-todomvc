import visibility, {
    VISIBILITY_ALL,
    VISIBILITY_ACTIVE,
    CHANGE_VISIBILITY_FILTER
} from './visibility';

describe('visibility', () => {
    it('default filter should be ALL', () => {
        const result = visibility(undefined, {
           type: 'bla'
        });

        expect(result).toBe(VISIBILITY_ALL);
    })

    it('default change filter', () => {
        const result = visibility(undefined, {
            type: CHANGE_VISIBILITY_FILTER,
            filter: VISIBILITY_ACTIVE
        });

        expect(result).toBe(VISIBILITY_ACTIVE);
    })
});