import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap'


class ShowSchoolPage extends Component {
    render() {

        console.log(this.props.school)
        let { school } = this.props

        return (
            <>
            <div>
                {school && 
                    <Card id={school.id}>
                        <CardBody>
                            <CardTitle>{school.name}</CardTitle>
                            <CardText>{school.id}</CardText>
                        </CardBody>
                    </Card>
                }
            </div>
            </>
        )
    }
}

export default ShowSchoolPage