import React from "react";
import { Row, Col } from "react-bootstrap";

const Description = () => {
  return (
    <Row className="my-4">
      <Col>
        <small>
          <b>Disclaimer:</b> Dragons created during this event will only live on the testnet.
          Meaning, you won't have them after the beta is closed. They give you, however, a better chance of
          receiving NFTs and other rewards when we launch on mainnet.
        </small>
      </Col>
    </Row>
  );
}

export default Description;
