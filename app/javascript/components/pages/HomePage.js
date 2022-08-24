import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle, CardText } from "reactstrap";

class HomePage extends Component {
  render() {
    const { intro_video_url } = this.props;
    console.log("intro_video_url:", intro_video_url);

    return (
      <div>
        {/* <Card inverse> */}
          <section className="hero hero_home">
            <div className="hero__video">
              <video id="intro_video" src={intro_video_url} controls autoPlay muted loop>
                {/* <source src={intro_video_url} type="video/mp4" /> */}
                <p>
                  Your browser doesn't support HTML video. Here is a{" "}
                  <a href={intro_video_url}>link to the video</a> instead.
                </p>
              </video>
            </div>
          </section>
          {/* <CardImg
            alt="Card image cap"
            src="https://pbs.twimg.com/media/FaioV3DVEAAuy0l?format=jpg&name=large"
            style={{
              height: 900,
            }}
            width="100%"
          /> */}
        {/* </Card> */}
      </div>
    );
  }
}

export default HomePage;
