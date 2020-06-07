import React from 'react';

function makeChart(props) {
let filteredArray = props.users.filter(user => {
  return user.name.first.toLowerCase().includes(props.searchTerm.toLowerCase()) || user.name.last.toLowerCase().includes(props.searchTerm.toLowerCase()) || user.email.toLowerCase().includes(props.searchTerm.toLowerCase())
  
})
  return (
    <table className="table">
      <thead className="black white-text">
        <tr>
          <th scope="col">ID</th>
          <th scope="col" onClick = {props.sort}>First</th>
          <th scope="col">Last</th>
          <th scope="col">Email</th>
          <th scope="col">Picture</th>
        </tr>
      </thead>
      <tbody>
       {filteredArray.map((user, i) => {
         //if(!user.name)console.log(user)
          return (
            <tr key = {i + 1}>
              <th>{i + 1}</th>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.email}</td>
              <td><img alt = 'Face' src = {user.picture.thumbnail} /></td>

            </tr>
          )
        })}

      </tbody>
    </table>
  );
}

export default makeChart;