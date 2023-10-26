import React from "react";


import { Button, Checkbox, Form } from 'semantic-ui-react'

function newsletter(){
    return(

  <Form>
    <Form.Field>
      <p>
                              

      </p>
      <label>e-mail</label>
      <input placeholder='e-mail' />
    </Form.Field>
    <Form.Field>
      <label>full name</label>
      <input placeholder='full name' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to sign-up for daily insider' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
    <p>
                        


    </p>
  </Form>
)
}
export default newsletter
