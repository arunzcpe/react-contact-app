import React, { Component } from 'react'

class Form extends Component {
    initialState = {
        name: '',
        city: ''
    }
    state = this.initialState;

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        })
        //console.log(name, value, this.state);
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, city } = this.state;
        return(
            <form>
                <div class="card">
                    <h5 class="card-header bg-dark text-white">Add User</h5>
                    <div class="card-body">
                        <p>
                            <input
                                type="text" 
                                class="form-control" 
                                name="name" 
                                placeholder="Enter Name"
                                value={name}
                                onChange={this.handleChange}
                            />
                        </p>
                        <p>
                            <input
                                type="text"
                                class="form-control"
                                name="city"
                                placeholder="Enter City"
                                value={city}
                                onChange={this.handleChange}
                            />
                        </p>
                        <p>
                            <input
                                type="button"
                                class="btn
                                btn-outline-dark"
                                name="submit"
                                value="Add User"
                                onClick={this.submitForm} 
                            />
                        </p>    
                    </div>
                </div>
            </form>
        )
    }
}

export default Form