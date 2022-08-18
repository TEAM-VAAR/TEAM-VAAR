import React, { Component } from 'react'
import { Card, CardBody, Col, CardTitle, CardText } from 'reactstrap'

class ReviewIndexPage extends Component {
  render() {
    let { reviews } = this.props
    return (
        <>
        <h3>Review Page</h3>
            <div>
                { reviews && reviews.map(review => {
                return(
                    <Col>
                        <Card id={review.id}>
                                <CardBody>
                                    <CardTitle>{review.title}</CardTitle>
                                    <CardText>{review.review_text}</CardText>
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