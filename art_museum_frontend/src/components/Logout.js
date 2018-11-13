import React, { Component, Fragment } from 'react';
import { Form } from 'semantic-ui-react'

const Logout = (props) => {
  // debugger
  return (

    <div className="form-div">
      <div id="logout-div">
        <h1>Logout</h1>
        <Form id="logout-form" onSubmit={props.logoutCurrentUser}>
          <Form.Button>Logout</Form.Button>
        </Form>
      </div>
    </div>




  )
}
export default Logout
