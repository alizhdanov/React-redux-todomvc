export const VISIBILITY_ALL = 'All';
export const VISIBILITY_ACTIVE = 'Active';
export const VISIBILITY_COMPLETED = 'Completed';

export const CHANGE_VISIBILITY_FILTER = 'CHANGE_VISIBILITY_FILTER';

const visibility = (state = VISIBILITY_ALL, action) => {
    switch (action.type) {
        case 'CHANGE_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};

export default visibility