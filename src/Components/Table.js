import { useContext } from "react";
import EmployeeContext from "../Utils/EmployeeContext";
import TableData from "./TableData";

function Table() {
  const { handleSort } = useContext(EmployeeContext);
  return (
    <div>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Image</th>
            <th id="header-name" onClick={handleSort}>
              Name
            </th>
            <th id="header-phone" onClick={handleSort}>
              Phone Number
            </th>
            <th id="header-email" onClick={handleSort}>
              Email
            </th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          <TableData />
        </tbody>
      </table>
    </div>
  );
}

export default Table;
