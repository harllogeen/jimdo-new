import React from "react";
import Table, { AvatarCell, SelectColumnFilter, StatusPill } from "./Table2";
import { HiCheck } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";

const getData = () => {
  const data = [
    {
      feature: "Hosting",

      unlimited: "US$39",
      department: "Optimization",
      grow: "US$15",
      start: "US$9",
      play: "US$0",
    },
    {
      feature: "HTTPS security",

      unlimited: (
        <HiCheck className="bg-green text-white rounded-full w-5 h-5" />
      ),
      department: "Optimization",
      grow: "free",
      start: <HiCheck className="bg-green text-white rounded-full w-5 h-5" />,
      play: <HiCheck className="bg-green text-white rounded-full w-5 h-5" />,
    },
    {
      feature: "Free domain",

      unlimited: (
        <HiCheck className="bg-green text-white rounded-full w-5 h-5" />
      ),
      department: "Optimization",
      grow: "free",
      start: <HiCheck className="bg-green text-white rounded-full w-5 h-5" />,
      play: ".jimdosite.com subdomain",
    },
    {
      feature: "Storage",

      unlimited: "Unlimited",

      grow: "15 GB",
      start: "5 GB",
      play: "500 MB",
    },
    {
      feature: "Bandwidth",

      unlimited: "Unlimited",

      grow: "20 GB",
      start: "10 GB",
      play: "2 MB",
    },
    {
      feature: "Connect your own domain",

      unlimited: (
        <HiCheck className="bg-green text-white rounded-full w-5 h-5" />
      ),
      grow: "US$15",
      start: <HiCheck className="bg-green text-white rounded-full w-5 h-5" />,
      play: <HiOutlineX />,
    },
    {
      feature: "Customer support",

      unlimited: "within 1 hour",

      grow: "within 4 hour",
      start: "within 1-2 working days",
      play: <HiOutlineX />,
    },
    {
      feature: "Connect your email address",

      unlimited: (
        <HiCheck className="bg-green text-white rounded-full w-5 h-5" />
      ),
      grow: "US$15",
      start:  <HiCheck className="bg-green text-white rounded-full w-5 h-5" />,
      play: <HiOutlineX />,
    },
    {
      feature: "Forwarding email addresses",
      unlimited: "20",
      grow: "5",
      start: "1",
      play: <HiOutlineX />,
    },
  ];
  return [...data];
};

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: "FEATURE",
        accessor: "feature",
        Cell: AvatarCell,
      },
      {
        Header: "UNLIMITED",
        accessor: "unlimited",
      },
      {
        Header: "GROW",
        accessor: "grow",
        Cell: StatusPill,
      },
      {
        Header: "START",
        accessor: "start",
      },
      {
        Header: "PLAY",
        accessor: "play",
        Filter: SelectColumnFilter, // new
        filter: "includes",
      },
    ],
    []
  );

  const data = React.useMemo(() => getData(), []);

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
