import React, { useEffect,useState }  from 'react';
import './trainer.css';
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table';
import { Link, Navigate } from 'react-router-dom';
import Allocate from './Allocate';
import { useNavigate } from 'react-router';

function Table({ columns, data }) {

    const [search, setSearch] = useState();
   
    function handleChange(event){
        const value=event.target.value;
        setSearch(value);
        console.log(search);
        // setFilter( "name", event.target.value); 
        // setGlobalFilter( "name", event.target.value); 
        // setGlobalFilter(event.target.value);

        // useEffect(() => {
        //     setSearch(value);
        //   }, [value]);
    }

    useEffect(() => {
        
        setGlobalFilter(search);
        console.log(search);
      }, [search]);
   
    

    const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow,
            state,
            setGlobalFilter,
          } = useTable(
              { 
                  columns, 
                  data 
              },
              useGlobalFilter);

              

          return (
              <>
               <input type="text" placeholder='Search...' className='search' onChange={handleChange}></input>
          <table {...getTableProps()} className="tablea">
          <thead>
              {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                  <th
                  {...column.getHeaderProps()}>{column.render('Header')}</th>
                  ))}
                  </tr>
                   ))}
                   </thead>
  
           <tbody {...getTableBodyProps()}>
           {rows.map(row => {
             prepareRow(row)
             return (
                 <tr {...row.getRowProps()}>
                   {row.cells.map(cell => {
                     return (
                         <td {...cell.getCellProps()}>
                           {cell.render('Cell')}
                         </td>
                     )
                   })}
                 </tr>
             )
           })}
           </tbody>
         </table>
         </>
         )
        }

function ApprovedList(props) {
    // Temporary storage of DB data
   const [trainerappr, settrainerappr] = useState([]);

    // Backend Connection API Fetch
    useEffect(() => {
        fetchAPI();
    }, []);

    async function fetchAPI() {
        const response = await fetch(`http://localhost:5000/api/search`);
        const body = await response.json();
        settrainerappr(body);
    }
    
    
    const data = trainerappr;

    let navigate = useNavigate();
    
    
    const columns = React.useMemo(()=>
            [
                {
                    Header: 'ID',
                    accessor: 'id', // accessor is the "key" in the data
                },
            {
                Header: 'Name',
                accessor: 'name', // accessor is the "key" in the data
            },
            {
                Header: 'Skill',
                accessor: 'skill', 
            },
            {
                Header: 'Trainer Type',
                accessor: 'type',
            },
            {
                Header: 'Course',
                accessor: 'courses', 
            },
            {
                Header: 'Qualification',
                accessor: 'qualification',
            },
            {
                Header: 'Company',
                accessor: 'company', 
            },
            {
                Header: 'Designation',
                accessor: 'designation', 
            },
    //         {
    //             Header: 'Photo',
    //             accessor: 'photo',
    //             // Cell: ({ cell }) => (
    //             //     <img
    //             //     src={cell.row.original.photo}
    //             //     width={60}                    
    //             //   />) 
    //             Cell: ({ cell: { value }}) => (
    //   <div>
    //     <img
    //       src={"http://localhost:5000/static/1646401793043-PHOTO.jpg"} alt={value}
    //     />
    //   </div>
    // )
    //         },
            {
                Header: 'Allocation',
                accessor: "allocate",
                Cell: ({ cell }) => (
                  <button  value= {cell.row.values.id} onClick={clicked}>
                    Allocate
                  </button>)
            },
        ], [] )

        function clicked(cell) {
            const id = cell.target.value;
            navigate(`/allocate/${id}`)
            // <Link  to={`/allocate/${id}`}>
            // </Link>
            
        }
        // console.log(data);
    //  const  filteredData = trainerappr.filter((el) => {
    //     if (props.search === '') {
    //         return el;
            
    //     }
    //     console.log(el);
    //     else {
    //         return (
    //             (el.name.toLowerCase().includes(props.search)) ||
    //             (el.designation.toLowerCase().includes(props.search))
    //         )
    //     }
    // })
    // const [search, setSearch] = useState();
   
    // function handleChange(event){
    //     setSearch(event.target.value);
    //     console.log(search);
    //     // setFilter("show.name", event.target.value); 
    // }

    
    return (
        <div>
            {/* <input type="text" placeholder='Search...' className='search' onChange={handleChange}></input> */}
             {/* <table className='tablea'>
                 <tr>
                        <th>Name</th>
                        <th>Skill</th>
                        <th>Trainer Type</th>
                        <th>Course</th>
                        <th>Qualification</th>
                        <th>Company</th>
                        <th>Designation</th>
                        <th>Allocation</th>
                    </tr>
                    
                </table>
           {trainerappr.map((i, key) => (    
                <>
                <table className='tableb'>
                
                    <tr>
                        <td>{i.name}</td>
                        <td>{i.skill}</td>
                        <td>{i.type}</td>
                        <td className='tabledata'>{i.courses}</td>
                        <td>{i.qualification}</td>
                        <td>{i.company}</td>
                        <td>{i.designation}</td>
                        <td><button  className="buttonc">Allocate</button></td>
                    </tr>
                </table>
                   
                </>
            )
            )
            
            }  */}
        <Table columns={columns} data={data} />
   
        </div>
    );
}

export default ApprovedList;