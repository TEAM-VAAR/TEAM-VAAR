import React, { Component } from 'react'
import { Card, CardBody, Col, CardTitle, CardText } from 'reactstrap'
import { Link } from 'react-router-dom'

import './schools.style.css';

class ReviewIndexPage extends Component {
  render() {
    let { reviews } = this.props;

    return (
      <>
        <h3>Review Page</h3>
        <div className='video-wrapper'>
          <img src='https://media.nature.com/lw800/magazine-assets/d41586-019-00653-5/d41586-019-00653-5_16459152.jpg' />
          <div className='reviews'>
            {reviews &&
              reviews.map((review) => {
                return (
                  <Card key={review.id} className='review'>
                    <CardBody>
                      <CardTitle tag='h5'>{review.title}</CardTitle>
                      <CardText>{review.review_text}</CardText>
                    </CardBody>
                    <CardBody>
                      <Link to={{ pathname: `/reviewshow/${review.id}` }}>
                        Show Review
                      </Link>
                    </CardBody>
                  </Card>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default ReviewIndexPage;
