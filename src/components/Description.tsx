import React from "react";
import { Row, Col, Image } from "react-bootstrap";

import NFT1 from "../assets/img/0.jpg";
import NFT2 from "../assets/img/1.jpg";
import NFT3 from "../assets/img/2.jpg";

function Description() {
  return (
    <>
      <Row>
        <Col className="mt-4 mb-2">
          <h3 style={{ fontWeight: "bold" }}>Which dragon will you get?</h3>
        </Col>
      </Row>
      <Row className="mx-5">
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
      <Row className="my-4">
        <Col>
          <small>
            <b>Disclaimer:</b> Dragons created during this event will only live on the test-net.
            Meaning, you won't have them after the beta is closed. They give you, however, a better change of
            receiving NFTs and other rewards when we launch on main-net.
          </small>
        </Col>
      </Row>
    </>
  );
}

export default Description;
