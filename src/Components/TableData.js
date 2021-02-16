function TableData(props) {
  console.log(props);
  return (
    <>
      {props.employeeList.map((result) => (
        <tr>
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
