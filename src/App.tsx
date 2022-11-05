import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <body>
        <Container>
          <Row>
            <Col xs={12}>
              <h1 style={{ fontWeight: "bold" }}>Mint your NFT Dragon</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={1}></Col>
            <Col xs={10}>
              <h2>For the ripped Santa Event: Get fit for Christmas</h2>
            </Col>
            <Col xs={1}></Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Card style={{ width: "100%" }}>
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/premium-photo/dragon-egg-fantasy-illustration_691560-289.jpg?w=2000"
                  height="50%"
                />
                <Card.Body>
                  <Row>
                    <Col xs={6}>
                      <Card.Title style={{ fontSize: "30px" }}>
                        Price
                      </Card.Title>
                      <Card.Text>13.37 Testnet-ETH</Card.Text>
                    </Col>
                    <Col xs={6}>
                      <Card.Title style={{ fontSize: "30px" }}>
                        Remaining
                      </Card.Title>
                      <Card.Text>87/100 Eggs</Card.Text>
                    </Col>
                  </Row>
                  <Row className="mt-2">
                    <Button>Get your NFT now!</Button>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 style={{ fontWeight: "bold" }}>Which dragon will you get?</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={4}>
              <Image
                rounded
                fluid
                src="https://media.printables.com/media/prints/213831/images/1956436_e69b1762-f730-4b43-9e78-927da571b441/thumbs/cover/1280x960/jpg/large_display_resize-00000img-00000-burst20190508.webp"
              ></Image>
            </Col>
            <Col xs={4}>
              <Image
                rounded
                fluid
                src="https://media.printables.com/media/prints/213831/images/1956436_e69b1762-f730-4b43-9e78-927da571b441/thumbs/cover/1280x960/jpg/large_display_resize-00000img-00000-burst20190508.webp"
              ></Image>
            </Col>
            <Col xs={4}>
              <Image
                rounded
                fluid
                src="https://media.printables.com/media/prints/213831/images/1956436_e69b1762-f730-4b43-9e78-927da571b441/thumbs/cover/1280x960/jpg/large_display_resize-00000img-00000-burst20190508.webp"
              ></Image>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 style={{ fontWeight: "bold" }}>
                Create your Egg and find out. Improve your luck on Launch!
              </h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Dragons created during this event will give you a better change
                of receiving NFTs and other rewards when we launc on the
                main-net.
              </p>
              <p>Only 100 mints in total are possible on this event.</p>
            </Col>
          </Row>
        </Container>
      </body>
    </div>
  );
}

export default App;
