import React, {Component} from 'react';

export default class LoginView extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          password: ""
        };
      }

    display(){
        return (
            <div className="Login">
                <form onSubmit={this.handleLogin}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                         <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                            name="email"
                            value={this.state.email ||""}
                            onChange={this.handleChange}
                        />

                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"
                            name="password"
                            value={this.state.password ||""}
                            onChange={this.handleChange}
                        />
                    </div>
                
                    <button type="submit" className="btn btn-primary" disabled={!this.validateForm()} 
                        onClick={()=>this.handleLogin()}>
                            Log In
                    </button>
                </form>
            </div>
        );   
    }
    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

    handleLogin(){
        
    }
    validateForm(){
        return this.state.email.length > 0 && this.state.password.length > 0;
    }


    render(){
        return this.display();
    }

}