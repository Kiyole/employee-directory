import React, { Component } from "react";
//import Nav from './components/nav';
import API from './Api';
import Chart from './components/chart'


class App extends Component {
  state = {
    users: [],
    order: "",
    filteredUsers: [],
    searchTerm: '',
  }
   
  
 

  componentDidMount(){
  API.getUsers().then(results => {
    console.log(results)
    this.setState({
      users : results.data.results,
      filteredUsers : results.data.results
    })
  })

}
 handleInputChange = (e) => {
 e.preventDefault();
 let value = e.target.value;
 
 this.setState({
   searchTerm: value
 })
 } 

  render() {
     const {users, order} = this.state;
     const sorted = users.sort( (a, b) => {
     const ascending = (order === 'asc') ? 1 : -1;
   return ascending * a.name.first.localeCompare(b.name.first)
   });
    return (
      //<Wrapper>
        <div>
          <input 
          value = {this.state.searchTerm}
          onChange= {this.handleInputChange}/>
          <Chart
          users = {this.state.users}
          searchTerm = {this.state.searchTerm} 
          sort = {sorted}>
           
          
          </Chart>
          
        </div>
      //</Wrapper>
    );
  }
}

export default App;
