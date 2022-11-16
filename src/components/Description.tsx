import React from "react";
import { Row, Col, Image } from "react-bootstrap";

import IMG_NFT1 from "../assets/img/0.jpg";
import IMG_NFT2 from "../assets/img/1.jpg";
import IMG_NFT3 from "../assets/img/2.jpg";

const Description = () => {
  return (
    <>
      <Row>
        <Col className="mt-4 mb-2">
          <h3>Which dragon will you get?</h3>
        </Col>
      </Row>
      <Row className="mx-4">
        <Col>
          <Image rounded fluid src={IMG_NFT1} />
        </Col>
        <Col>
          <Image rounded fluid src={IMG_NFT2} />
        </Col>
        <Col>
          <Image rounded fluid src={IMG_NFT3} />
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
