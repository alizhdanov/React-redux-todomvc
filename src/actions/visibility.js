// @flow

export const VISIBILITY_ALL = 'All';
export const VISIBILITY_ACTIVE = 'Active';
export const VISIBILITY_COMPLETED = 'Completed';


import { CHANGE_VISIBILITY_FILTER } from '../reducers/visibility'

export const changeFilter = (filter) => ({type: CHANGE_VISIBILITY_FILTER, filter});