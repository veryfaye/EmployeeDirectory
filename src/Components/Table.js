import TableData from "./TableData";
import API from "../Utils/API";
import { Component } from "react";

class Table extends Component {
  state = {
    results: [],
  };

  componentDidMount() {
    this.searchEmployees();
  }
  // API.search().then((res) => );
  searchEmployees = () => {
    API.search()
    .then((res) => 
    //console.log(res.data.results)
    this.setState({ results: res.data.results })
    );
  };

  render() {
    return (
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
            <TableData employeeList={this.state.results} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
