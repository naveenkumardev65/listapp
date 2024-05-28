import { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { loadUserRecords } from '../store/action';
import List from '../components/List';
import './App.css';

function App(props) {
  const { dispatch, loading, records, metaData,  } = props;
  const { userFilterOptions } = metaData;
  const [filterRecords, setFilterRecords] = useState([])
  const [error, setError] = useState(false)
  const [filter, setFilter] = useState('all');
  const inputRef = useRef(null)

  useEffect(() => {
    dispatch(loadUserRecords(true));
  }, []);

  const handleFilterChange = (e) => {
    setError(false);
    inputRef.current.value = '';
    let filterRecord = records?.filter(item => item?.userId == e.target.value)
    setFilterRecords(filterRecord);
    setFilter(e.target.value);
    
  }

  const dobounc = (func, delay) => {
    let timer;
    return (...args) => {
      if(timer) clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay)
    }
  }

  const handleInputChange = dobounc((value) => {
    if(value) {
      setError(false);
      let filterRecord = records?.filter(item => item?.title.includes(value))
      if(filter != 'all') {
        setFilter('all')
      }
      if(filterRecord?.length > 0) {
        setFilterRecords(filterRecord)
      } else {
        setError('No Record Found')
      }
    } else {
      setError(false)
      setFilterRecords([])
    }
  },  500);

  if(loading) {
    return <h2>Loading...</h2>
  }

  return (
    <>
    <div className='filterContainer'>
      <div className='dropdwonFilter'>
        User Filter: <select defaultValue={filter} value={filter} onChange={handleFilterChange} className='dropdown'>
          {userFilterOptions?.map(e => {
            return <option value={e?.id} >{e?.name}</option>
          })}
        </select>
      </div>
      <div className='searchFilter'>
        Search: <input ref={inputRef} type="text" name="search" className="searchInput" onChange={(e) => handleInputChange(e.target.value)}/>
      </div>
    </div>
    
      {!error ? <List records={filterRecords?.length> 0 ? filterRecords: records}/> : <h2>{error}</h2>}
    </>
  )
}


const mapStateToProps = (state) => {
  const userReducer = state && state?.userListReducer;
  return {
    loading: userReducer && userReducer?.loading || false,
    error: userReducer && userReducer?.error || false,
    success: userReducer && userReducer?.success || false,
    records: userReducer && userReducer?.records || [],
    metaData: userReducer && userReducer?.metaData || {}
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(App);
