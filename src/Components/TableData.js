import { useContext } from "react";
import EmployeeContext from "../Utils/EmployeeContext";

function TableData() {
  const { filteredEmployees } = useContext(EmployeeContext);
  return (
    <>
      {filteredEmployees.map((result) => {
        let dob = new Date(result.dob.date);
        let month = dob.getMonth()+1;
        let day = dob.getDay();
        let year = dob.getFullYear();

        return (
          <tr key={result.login.uuid}>
            <td>
              <img src={result.picture.medium} alt={result.name.first} />
            </td>
            <td>
              {result.name.first} {result.name.last}
            </td>
            <td>{result.phone}</td>
            <td>{result.email}</td>
            <td>{month}/{day}/{year}</td>
          </tr>
        );
      })}
    </>
  );
}

export default TableData;
