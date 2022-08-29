import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardLink,
  Button,
  CardGroup
} from 'reactstrap';
import { Link } from 'react-router-dom';

import './schools-style.css';

class SchoolIndexPage extends Component {
  render() {
    let { schools } = this.props;

    return ( 
      <>
        <br />
        <h1 className="text-center">SCHOOLS</h1>
        
        <br />
        <div className='video-wrapper1'>
          <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcHCA0HBwcHBwcIBw0HBwcHBw8ICQcNFREWFhURExMYHCggGBolGxMTITEhJSkrLi4uFx8zODMsNyg5OisBCgoKDQ0NDg0NDisZFRktLSsrKysrKysrKy0rKzcrKysrKysrKysrKysrLSs3KysrKysrKys3NysrKysrLSsrK//AABEIAJ8BPgMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAABAgADB//EABgQAQEBAQEAAAAAAAAAAAAAAAABERIC/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD1QwGAYYIYBhgioBhgioBhgioBhgiooYY0MAwiECzEGZmBmZgYFgTWpAJoqqmgmpqqKCKKqpoJoqqmoJoUmgKlVSDCswMYDAJgioBhgioBioIYBioIqA0VBFQDDBFKMWhBmLAzFgDEAwIAUVQBNFUmgmpq6mgmpqqmgmpq6moJTVUUE0GigAQDEEFQwGAqGCKgGKghgKiomKgGKghgGKghgEsQZiwMxYAFAAFAEiqAJoqqmgmiqqaCamqqaCamqooJqaqpoJopooAEASzAYqCGAYqJioCoqJioCoYmKgKiomGAqKTDAUYIQJgYCzMDMzAAQAopFAVNNFAVNNFBNTVVNBNFNFBNTVVNAVNVRQTWxmAmCGAYYIqAYYIqAYYIQVDExQKhiTAXDEw6C9KNOgttTraCinW0FaNGjQVoGjQIo0aDUVrRaAorUAKKamgKKaKCaKqpoJoqqkBQQBMBgGKiYYCoqJioBikqgGNGINCCBOpIK06htBenUa2gvW1GtoL1tRraCtbU6NBWjRoA6GYAKWAUUgAmqqaAqapNAVNNFAUGgCzMCoYIYBikmAqKiYYCopMMBTAgWYgArBgBjjYA0acbAGlsOAGONgBjhwEsWAAgAK1FAUVhQFTTRQFFIAUEAYYDAMMEIEggYRDAVDEwgqKiFQFRSJVSgpsaGAMPKocBHLcumNgOfI5dcbAcuWx0sFBGBVTaAFa0UBRWooCimgAlSQFBooAEAAWBizASCBIMAwggSxgMQQJgIKlMqDoOkqp6cdPQO3R6cOm6B36HTj03QOl9C1HQ0FWptbQDUUgBQQAopACgigkVQBNCgAZgBZjAYwQwDCxAmCGAS0MBi0IM2EgllDASysGAnW042ANOtjYDFsOACcYBgUASFUUEimigEqoBNBFAA0AGasD/2Q==' />
          <div className='schools'>
            {schools &&
              schools.map((school) => {
                return (
                  <CardGroup className='schoolcardgroup'>
                  <Card key={school.id} className='school'>
                    <CardBody>
                      <CardTitle className='schooltitle' tag='h5'>{school.name}</CardTitle>
                      <CardText>
                        <>School ID</>: {school.id} <br />
                      </CardText>
                    </CardBody>
                    <CardBody>
                      <Link className="schoollink" to={`/schoolshow/${school.id}`}>SCHOOL PROFILE</Link>
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
export default SchoolIndexPage;
