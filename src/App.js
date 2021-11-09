import AddDetails from './table1'
import React, { useState, useEffect } from "react";
import './styles.css'


import { Table } from './Table'

export default function Appr() {
  const columns = [
    { accessor: 'name', label: 'Name' },
    { accessor: 'age', label: 'Age' },
    { accessor: 'is_manager', label: 'Manager',format: (value) => (value ? '✅':'❌')},
    { accessor: 'start_date', label: 'Start Date' },
  ]

  const [list, setList] = useState([]);
  const addtoListHandler = (detail) =>
  {
    console.log(detail)
     setList([...list,detail ]);
  }

  const rows = [
     { id: 1, name: 'Liz Lemon', age: 36, is_manager: true, start_date: '02-28-1999' },
     { id: 2, name: 'Jack Donaghy', age: 40, is_manager: true, start_date: '03-05-1997' },
     { id: 3, name: 'Tracy Morgan', age: 39, is_manager: false, start_date: '07-12-2002' },
     { id: 4, name: 'Jenna Maroney', age: 40, is_manager: false, start_date: '02-28-1999' },
    { id: 5, name: 'Kenneth Parcell', age: Infinity, is_manager: false, start_date: '01-01-1970' },
    { id: 6, name: 'Pete Hornberger', age: 42, is_manager: true, start_date: '04-01-2000' },
     { id: 7, name: 'Frank Rossitano', age: 36, is_manager: false, start_date: '06-09-2004' },
     { id: 8, name: null, age: null, is_manager: null, start_date: null },
   { id: 9, name: 'Momien', age: 26, is_manager: true, start_date: '02-28-2019' },
     { id: 10, name: 'Visal', age: 31, is_manager: true, start_date: '02-28-2015' },
    //{ id: 11, name: 'Munna', age: 37, is_manager: true, start_date: '05-15-2017' },
   // { id: 12, name: 'Arushi', age: 33, is_manager: false, start_date: '09-14-2013' },
  ]

  return (
    <div className="App">
      <AddDetails addtoListHandler={addtoListHandler} />
      <h1>Table</h1>
      <h2>Sorting, Filtering, Pagination</h2>

      <Table rows={list} columns={columns} />
    </div>
  )
}



// import logo from './logo.svg';
// import './App.css';

// function Appr() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default Appr;

/*export default function App() {
  const columns = [
    { accessor: 'name', label: 'Name' },
    { accessor: 'age', label: 'Age' },
    { accessor: 'is_manager', label: 'Manager', format: (value) =>  (value ?  '✔️' : '✖️') },
    { accessor: 'start_date', label: 'Start Date' },
  ]
  
  /*const rows = [
    <Dataserve/>
    /*{ id: 1, name: 'Liz Lemon', age: 36, is_manager: true, start_date: '02-28-1999' },
    { id: 2, name: 'Jack Donaghy', age: 40, is_manager: true, start_date: '03-05-1997' },
    { id: 3, name: 'Tracy Morgan', age: 39, is_manager: false, start_date: '07-12-2002' },
    { id: 4, name: 'Jenna Maroney', age: 40, is_manager: false, start_date: '02-28-1999' },
    { id: 5, name: 'Kenneth Parcell', age: Infinity, is_manager: false, start_date: '01-01-1970' },
    { id: 6, name: 'Pete Hornberger', age: 42, is_manager: true, start_date: '04-01-2000' },
    { id: 7, name: 'Frank Rossitano', age: 36, is_manager: false, start_date: '06-09-2004' },
    { id: 8, name: null, age: null, is_manager: null, start_date: null },
    { id: 9, name: 'Momien', age: 26, is_manager: true, start_date: '02-28-2019' },
    { id: 10, name: 'Visal', age: 31, is_manager: true, start_date: '02-28-2015' },
    { id: 11, name: 'Munna', age: 37, is_manager: true, start_date: '05-15-2017' },
    { id: 12, name: 'Arushi', age: 33, is_manager: false, start_date: '09-14-2013' },
  ]

  return (
    <div className="App">
      <h1>Table</h1>
      <h2>Sorting, Filtering, Pagination</h2>

      <Table rows={rows} columns={columns}/>
    <Dataserve/>
    </div>
  )
}


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;*/
