import React from "react";
import { Row, Col, Image } from "react-bootstrap";

import NFT1 from "../assets/img/0.jpg";
import NFT2 from "../assets/img/1.jpg";
import NFT3 from "../assets/img/2.jpg";

function Description() {
  return (
    <>
      <Row>
        <Col>
          <h2 style={{ fontWeight: "bold" }}>Which dragon will you get?</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <Image rounded fluid src={NFT1}></Image>
        </Col>
        <Col xs={4}>
          <Image rounded fluid src={NFT2}></Image>
        </Col>
        <Col xs={4}>
          <Image rounded fluid src={NFT3}></Image>
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
            Dragons created during this event will give you a better change of
            receiving NFTs and other rewards when we launc on the main-net.
            <br></br>
            Only 100 mints in total are possible on this event.
          </p>
        </Col>
      </Row>
    </>
  );
}

export default Description;
