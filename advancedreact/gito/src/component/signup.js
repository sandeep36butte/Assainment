import React from 'react';

class RegisterForm extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <form className="register_form">
                    <div>E-mail
                        <input type="email" className="firstname"/>
                    </div>
                    <div>Name
                        <input type="text" className="firstname"/>
                    </div>
                    <div>
                        password
                        <input type="password" className="firstname"/>
                    </div>
                    <input type="submit" value="register"/>
            </form>
        )
    }
}
export default RegisterForm;