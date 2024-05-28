import {
    LOAD_USER_RECORDS,
    LOAD_USER_RECORDS_SUCCESS,
    LOAD_USER_RECORDS_ERROR,
    SEARCH_FILTER_RECORDS,
    DROP_DOWN_FILTER_RECORDS
} from './constant';


const initialState = {
    loading: false,
    error: false,
    success: false,
    records: [],
    metaData: {}
}

const reducer = (state=initialState, { type, records, success, error, userFilterOptions }) => {
    switch(type) {
        case LOAD_USER_RECORDS:
            return {
                ...state,
                loading: true,
                error: false,
                success: false
            }
        case LOAD_USER_RECORDS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                success: success,
                records: records,
                metaData: { userFilterOptions }
            }
        case LOAD_USER_RECORDS_ERROR:
            return {
                ...state,
                loading: false,
                success: false,
                error: error
            }
        case SEARCH_FILTER_RECORDS:
            return {
                ...state
            }
        case DROP_DOWN_FILTER_RECORDS:
            return {
                ...state
            }
        default:
            return state
    }
}

export default reducer;