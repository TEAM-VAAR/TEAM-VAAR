import React, { Component } from 'react'
import { Card, CardBody, CardTitle, CardText, Button, Row  } from 'reactstrap';
import { NavLink } from "react-router-dom";

class ProtectedReviewIndexPage extends Component {
    render() {

            return(
                <>
                <br />
        <h1 className="text-center">MY REVIEWS</h1>
        <h4 className="text-center"></h4>
        <br />
        <br />
                {this.props.review && this.props.schools &&
                    <div>
                        <Row sm="3">
                            {this.props.review && this.props.review.map(review => {
                                return(
                                    <Card className="myreviewcard" key={review.id}>
                                            <CardBody>
                                                <CardTitle>{review.title}</CardTitle>
                                                <CardText>{review.review_text}</CardText>
                                                <CardText>School ID: {review.school_id}</CardText>
                                                <NavLink to={{ pathname: `/reviewedit/${review.id}`, state: {review_id: review.id} }}>
                                                    <Button>Update</Button>
                                                </NavLink>
                                                <NavLink to={`/myreviews`}>
                                                    <Button onClick={() => this.props.deleteReview(review.id)}>Delete</Button>
                                                </NavLink>                                            
                                            </CardBody>
                                    </Card>
                                )
                            })}
                        </Row>
                    </div>
                }

                </>
            )
        }
    }


export default ProtectedReviewIndexPage