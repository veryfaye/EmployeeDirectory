function TableData(props) {
  console.log(props);
  return (
    <div>
      {props.employeeList.map((result) => (
        // <li className="list-group-item" key={result.id}>
        //   <img alt={result.title} className="img-fluid" src={result.images.original.url} />
        // </li>
        <tr>
          <td>{result.picture.small}</td>
          <td>{result.name.first}</td>
          <td>employee phone</td>
          <td>employee email</td>
          <td>employee dob</td>
        </tr>
      ))}
    </div>
  );
}

export default TableData;
