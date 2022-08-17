import React, { Component } from 'react'
import { Card, CardImg, CardBody, Col, ListGroup, ListGroupItem } from 'reactstrap'

class IndexPage extends Component {
  render() {
    return (
        <>
        <h3>School Page</h3>

        { this.props.schools && this.props.schools.map(school => {
            return(
                <Col>
                    <Card style={{width: '18rem'}} key={card.id}>
                    <CardImg top width= "100%" src={card.image} alt="Card image cap" />
                    <ListGroup flush>
                        <ListGroupItem>
                            {school.name}
                        </ListGroupItem>
                        </ListGroup>
                        <CardBody>
                        </CardBody>
                    </Card>
                </Col>
            )
        })}
        </>
    )
}

}
export default IndexPage