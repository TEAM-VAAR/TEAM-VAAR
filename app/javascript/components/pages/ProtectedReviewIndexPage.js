import React, { Component } from 'react'
import { Card, CardBody, CardTitle, CardText, Button, Row  } from 'reactstrap';
import { Nav, NavItem } from 'reactstrap'

class ProtectedReviewIndexPage extends Component {
    render() {
        

        if(this.props.isLoading === true) {
            return(
                <>
                <h1>Loading</h1>
                </>
            )
        } else if(this.props.isLoading === false) {
            return(
                <>
                <h1>Unable to load</h1>
                </>
            )
        } else if(this.props.isLoading === "done") {
            return(
                <>
                <h1>My Reviews</h1>
                {this.props.review &&
                    <div>
                        <Row sm="3">
                            {this.props.review && this.props.review.map(review => {
                                return(
                                    <Card key={review.id}>
                                            <CardBody>
                                                <CardTitle>{review.title}</CardTitle>
                                                <CardText>{review.review_text}</CardText>
                                                <CardText>User ID: {review.user_id}</CardText>
                                                <CardText>School ID: {review.school_id}</CardText>
                                                <Button>Update</Button>
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
}

export default ProtectedReviewIndexPage