import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from "reactstrap";

import './HomePage.style.css';

class HomePage extends Component {
  render() {
    const { intro_video_url } = this.props;

    return (
      <div>
        <section className='hero hero_home'>
          <div className='hero__video'>
            <video
              id='intro_video'
              src={intro_video_url}
              controls
              autoPlay
              muted
              loop
            >
              <p>
                Your browser doesn't support HTML video. Here is a{' '}
                <a href={intro_video_url}>link to the video</a> instead.
              </p>
            </video>
          </div>
        </section>
        <p> See some reviews made by real students!</p>
      </div>
    );
  }
}

export default HomePage;
