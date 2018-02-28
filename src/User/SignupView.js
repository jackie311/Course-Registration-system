import React, {Component} from 'react';
import { Route } from 'react-router-dom';

export default class SigninView extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
          email: "",
          password: ""
        };
    }

    display(){
        return(
        <div className="mx-auto card btngap bg-light col-sm-8">
            <h5 className="btngap mx-auto">Pleae Sign Up</h5>
            <form className="" onSubmit={this.handleLogin}>            
                <div class="form-group row">
                    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" id="inputEmail3" placeholder="Email"
                            name="email"
                            value={this.state.email ||""}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div class="form-group row">
                    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control " id="inputPassword3" placeholder="Password"
                            name="password"
                            value={this.state.password ||""}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-10">
                        <button type="submit" class="btn btn-primary" disabled={!this.validateForm()}>Sign Up</button>
                    </div>
                </div>
            </form>
        </div>
        );
    }

    handleLogin(){
        
    }

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    validateForm(){
        return this.state.email.length > 0 && this.state.password.length > 0;
    }


    render(){
        return this.display();
    }
}