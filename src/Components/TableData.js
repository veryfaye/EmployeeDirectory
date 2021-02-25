import { useContext } from "react";
import EmployeeContext from "../Utils/EmployeeContext";

function TableData() {
  const { employees, filteredEmployees } = useContext(EmployeeContext);
  let displayEmployees;
  filteredEmployees.length > 0
    ? (displayEmployees = filteredEmployees)
    : (displayEmployees = employees);
  return (
    <>
      {displayEmployees.map((result) => (
        <tr className="classnamefortest" key={result.login.uuid}>
          <td>
            <img src={result.picture.medium} alt={result.name.first} />
          </td>
          <td>
            {result.name.first} {result.name.last}
          </td>
          <td>{result.phone}</td>
          <td>{result.email}</td>
          <td>{result.dob.date}</td>
        </tr>
      ))}
    </>
  );
}

export default TableData;
