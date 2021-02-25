import TableData from "./TableData";

function Table() {
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
          <TableData />
        </tbody>
      </table>
    </div>
  );
}

export default Table;
