import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";
import Description from "./components/Description";
import Minting from "./components/Minting";

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
          <Minting />
          <Description />
        </Container>
      </body>
    </div>
  );
}

export default App;
