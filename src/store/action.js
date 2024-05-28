import {
    LOAD_USER_RECORDS,
    LOAD_USER_RECORDS_SUCCESS,
    LOAD_USER_RECORDS_ERROR,
    SEARCH_FILTER_RECORDS,
    DROP_DOWN_FILTER_RECORDS
} from './constant';



function loadUserRecords(load) {
    return {
        type: LOAD_USER_RECORDS,
        load
    }
}

function loadUserRecordsSuccess(records, userFilterOptions) {
    return {
        type: LOAD_USER_RECORDS_SUCCESS,
        records,
        userFilterOptions
    }
}

function loadUserRecordsError(error) {
    return {
        type: LOAD_USER_RECORDS_ERROR,
        error
    }
}

function searchFilterRecords(records) {
    return {
        type: SEARCH_FILTER_RECORDS,
        records
    }
}

function dropDownFilterRecords(records) {
    return {
        type: DROP_DOWN_FILTER_RECORDS,
        records
    }
}


export {
    loadUserRecords,
    loadUserRecordsSuccess,
    loadUserRecordsError,
    searchFilterRecords,
    dropDownFilterRecords
}