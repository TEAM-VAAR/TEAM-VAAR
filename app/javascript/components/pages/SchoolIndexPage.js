import React, { Component } from 'react'
import { Card, CardBody, Col, CardTitle, CardText } from 'reactstrap'
import { Link } from 'react-router-dom'

class SchoolIndexPage extends Component {
  render() {
    let { schools } = this.props

    return (
        <>
        <h3>School Page</h3>

        <Link to={"/schoolnew"}>Create a new school</Link>

        { schools && schools.map(school => {
            return(
                <Col key={school.id}>
                    <Card id={school.id}>
                            <CardBody>
                                <CardTitle>{school.name}</CardTitle>
                                <CardText>{school.id}</CardText>
                                <Link to={`/schoolshow/${school.id}`}>View profile</Link>
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