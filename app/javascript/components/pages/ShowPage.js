import React, { Component } from 'react'
import { Card, CardImg, CardBody, Button, Col, ListGroup, ListGroupItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class ShowPage extends Component {
  render() {
    return (
        <>
        <h3>Review Page</h3>

        { this.props.reviews && this.props.reviews.map(review => {
            return(
                <Col>
                    <Card style={{width: '18rem'}} key={card.id}>
                    <CardImg top width= "100%" src={card.image} alt="Card image cap" />
                    <ListGroup flush>
                        <ListGroupItem>
                            {review.title}
                        </ListGroupItem>
                        <ListGroupItem>
                            {review.date_posted}
                        </ListGroupItem>
                        <ListGroupItem>
                            {review.review_text}
                        </ListGroupItem>
                        <ListGroupItem>
                            {review.user_id}
                        </ListGroupItem>
                        <ListGroupItem>
                            {review.school_id}
                        </ListGroupItem>
                    
                        </ListGroup>
                        <CardBody>
                        <NavLink to={`/editpage/${review.id}`}>
                            <Button>Review Details</Button>
                        </NavLink>
                        </CardBody>
                    </Card>
                </Col>
            )
        })}
        </>
    )
  }
}

export default ShowPage