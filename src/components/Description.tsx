import React from "react";
import { Row, Col, Image } from "react-bootstrap";

import IMG_NFT1 from "../assets/img/0.jpg";
import IMG_NFT2 from "../assets/img/1.jpg";
import IMG_NFT3 from "../assets/img/2.jpg";

const Description = () => {
  return (
    <>
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
