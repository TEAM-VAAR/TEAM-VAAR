import React, { Component } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { Redirect, withRouter } from 'react-router-dom'

class ReviewNew extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newReview: {
                title: "",
                date_posted: "",
                review_text: "",
                user_id: this.props.current_user.id,
                school_id: this.props.location.state.school

            },
            submitted: false
        }
      }

    handleChange = (e) => {
        const { newReview } = this.state
        newReview[e.target.name] = e.target.value
        this.setState({ newReview: newReview })
    }

    handleSubmit = () => {
        this.props.createReview(this.state.newReview)
        this.setState({ submitted: true })
    }

  render() {

    return (
      <>
      <h3>New Review</h3>

      <Form>
        <FormGroup>
            <Label for="title">Title</Label>
            <Input 
              type="text" 
              name="title" 
              onChange={this.handleChange} 
              value={this.state.newReview.title}   
            />
        </FormGroup>

        <FormGroup>
            <Label for="date_posted">Date Posted</Label>
            <Input 
              type="text" 
              name="date_posted" 
              onChange={this.handleChange} 
              value={this.state.newReview.date_posted}   
            />
        </FormGroup>

        <FormGroup>
            <Label for="review_text">Review Text</Label>
            <Input 
              type="text" 
              name="review_text" 
              onChange={this.handleChange} 
              value={this.state.newReview.review_text}   
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

export default withRouter(ReviewNew)