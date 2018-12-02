import React from 'react';

class LoginForm extends React.Component{
    constructor(){
        super();
    }
    validateUser = async(e) =>{
        // fetch('http://localhost:3000/user/signin',{
        //     method:'POST',
        //     mode:'cors',
        //     headers:{
        //         'Content-Type': 'application/json'
        //     },
        //     body:JSON.stringify({
        //         "email":this.username.value,
        //         "password":this.password.value
        //     }),
        // }).then(res=>{return res.json()})
        // .then(data=>
        //     console.log("data",data)    
        // ).catch(err=>console.log(err))
        try {
            const api_call = await fetch('http://localhost:3000/user/signin',{
            method : 'POST',
            mode : 'cors',
            headers :{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                        "email":this.username.value,
                        "password":this.password.value
            }),
        });
        const response = await api_call.json();
            console.log(response); 
        }
        catch (error) {
            console.log("error",error);   
           }    
    }
    render(){
        return(
            <div>
                <form className="login_form" onSubmit={this.validateUser}>
                        <label>E-mail
                            <input type="text" className="firstname" ref={(value)=>{this.username=value}}/>
                        </label>
                        <label>
                            password
                            <input type="password" className="password" ref={(value)=>{this.password=value}}/>
                        </label>
                </form>
                <input type="submit" value="Login" onClick={this.validateUser}/>
            </div>
        )
    }
}
export default LoginForm;