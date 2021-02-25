import TableData from "./TableData";
import API from "../Utils/API";
import { useEffect, useState } from "react";
import EmployeeContext from "../Utils/EmployeeContext";

function Table() {
  const [employees, setEmployees] = useState({});

  useEffect(() => {
    API.search()
      .then((res) => setEmployees(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <EmployeeContext.Provider value = {{employees}}>
    <div>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          <TableData employeeList={employees} />
        </tbody>
      </table>
    </div>
    </EmployeeContext.Provider>
  );
}

export default Table;
