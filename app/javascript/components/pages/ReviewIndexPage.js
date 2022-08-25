import React, { Component } from 'react'
import { Card, CardBody, Col, CardTitle, CardText } from 'reactstrap'
import { Link } from 'react-router-dom'

class ReviewIndexPage extends Component {
  render() {
    let { reviews } = this.props

    return (
        <>
        <h3>Review Page</h3>
            <div>
                { reviews && reviews.map(review => {
                return(
                    <Col key={review.id}>
                        <Card id={review.id}>
                                <CardBody>
                                    <CardTitle>{review.title}</CardTitle>
                                    <CardText>{review.review_text}</CardText>
                                    <Link to={{ pathname: `/reviewedit/${review.id}`, state: {review_id: review.id} }}>Edit Review</Link>
                                    <br />
                                    <Link to={{ pathname: `/reviewshow/${review.id}` }}>Show Review</Link>
                                </CardBody>
                        </Card>
                    </Col>
                    )
                })}
            </div>
        </>
    )
}

}
export default ReviewIndexPage