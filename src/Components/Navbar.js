import { useContext } from "react";
import EmployeeContext from "../Utils/EmployeeContext";

function Navbar() {
  const { handleInputChange } = useContext(EmployeeContext);
  return (
    <div className="row p-3">
      <div className="col-4"></div>
      <div className="col-4">
        <nav>
          <h4>Search by Name:</h4>
          <input
            id="employee-search"
            className="form-control"
            onChange={handleInputChange}
          />
        </nav>
      </div>
      <div className="col-4"></div>
    </div>
  );
}

export default Navbar;
