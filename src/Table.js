import React, { Component } from 'react'

//Functional Component
const TableHeader = () => {
    return (
        <thead>
            <tr>
            <th scope="col">Name</th>
            <th scope="col">City</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    //console.log(props)
    const rows = props.usersDetails.map((user, index) => {
        return (
            <tr key={index}>
                <td>{user.name}</td>
                <td>{user.city}</td>
                <td>
                    <button 
                        class="btn btn-outline-danger"
                        onClick={ () => props.delUser(index) }>Delete</button>
                </td>
            </tr>
        )
    })
    return (
        <tbody>
            {rows}
        </tbody>
    )
}


class Table extends Component {
    render() {
        const {usersDetails, removeUser} = this.props
        return (
            <table className="table table-striped table-dark">
            <TableHeader />
            <TableBody usersDetails= {usersDetails} delUser={removeUser} />
            </table>
        )
    }
}

export default Table