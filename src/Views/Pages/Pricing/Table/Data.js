import React from 'react'
import Table, { AvatarCell, SelectColumnFilter, StatusPill } from '../Table/Table'  // new
import Ayock from "../../../../Assets/Img/Ayock.jpg"
import pics1 from "../../../../Assets/Img/pics1.jpg"
import pics2 from "../../../../Assets/Img/pics2.jpg"
import seyi from "../../../../Assets/Img/seyi.jpg"
import mobile2 from "../../../../Assets/Img/mobile2.png"
import logo_4 from "../../../../Assets/Img/logo_4.png"

const getData = () => {
  const data = [
    {
      name: 'Ayock Daniel',
      email: 'ayock.cooper@example.com',
      title: 'Software Engineer',
      department: 'Optimization',
      status: 'Active',
      role: 'Developer',
      age: 27,
      imgUrl: Ayock ,
    },
    {
      name: 'Oluwaseyi Alugbin',
      email: 'cody.fisher@example.com',
      title: 'Product Directives Officer',
      department: 'Intranet',
      status: 'Inactive',
      role: 'Owner',
      age: 28,
      imgUrl: seyi,
    },
    {
      name: 'Esther Howard',
      email: 'esther.howard@example.com',
      title: 'Forward Response Developer',
      department: 'Directives',
      status: 'Active',
      role: 'Developer',
      age: 32,
      imgUrl: pics1,
    },
    {
      name: 'Jenny Wilson',
      email: 'jenny.wilson@example.com',
      title: 'Central Security Manager',
      department: 'Program',
      status: 'Offline',
      role: 'Member',
      age: 29,
      imgUrl: mobile2,
    },
    {
      name: 'Kristin Watson',
      email: 'kristin.watson@example.com',
      title: 'Lean Implementation Liaison',
      department: 'Mobility',
      status: 'Inactive',
      role: 'Admin',
      age: 36,
      imgUrl: logo_4,
    },
    {
      name: 'Cameron Williamson',
      email: 'cameron.williamson@example.com',
      title: 'Internal Applications Engineer',
      department: 'Security',
      status: 'Active',
      role: 'Member',
      age: 24,
      imgUrl: pics2,
    },
  ]
  return [...data, ...data, ...data]
}

function App() {

  const columns = React.useMemo(() => [
    {
      Header: "Name",
      accessor: 'name',
      Cell: AvatarCell,
      imgAccessor: "imgUrl",
      emailAccessor: "email",
    },
    {
      Header: "Title",
      accessor: 'title',
    },
    {
      Header: "Status",
      accessor: 'status',
      Cell: StatusPill,
    },
    {
      Header: "Age",
      accessor: 'age',
    },
    {
      Header: "Role",
      accessor: 'role',
      Filter: SelectColumnFilter,  // new
      filter: 'includes',
    },
  ], [])

  const data = React.useMemo(() => getData(), [])

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 ">
      <main className="mx-8 px-4 sm:px-6 lg:px-8 pt-4">
       
        <div className="mt-6 ">
          <Table columns={columns} data={data} className="" />
        </div>
      </main>
    </div>
  );
}

export default App;