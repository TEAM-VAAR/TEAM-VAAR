import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap'


class ShowReviewPage extends Component {
    render() {

        let { review } = this.props

        return (
            <>
                <div>
                    {review && 
                        <Card id={review.id}>
                            <CardBody>
                                <CardTitle>{review.title}</CardTitle>
                                <CardText>
                                    <span>{review.review_text}</span>
                                    <br/>
                                    <span>User: {review.user_id}</span>
                                    <br/>
                                    <span>{review.date_posted}</span>
                                </CardText>
                            </CardBody>
                        </Card>
                    }
                </div>
            </>
        )
    }
}

export default ShowReviewPage