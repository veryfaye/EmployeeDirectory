import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Table from "./Components/Table";
import API from "./Utils/API";
import { useEffect, useState } from "react";
import EmployeeContext from "./Utils/EmployeeContext";

function App() {
  const [employees, setEmployees] = useState([]);
  const [filterEmployeesBy, setFilterEmployeesBy] = useState();
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  let sortedEmployees = employees;
  // useEffect for API Call on page load
  useEffect(() => {
    API.search()
      .then((res) => setEmployees(res.data.results))
      .catch((err) => console.log(err));
  }, []);

  // useEffect for searching in the input field in the navbar
  useEffect(() => {
    if (employees.length > 0) {
      setFilteredEmployees(
        employees.filter((employee) => {
          let name = employee.name.first + " " + employee.name.last;
          return name.toLowerCase().indexOf(filterEmployeesBy) > -1;
        })
      );
    }
  }, [employees, filterEmployeesBy]);

  // function for handling the change in input in the navbar
  const handleInputChange = (e) => {
    const input = document
      .getElementById("employee-search")
      .value.toLowerCase();
    setFilterEmployeesBy(input);
  };

  const handleSort = (e) => {
    filteredEmployees.length > 0
      ? (sortedEmployees = filteredEmployees)
      : (sortedEmployees = employees);
    switch (e.target.id) {
      case "header-name":
        sortedEmployees.sort((a, b) => {
          return a.name.first.localeCompare(b.name.first);
        });
        break;
      case "header-phone":
        sortedEmployees.sort((a, b) => {
          return a.phone.localeCompare(b.phone);
        });
        break;
      case "header-email":
        sortedEmployees.sort((a, b) => {
          return a.email.localeCompare(b.email);
        });
        break;
      default:
        break;
    }
    console.log(sortedEmployees);
    filteredEmployees.length > 0
      ? setFilteredEmployees(sortedEmployees)
      : setEmployees(sortedEmployees);
  };

  return (
    <div className="App">
      <EmployeeContext.Provider
        value={{ employees, filteredEmployees, handleInputChange, handleSort }}
      >
        <Header />
        <Navbar />
        {employees.length > 0 ? (
          <Table employeeList={employees} />
        ) : (
          <div></div>
        )}
      </EmployeeContext.Provider>
    </div>
  );
}

export default App;
