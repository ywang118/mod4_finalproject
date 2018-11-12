import React, { Component, Fragment } from 'react';
import { Form, Button } from 'semantic-ui-react'

const Login = (props) => {

  

  return (

    <div id="form-container">
      <div id="login-div">
        <h1>Login</h1>
        <Form id="login-form" onSubmit={props.handleLogin}>
        <Form.Field>
         <label>
           Username:
           <input type="text" name="username" />
         </label>
         </Form.Field>
         <Form.Field>
         <label>
          Password:
          <input type="password" name="password" />
         </label>
         </Form.Field>
         <Button type="submit" value="Submit">Login</Button>
        </Form>
      </div>
    </div>




  )
}
export default Login
