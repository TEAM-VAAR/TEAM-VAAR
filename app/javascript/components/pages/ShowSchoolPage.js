import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle, CardText, Button, Col } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'


class ShowSchoolPage extends Component {
    render() {
        let { school } = this.props
        let { review } = this.props        

        return (
            <>
                <div>
                    {school && 
                        <Card id={school.id}>
                            <CardBody>
                                <CardTitle>{school.name}</CardTitle>
                                <CardText>{school.id}</CardText>
                                <Link to={{ pathname: `/reviewnew/`, state: {school_id: school.id }}}>Write a review</Link>
                            </CardBody>
                        </Card>
                    }
                </div>

                <h3>{"School Reviews"}</h3>

                <div>
                        {review && review.map(review => { 
                            return(
                        <Card key={review.id}>
                        <CardBody>
                            <CardTitle>{review.title}</CardTitle>
                            <CardText>{review.review_text}</CardText>
                        </CardBody>
                    </Card>
                            )
                    })}
                </div>
            </>
        )
    }
}

export default ShowSchoolPage