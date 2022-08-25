import React, { Component } from 'react'
import { Card, CardBody, Col, CardTitle, CardText, Button, Row } from 'reactstrap'
import { Link } from 'react-router-dom'

class SchoolIndexPage extends Component {
  render() {
    let { schools } = this.props

    return (
        <>
         { schools && schools.map(school => {
            return(
                
                <div>
                <Card
                  
                  id={school.id}
                  className="my-2"
                  color="light"
                  outline
                  style={{
                    width: '25rem',
                    height: '15rem',
                    margin: 'auto',
                    outline: 'primary'
                  }}
                >
                  <CardTitle tag="h5">
                  {school.name}
                  </CardTitle>
                  <CardText>
                    <>School ID</>: {school.id} <br />
                  
                  </CardText>
                  <Button 
                  color="dark"
                  outline
                  >

                  <Link to={`/schoolshow/${school.id}`}>View profile</Link>
                  </Button>
                </Card>
              </div>

                
            )
        })}
        </>
    )
}

}
export default SchoolIndexPage





{/* <Col>
                    <Card id={school.id}>
                            <CardBody>
                                <CardTitle>{school.name}</CardTitle>
                                <CardText>{school.id}</CardText>
                                <Link to={`/schoolshow/${school.id}`}>View profile</Link>
                            </CardBody>
                    </Card>
                </Col> */}