import React, { useContext, useRef } from 'react';
import './SearchBox.css';

const SearchBox = (props) => {



  const refvalue = useRef(null);




  

  return (
    <>
    <div className='wrap'>
    <div className="search-box">
      <input type="text" placeholder="Search News" ref={refvalue} />
      
    </div>

    <button className="search-button" onClick={props.handle}>
        <p>Go</p>
      </button>
      </div>
    </>
  );
}

export default SearchBox;
