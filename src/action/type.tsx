import { Action } from "redux";

export enum apiActionType {
    API_LOADING = "API_LOADING",
    REACT_SUCCESS = "REACT_SUCCESS",
    REACT_NATIVE_SUCCESS = "REACT_NATIVE_SUCCESS",
    NODE_SUCCESS = "NODE_SUCCESS"
}

export interface apiActions extends Action {
    type: apiActionType,
    payload: any
}

export type apiState = {
    isLoading: boolean,
    reactSuccess: any,
    reactNativeSccess: any,
    nodeSuccess: any
}
