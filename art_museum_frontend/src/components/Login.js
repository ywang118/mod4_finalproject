import React, { Component, Fragment } from 'react';
import { Form } from 'semantic-ui-react'

const Login = (props) => {
  // debugger
  return (

    <div id="form-container" className="form-div">
      <div id="login-div">
        <h1>Login</h1>
        <Form id="login-form" onSubmit={props.setCurrentUser}>
          <Form.Input width={8} onChange={props.handleChange} name="setName" placeholder="Name" value={props.setName} />
          <Form.Input width={8} onChange={props.handleChange} name="setEmail" placeholder="Email" value={props.setEmail} />
          <Form.Button>Login</Form.Button>
        </Form>
      </div>
    </div>

  )
}
export default Login
