import {
    VISIBILITY_ALL
} from '../actions/visibility'

import type { ChangeFilter, filter } from '../actions/visibility'

export const CHANGE_VISIBILITY_FILTER = 'CHANGE_VISIBILITY_FILTER';

const visibility = (state : filter = VISIBILITY_ALL, action: ChangeFilter) => {
    switch (action.type) {
        case CHANGE_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
};

export default visibility