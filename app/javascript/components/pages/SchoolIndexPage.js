import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardLink,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import './schools.style.css';

class SchoolIndexPage extends Component {
  render() {
    let { schools } = this.props;

    return (
      <>
        <h3>Explore the Schools</h3>
        <div className='video-wrapper'>
          <img src='https://media.nature.com/lw800/magazine-assets/d41586-019-00653-5/d41586-019-00653-5_16459152.jpg' />
          <div className='schools'>
            {schools &&
              schools.map((school) => {
                return (
                  <Card key={school.id} className='school'>
                    <CardBody>
                      <CardTitle tag='h5'>{school.name}</CardTitle>
                      <CardText>
                        <>School ID</>: {school.id} <br />
                      </CardText>
                    </CardBody>
                    <CardBody>
                      <Link to={`/schoolshow/${school.id}`}>View profile</Link>
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
export default SchoolIndexPage;
