import './trainer.css';
import React, { useEffect,useState }  from 'react';
import ApprovedList from './ApprovedList';

function Search(props) {

    // const [search, setSearch] = useState();

    // function handleChange(event){
    //     setSearch(event.target.value);
    //     console.log(search);
    // }

    return (
        <div>
            {/* <h1>Search Tab</h1> */}
            {/* <input type="text" placeholder='Search...' className='search' onChange={handleChange}></input> */}
            {/* <ApprovedList search={search}/> */}
            <ApprovedList />
        </div>
    );
}

export default Search;