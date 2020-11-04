import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import Navbar from './Navbar'

class App extends Component {
    state = {
        users: []
    }
    //Method to remove a user
    removeUser = (index) => {
        const { users } = this.state;
        //Modify the state via setState() method
        this.setState({
            users: users.filter((user, i) => {
                return i !== index
            })
        }) 
    }
    //Method to add a user
    addUser = (user) => {
        this.setState({
            users: [...this.state.users, user]
        })
    }

    render() {  
      const { users } = this.state;  

      return (
        <>
            <Navbar /><br/>
            <div className="container">
                <Form handleSubmit={this.addUser} /> <br/>
                {/* Passing data to the child via props */}  
                <Table usersDetails={users} removeUser={this.removeUser} />
            </div>
        </>    
      )
    }
}
export default App