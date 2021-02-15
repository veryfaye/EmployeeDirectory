import TableData from "./TableData";

function Table() {
  return (
    <div>
      <table>
          <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Date of Birth</th>
          </tr>
        <TableData />
      </table>
    </div>
  );
}

export default Table;
