import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect } from 'react-router-dom'


class SchoolNew extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newSchool: {
                name: ""
            },
            submitted: false
        }
    }

    handleChange = (e) => {
        const { newSchool } = this.state
        newSchool[e.target.name] = e.target.value
        this.setState({ newSchool: newSchool })
    }

    handleSubmit = () => {
        this.props.createSchool(this.state.newSchool)
        this.setState({ submitted: true })
    }

  render() {
    return (
        <>
      <h3>New School</h3>

      <Form>
        <FormGroup>
            <Label for="name">Name</Label>
            <Input 
              type="text" 
              name="name" 
              onChange={this.handleChange} 
              value={this.state.newSchool.name}   
            />
        </FormGroup>

        <Button
            name="submit"
            onClick={this.handleSubmit}>
            Submit
        </Button>
          { this.state.submitted && <Redirect to="/schoolindex"/> }
      </Form>
      </>
    )
  }
}

export default SchoolNew