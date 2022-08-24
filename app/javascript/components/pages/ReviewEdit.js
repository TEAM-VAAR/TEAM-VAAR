import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect, withRouter } from 'react-router-dom'

class ReviewEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editReview: {
                title: "",
                date_posted: "",
                review_text: "",
            },
            submitted: false
        }
      }

      handleChange = (e) => {
        const { editReview } = this.state
        editReview[e.target.name] = e.target.value
        this.setState({ editReview: editReview })
    }

    handleSubmit = () => {
        this.props.updateReview(this.state.editReview, this.props.location.state.review_id)
        this.setState({ submitted: true })
    }

  render() {
    const {
        logged_in,
        current_user,
        new_user_route,
        sign_in_route,
        sign_out_route,
      } = this.props
      console.log("logged_in:", logged_in);
      console.log("current_user:", current_user);
    return (
        <>
      <h3>Edit your review</h3>

      <Form>
        <FormGroup>
            <Label for="title">Title</Label>
            <Input 
              type="text" 
              name="title" 
              onChange={this.handleChange} 
              value={this.state.editReview.title}   
            />
        </FormGroup>

        <FormGroup>
            <Label for="date_posted">Date Posted</Label>
            <Input 
              type="text" 
              name="date_posted" 
              onChange={this.handleChange} 
              value={this.state.editReview.date_posted}   
            />
        </FormGroup>

        <FormGroup>
            <Label for="review_text">Review Text</Label>
            <Input 
              type="text" 
              name="review_text" 
              onChange={this.handleChange} 
              value={this.state.editReview.review_text}   
            />
        </FormGroup>

        <Button
            name="submit"
            onClick={this.handleSubmit}>
            Submit
        </Button>
          { this.state.submitted && <Redirect to="/reviewindex"/> }
      </Form>                        

      </>
    )
  }
}

export default withRouter(ReviewEdit)
