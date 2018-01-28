export const VISIBILITY_ALL : 'All'  = 'All';
export const VISIBILITY_ACTIVE : 'Active' = 'Active';
export const VISIBILITY_COMPLETED : 'Completed' = 'Completed';

export const VISIBILITY_FILTERS : Array = [
    VISIBILITY_ALL,
    VISIBILITY_ACTIVE,
    VISIBILITY_COMPLETED
]

export const CHANGE_VISIBILITY_FILTER : 'CHANGE_VISIBILITY_FILTER' = 'CHANGE_VISIBILITY_FILTER';

export type filter = 
    | typeof VISIBILITY_ALL 
    | typeof VISIBILITY_ACTIVE 
    | typeof VISIBILITY_COMPLETED 

export type ChangeFilter = {
    type: typeof CHANGE_VISIBILITY_FILTER, 
    filter : filter
}

export const changeFilter = (filter: string) : ChangeFilter => ({type: CHANGE_VISIBILITY_FILTER, filter});