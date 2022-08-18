import React, { Component } from 'react'
import { Card, CardBody, Col, CardTitle, CardText } from 'reactstrap'

class SchoolIndexPage extends Component {
  render() {
    let { schools } = this.props

    return (
        <>
        <h3>School Page</h3>

        { schools && schools.map(school => {
            return(
                <Col>
                    <Card id={school.id}>
                            <CardBody>
                                <CardTitle>{school.name}</CardTitle>
                                <CardText>{school.id}</CardText>
                            </CardBody>
                    </Card>
                </Col>
            )
        })}
        </>
    )
}

}
export default SchoolIndexPage