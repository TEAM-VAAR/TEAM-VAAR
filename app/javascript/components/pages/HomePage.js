import React, { Component } from "react";
import {
  UncontrolledCarousel,
  Card,
  CardGroup,
  CardImg,
  CardBody,
  CardTitle,
  Button,
  CardSubtitle,
} from "reactstrap";
import "./schools.style.css";

class HomePage extends Component {
  render() {
    return (
      <>
        <br />

            <div className="img-center">
              <img src="https://pbs.twimg.com/media/FbVbusxXgAAD5aY?format=jpg&name=medium" />
            </div>
        
        

        <div>
          <UncontrolledCarousel
            items={[
              {
                key: 1,
                src: "https://pbs.twimg.com/media/FbTBzqOXEAE8Yzh?format=jpg&name=medium",
              },
              {
                key: 2,
                src: "https://pbs.twimg.com/media/FbTB3tqWQAkZpAb?format=jpg&name=medium",
              },
              {
                key: 3,
                src: "https://pbs.twimg.com/media/FbTB9b2XkAIfEaC?format=jpg&name=medium",
              },
              {
                key: 4,
                src: "https://pbs.twimg.com/media/FbTDWDjX0AErDfc?format=jpg&name=medium",
              },
              {
                key: 5,
                src: "https://pbs.twimg.com/media/FbTDTQxWIAI1YHX?format=jpg&name=medium",
              },
            ]}
          />

          <>
            <div>
              
              
              
              
            </div>
            <div className="text-center">
              <img src="https://pbs.twimg.com/media/FbVgrRlXwAA-I6E?format=jpg&name=medium" />
            </div>
            <div className="text-center">
              <CardGroup>
                <Card className='cardimghome'
                  >
                  <br />
                  <br />
                  <br />
                  <br />
                  <CardImg
                    
                    top
                    width="100%"
                    src="https://pbs.twimg.com/media/FbTAH4gXgAABo0O?format=jpg&name=medium"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">CHECK OUT REVIEWS FOR OUR TRUSTED SCHOOLS</CardTitle>
                    <br />
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                    
                    </CardSubtitle>
                    <Button>REVIEWS</Button>
                  </CardBody>
                </Card>
                <Card className='cardimghome'>
                  <UncontrolledCarousel
                    items={[
                      {
                        
                        key: 1,
                        src: "https://pbs.twimg.com/media/FbTItTrXkAAVpaz?format=jpg&name=large",
                      },
                      {
                        
                        key: 2,
                        src: "https://pbs.twimg.com/media/FbTKArDWIAE1Se2?format=jpg&name=large",
                      },
                      {
                        
                        key: 3,
                        src: "https://pbs.twimg.com/media/FbTJ99HWIAAu5VL?format=jpg&name=large",
                      },
                      {

                      
                        key: 4,
                        src: "https://pbs.twimg.com/media/FbTJ7iIWAAATJiw?format=jpg&name=large",
                      },
                    ]}
                  />
                  <CardBody>
                    <CardImg
                      top
                      width="100%"
                      src="https://pbs.twimg.com/media/FbS70f5WQAIXM9Y?format=jpg&name=medium"
                      alt="Card image cap"
                    />
                    
                  </CardBody>
                </Card>
              </CardGroup>
            </div>
          </>
        </div>
      </>
    );
  }
}
export default HomePage;
