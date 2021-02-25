import { useContext } from "react";
import EmployeeContext from "../Utils/EmployeeContext";

function Navbar() {
  const {handleInputChange} = useContext(EmployeeContext)
  return (
      <nav>
        <input id="employee-search" onChange={handleInputChange}/>
      </nav>
  );
}

export default Navbar;
