import React, { Component } from "react";

import './HomePage.style.css';

class HomePage extends Component {
  render() {
    const video_url = "https://drive.google.com/uc?export=download&id=1qfrNDkXFHYCXtzd9wPTCpSHFcj8FhDy6"

    return (
      <div>
        <section className='hero hero_home'>
          <div className='hero__video'>
            <video
              id='intro_video'
              src={video_url}
              controls
              autoPlay
              muted
              loop
            >
              <p>
                Your browser doesn't support HTML video. Here is a{' '}
                <a href={video_url}>link to the video</a> instead.
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
