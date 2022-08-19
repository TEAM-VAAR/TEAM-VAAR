import React, { Component } from 'react'
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
} from "reactstrap";

class HomePage extends Component {
  render() {
    return (
      
<div>
  <Card inverse>
    <CardImg
      alt="Card image cap"
      src="https://pbs.twimg.com/media/FaioV3DVEAAuy0l?format=jpg&name=large"
      style={{
        height: 900

      }}
      width="100%"
    />
  </Card>
</div>

    )
  }
}

export default HomePage