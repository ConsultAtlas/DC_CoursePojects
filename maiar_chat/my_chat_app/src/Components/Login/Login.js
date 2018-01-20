import React, { Component } from 'react';

import { Form, FormGroup, ControlLabel, FormControl, Checkbox, Button, Col } from 'react-bootstrap';
import './Login.css';


class LoginForm extends Component {
	render () {
        return (
            <div >
                <form action="/login" method="post">
                    <div>
                        <label>Username:</label>
                        <input type="text" name="username"/>
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" name="password"/>
                    </div>
                    <div>
                        <input type="submit" value="Log In"/>
                    </div>
                </form>
            </div>
        );
    }
    
    
}

export default LoginForm;

