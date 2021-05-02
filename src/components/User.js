import React from 'react';
import validator from 'validator';

class User extends React.Component {
    state = {firstName: '', lastName: '', npiNumber: 0, buAddress: '', phoneNumber: '', email: '', emailError: ''};
    
    onFormSubmit = event => { 
        event.preventDefault();
        this.props.onSubmit(this.state);
    }

    validateEmail = event => {
        const email = event.target.value;
        if (!validator.isEmail(email)) {
            this.setState({emailError: 'Enter valid Email!'});
        } else {
            this.setState({emailError: ''});
        }
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>FirstName</label>
                        <input type="text"
                            value={this.state.firstName} 
                            onChange={(event) => this.setState({firstName: event.target.value})} 
                        />
                        <label>LastName</label>
                        <input type="text"
                            value={this.state.lastName} 
                            onChange={(event) => this.setState({lastName: event.target.value})} 
                        />
                        <label>NPI Number</label>
                        <input type="number"
                            value={this.state.npiNumber} 
                            onChange={(event) => this.setState({npiNumber: event.target.value})} 
                        />
                        <label>Business Address</label>
                        <textarea rows="5" cols="50"
                            value={this.state.buAddress} 
                            onChange={(event) => this.setState({buAddress: event.target.value})} 
                        />
                        <label>Phone Number</label>
                        <input type="text"
                            value={this.state.phoneNumber} 
                            onChange={(event) => this.setState({phoneNumber: event.target.value})} 
                        />
                        <label>Email Address</label>
                        <input type="text"
                            value={this.state.email} 
                            onChange={(event) => {
                                this.validateEmail(event);
                                this.setState({email: event.target.value})
                            }} 
                        />
                        {this.state.emailError.length > 0 && 
                            <div className="ui red basic label">{this.state.emailError}</div>
                        }
                        
                    </div>
                    <div>
                        <button className="ui submit button primary" onClick={this.onFormSubmit}>
                            Submit
                        </button> 
                    </div>
                </form>
            </div>
        );
    }

}
export default User;