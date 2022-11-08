import { BytesLike } from "ethers";
import React, { useState, useEffect } from "react";

import { Row, Col, Button, Card } from "react-bootstrap";

interface mintData {
  walletInitialized: Boolean;
  curPrice: Number;
  remainingEggs: Number;
  totalEggs: Number;
}

function Minting(props: mintData) {
  const [areEggsLeft, setAreEggsLeft] = useState<Boolean>(true);

  useEffect(() => {
    if (props.remainingEggs === 0) {
      setAreEggsLeft(false);
    }
  }, [props.remainingEggs]);
  return (
    <>
      <Row>
        <Col xs={0} md={3}></Col>
        <Col xs={12} md={6}>
          <Card>
            <Card.Img
              variant="top"
              src="https://img.freepik.com/premium-photo/dragon-egg-fantasy-illustration_691560-289.jpg?w=2000"
            />
            <Card.Body>
              <Row>
                <Col
                  xs={6}
                  style={{ backgroundColor: "#fff6ed", borderRadius: "30px" }}
                >
                  <Card.Title style={{ fontSize: "30px", fontWeight: "bold" }}>
                    Price
                  </Card.Title>
                  <Card.Text style={{ fontSize: "20px" }}>
                    {String(props.curPrice) + " Testneth-ETH"}
                  </Card.Text>
                </Col>
                <Col
                  xs={6}
                  style={{ backgroundColor: "#fff6ed", borderRadius: "30px" }}
                >
                  <Card.Title style={{ fontSize: "30px", fontWeight: "bold" }}>
                    Remaining
                  </Card.Title>
                  <Card.Text style={{ fontSize: "20px" }}>
                    {String(props.remainingEggs) +
                      "/" +
                      String(props.totalEggs) +
                      " Eggs"}
                  </Card.Text>
                </Col>
              </Row>
              <Row className="mt-2">
                {areEggsLeft ? (
                  <Button variant="dark" disabled={!props.walletInitialized}>
                    {!props.walletInitialized
                      ? "Login with your wallet before minting."
                      : "Create Your Egg"}
                  </Button>
                ) : (
                  <Button variant="dark" disabled>
                    All egs are sold already!
                  </Button>
                )}
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={0} md={3}></Col>
      </Row>
    </>
  );
}

export default Minting;
