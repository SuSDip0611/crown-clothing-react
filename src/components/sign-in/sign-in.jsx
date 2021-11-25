import React from "react";

import './sign-in.style.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";


class SignIn extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
        }

    }

    handelSubmit = (e) => {
        e.preventDefault();
        alert('Submit...!');

        this.state({ email: '', password: '' })
    }
    
    handelChange = (event) => {
        event.preventDefault();
        alert('Change...!');

        const { value, name } = event.target;

        this.state({ [name]: value });
    }

    render(){

        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email & password</span>

                <form onSubmit={ this.handelSubmit }>
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email}
                        handelChange={ this.handelChange }
                        label="Email"
                        required 
                    />

                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password} 
                        handelChange={ this.handelChange }
                        label="Password"
                        required
                    />

                    <CustomButton type="submit" > Sign In </CustomButton>
                
                </form>

            </div>
        );

    }
}

export default SignIn;