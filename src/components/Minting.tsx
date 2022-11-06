import React from "react";

import { Row, Col, Button, Card } from "react-bootstrap";

function Minting() {
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
                    3.37 Testnet-ETH
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
                    87/100 Eggs
                  </Card.Text>
                </Col>
              </Row>
              <Row className="mt-2">
                <Button variant="dark">Create Egg</Button>
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
