import React from 'react';
import './styles.css';

function List({ records }) {
  return (
    <div className='listContainer'>{records?.map(e => {
        return <div className='itemContainer' key={e.id}>
            <div>User Id: {e.userId}</div>
            <p>Title: {e?.title}</p>
        </div>
    })}</div>
  )
}

export default List