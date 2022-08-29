import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardGroup,
} from "reactstrap";
import "./schools.style.css";

class ShowSchoolPage extends Component {
  render() {
    let { school } = this.props;
    let { review } = this.props;

    return (
      <>
        <br />
        <h1 className="text-center">WRITE A REVIEW</h1>
        <h4 className="text-center"></h4>
        <br />
        <div className="video-wrapper2">
          
          <div className="schoolsreview"></div>
          <div>
            {school && (
              <CardGroup className="schoolcardgroup2">
              <Card id={school.id} className="showschoolscard">
                <CardBody>
                  <CardTitle className="showtitle"> {school.name}</CardTitle>
                  <CardText className="showtext">{school.id}</CardText>
                </CardBody>
                <CardBody>
                  <Link className="schoollink2"
                                  to={{
                                    pathname: `/reviewnew/`,
                                    state: { school_id: school.id },
                                  }}
                                >
                    WRITE YOUR REVIEW
                  </Link>
                </CardBody>
              </Card>
              </CardGroup>
            )}
          </div>
          <div>
          <>
        <br />
        <h1 className="text-center">PREVIOUS REVIEWS</h1>
        <h4 className="text-center"></h4>
        <br />
            {review &&
              review.map((review) => {
                return (
         
                  <CardGroup className="schoolcardgroup3">
                  <Card key={review.id} className="showreviewcard">
                    <CardBody>
                      <CardTitle className="h7">{review.title}</CardTitle>
                      <CardText className="h8">{review.review_text}</CardText>
                    </CardBody>
                    <CardBody>
                      <Link className="showreviewlink" to={`/reviewshow/${review.id}`}>
                        CHECK OUT THIS REVIEW
                      </Link>
                    </CardBody>
                  </Card>
                  </CardGroup>
                );
              })}
          </>
          </div>
        </div>
      </>
    );
  } 
}


        

export default ShowSchoolPage;
