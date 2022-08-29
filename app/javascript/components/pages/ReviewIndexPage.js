import React, { Component } from 'react'
import { Card, CardBody, Col, CardTitle, CardText, CardGroup } from 'reactstrap'
import { Link } from 'react-router-dom'

import './schools-style.css';

class ReviewIndexPage extends Component {
  render() {
    let { reviews } = this.props;

    return (
      <>
        <br />
        <h1 className="text-center">ALL REVIEWS</h1>
        <h4 className="text-center"></h4>
        <br />
        <br />
        <div className='video-wrapper'>
          <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcHCA0HBwcHBwcIBw0HBwcHBw8ICQcNFREWFhURExMYHCggGBolGxMTITEhJSkrLi4uFx8zODMsNyg5OisBCgoKDQ0NDg0NDisZFRktLSsrKysrKysrKy0rKzcrKysrKysrKysrKysrLSs3KysrKysrKys3NysrKysrLSsrK//AABEIAJ8BPgMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAABAgADB//EABgQAQEBAQEAAAAAAAAAAAAAAAABERIC/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD1QwGAYYIYBhgioBhgioBhgioBhgiooYY0MAwiECzEGZmBmZgYFgTWpAJoqqmgmpqqKCKKqpoJoqqmoJoUmgKlVSDCswMYDAJgioBhgioBioIYBioIqA0VBFQDDBFKMWhBmLAzFgDEAwIAUVQBNFUmgmpq6mgmpqqmgmpq6moJTVUUE0GigAQDEEFQwGAqGCKgGKghgKiomKgGKghgGKghgEsQZiwMxYAFAAFAEiqAJoqqmgmiqqaCamqqaCamqooJqaqpoJopooAEASzAYqCGAYqJioCoqJioCoYmKgKiomGAqKTDAUYIQJgYCzMDMzAAQAopFAVNNFAVNNFBNTVVNBNFNFBNTVVNAVNVRQTWxmAmCGAYYIqAYYIqAYYIQVDExQKhiTAXDEw6C9KNOgttTraCinW0FaNGjQVoGjQIo0aDUVrRaAorUAKKamgKKaKCaKqpoJoqqkBQQBMBgGKiYYCoqJioBikqgGNGINCCBOpIK06htBenUa2gvW1GtoL1tRraCtbU6NBWjRoA6GYAKWAUUgAmqqaAqapNAVNNFAUGgCzMCoYIYBikmAqKiYYCopMMBTAgWYgArBgBjjYA0acbAGlsOAGONgBjhwEsWAAgAK1FAUVhQFTTRQFFIAUEAYYDAMMEIEggYRDAVDEwgqKiFQFRSJVSgpsaGAMPKocBHLcumNgOfI5dcbAcuWx0sFBGBVTaAFa0UBRWooCimgAlSQFBooAEAAWBizASCBIMAwggSxgMQQJgIKlMqDoOkqp6cdPQO3R6cOm6B36HTj03QOl9C1HQ0FWptbQDUUgBQQAopACgigkVQBNCgAZgBZjAYwQwDCxAmCGAS0MBi0IM2EgllDASysGAnW042ANOtjYDFsOACcYBgUASFUUEimigEqoBNBFAA0AGasD/2Q==' />
          <div className='reviews'>
            {reviews &&
              reviews.map((review) => {
                return (
                  <CardGroup>
                  <Card key={review.id} className='review'>
                    <CardBody>
                      <CardTitle className='h5'>{review.title}</CardTitle>
                      <CardText className='h6'>{review.review_text}</CardText>
                    </CardBody>
                    <CardBody>
                      <Link className='reviewlink' to={{ pathname: `/reviewshow/${review.id}` }}>
                        SHOW REVIEW
                      </Link>
                    </CardBody>
                  </Card>
                  </CardGroup>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default ReviewIndexPage;
