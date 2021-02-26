import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Table from "./Components/Table";
import API from "./Utils/API";
import { useEffect, useState } from "react";
import EmployeeContext from "./Utils/EmployeeContext";

function App() {
  const [employees, setEmployees] = useState([]);
  const [filterText, setFilterText] = useState(employees);
  const [filteredEmployees, setFilteredEmployees] = useState(employees);
  const [sort, setSort] = useState({ name: 0 });
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
          return name.toLowerCase().indexOf(filterText) > -1;
        })
      );
    }
  }, [employees, filterText]);

  // useEffect for sorting the employee list
  useEffect(() => {
    if (employees.length > 0) {
      if (sort.name === 1) {
        setFilteredEmployees(
          filteredEmployees.sort((a, b) => {
            return a.name.first.localeCompare(b.name.first);
          })
        );
      } else if (sort.name === -1) {
        setFilteredEmployees(
          filteredEmployees.sort((a, b) => {
            return b.name.first.localeCompare(a.name.first);
          })
        );
      } else {
        return;
      }
    }
  }, [employees.length, filteredEmployees, sort]);

  // function for handling the change in input in the navbar
  const handleInputChange = () => {
    const input = document
      .getElementById("employee-search")
      .value.toLowerCase();
    setFilterText(input);
  };

  // function for handling the sorting
  const handleSort = () => {
    if (sort.name === 0) {
      setSort({ name: 1 });
    } else {
      setSort({ name: -sort.name });
    }
  };

  return (
    <div className="App container">
      <EmployeeContext.Provider
        value={{ employees, filteredEmployees, handleInputChange, handleSort }}
      >
        <Header />
        <Navbar />
        {employees.length > 0 ? (
          <Table />
        ) : (
          <div></div>
        )}
      </EmployeeContext.Provider>
    </div>
  );
}

export default App;
