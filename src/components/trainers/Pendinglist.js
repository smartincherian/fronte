import React, { useEffect,useState }  from 'react';
import { Link } from 'react-router-dom';

function Pendinglist(props) {

    // Temporary storage of DB data
    const [trainerpend, settrainerpend] = useState([]);

    // Backend Connection API Fetch
    useEffect(() => {
        fetchAPI();
    }, []);

    async function fetchAPI() {
        const response = await fetch(`http://localhost:5000/api/pending`);
        const body = await response.json();
        settrainerpend(body);
    }


    return (
        <div>
            <h1>Pending List for Approval</h1>
            {trainerpend.map((i, key) => (    
                <>
                <Link className='user' key={key} to={`/pending/${i._id}`}>
                    <h3 className='trainerpend_head'>{i.name}</h3>
                </Link>
                    </>
            )
            )
            
            } 
           

        </div>
    );
}

export default Pendinglist;