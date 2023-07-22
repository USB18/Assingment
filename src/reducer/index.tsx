import { apiActionType, apiState, apiActions } from "../action/type";

const initialState: apiState = {
    isLoading: false,
    reactSuccess: [],
    reactNativeSccess: [],
    nodeSuccess: []
}

export const appReducer = (state = initialState, action: apiActions) => {
    switch (action.type) {
        case apiActionType.API_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            }
        case apiActionType.REACT_SUCCESS:
            return {
                ...state,
                reactSuccess: action.payload
            }
        case apiActionType.REACT_NATIVE_SUCCESS:
            return {
                ...state,
                reactNativeSccess: action.payload
            }
        case apiActionType.NODE_SUCCESS:
            return {
                ...state,
                nodeSuccess: action.payload
            }
        default:
            return state;
    }
}