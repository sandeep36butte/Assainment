import React, { Component } from 'react';
import './App.css';
import LoginForm from './component/login';
import RegisterForm from './component/signup';

class App extends Component {
  constructor(){
    super();
    this.state = {
      type:"login"
    }
  }
  handleForm = (type)=>{
    this.setState({
      type:type
    })
  }
  render() {
    return (
      <div className="App">
        <div className="main_container">
          <div className="formcontainer">
            <div onClick={()=>this.handleForm("login")}>Login</div>
            <div onClick={()=>this.handleForm("register")}>Register</div>
          </div>
          {
            this.state.type==="login" && <LoginForm/>
          }
          {
            this.state.type === "register" && <RegisterForm/>
          }
        </div>
      </div>
    );
  }
}

export default App;
