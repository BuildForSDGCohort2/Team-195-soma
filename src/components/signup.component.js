import axios from 'axios';
import React, { Component } from "react";
import API_URL from "../apicommon";

export default class SignUp extends Component {

    constructor(props) {
        super(props)
        this.state = {
          name: null,
          email: null,
          password: null,
          password_confirmation: null,
          role_id:2,
        }
      }
      handleChange =(e) =>{
          const name= e.target.name;
          const value=e.target.value;
          this.setState({
              [name]:value
          })
      }

      handleSubmit=(e)=>{
          e.preventDefault();
          console.log(this.state);
          const data= this.state;
          
          axios
          .post(API_URL+'register', data)
          .then(res => {
             console.log(res);
             console.log(res.data);
           })
          .catch((err)=>{
            console.log("register error ",err)
          })


      }
    
    render() {
        return (
            <div id="container" className="login-container">
            <div className="vacenter" >
            <p className="appName">SOMA APP</p><br/>
            <p className="myAuth">Welcome to Adult Learning App</p>
            <p className="myAuth">Register Now and start learning</p>
            <hr style={{width:"150px"}}/><br/>

            <div className="myContent">
            <form onSubmit ={this.handleSubmit}>
                 <div className="auth-wrapper">
        <div className="auth-inner">
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" name="name" onChange={this.handleChange} placeholder="First name" />
                </div>

            

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" name="email" onChange={this.handleChange} placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" onChange={this.handleChange} placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password_confirmation" onChange={this.handleChange} placeholder="Enter password" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
                </div>
                </div>
            </form>
            </div>
            </ div>
            </div>
            
        );
    }
}