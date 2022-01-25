import { actionType } from '../actionTypes';

export const getRepoData = (response) => ({
    type: actionType.GET_REPO_DATA,
    payload : response
});

export const getDevData = (response) => ({
    type: actionType.GET_DEV_DATA,
    payload : response
})