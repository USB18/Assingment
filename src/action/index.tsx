import { Dispatch } from "redux"
import { GET } from "../constants/service-axios"
import { apiActionType } from "./type"

export const apiListCallAction: ((
    successCallback: Function,
    errorCallback: Function,
    type: any,
    params: any
) => any) = (
    successCallback,
    errorCallback,
    type,
    params
) => {
        return async (dispatch: Dispatch) => {
            const url = "questions"
            try {
                dispatch({ type: apiActionType.API_LOADING, payload: true });

                const response = await GET(url, params)
                if (response.status) {
                    dispatch({
                        type: type,
                        payload: response.data?.items
                    })
                    successCallback(response)
                } else {
                    errorCallback(response)
                }
            } catch (error) {
                errorCallback(error)
            } finally {
                dispatch({ type: apiActionType.API_LOADING, payload: false }); // Stop loading
            }
        }
    }