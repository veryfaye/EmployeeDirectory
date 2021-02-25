import { useContext } from "react";
import EmployeeContext from "../Utils/EmployeeContext";

function TableData() {
  const {employees} = useContext(EmployeeContext);
  console.log(employees)
  return (
    <>
      {employees.map((result) => (
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
