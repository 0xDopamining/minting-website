import React, { useState, useEffect } from "react";

import { Row, Col, Button, Card, Spinner } from "react-bootstrap";
import { mintNFT } from "../hooks/mintNFT";
import ConfirmationModal from "./ConfirmationModal";

import IMG_DRAGON_EGG from "../assets/img/dragon_egg.jpg";

interface mintData {
  walletInitialized: Boolean;
  curPrice: Number;
  remainingEggs: Number;
  totalEggs: Number;
}

function Minting(props: mintData) {
  const [areEggsLeft, setAreEggsLeft] = useState<Boolean>(true);
  const [minting, setMinting] = useState<Boolean>(false);
  const [modalShow, setModalShow] = useState<boolean>(false);

  async function mintHandler() {
    setModalShow(true);
  }

  async function executeMint() {
    setModalShow(false);
    setMinting(true);
    let res = await mintNFT(props.curPrice);
    if (res) {
      alert("Successful mint");
      setMinting(false);
    } else {
      alert("There was an error");
      setMinting(false);
    }
  }

  useEffect(() => {
    setAreEggsLeft(props.remainingEggs !== 0 || props.totalEggs === 0);
  }, [props.remainingEggs, props.totalEggs]);
  return (
    <>
      <ConfirmationModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        onConfirm={executeMint}
      ></ConfirmationModal>
      <Row>
        <Col xs={0} md={3}></Col>
        <Col xs={12} md={6}>
          <Card>
            <Card.Img
              variant="top"
              src={IMG_DRAGON_EGG}
            />
            <Card.Body>
              <Row>
                <Col xs={6}>
                  <Card style={{ backgroundColor: "#fff6ed", borderRadius: "10px" }}>
                  <Card.Title style={{ fontSize: "26px", fontWeight: "bold" }}>
                    Price
                  </Card.Title>
                  <Card.Text style={{ fontSize: "18px" }}>
                    {String(props.curPrice) + " Goerli aETH"}
                  </Card.Text>
                  </Card>
                </Col>
                <Col xs={6}>
                  <Card style={{ backgroundColor: "#fff6ed", borderRadius: "10px" }}>
                  <Card.Title style={{ fontSize: "26px", fontWeight: "bold" }}>
                    Left
                  </Card.Title>
                  <Card.Text style={{ fontSize: "18px" }}>
                    {String(props.remainingEggs) +
                      " / " +
                      String(props.totalEggs) +
                      " Eggs"}
                  </Card.Text>
                  </Card>
                </Col>
              </Row>
              <Row>
                <Col className="mt-3">
                {areEggsLeft ? (
                  minting ? (
                    <Button variant="dark" size="lg" disabled>
                      Your egg is breading ...{" "}
                      <Spinner animation="border" role="status"></Spinner>
                    </Button>
                  ) : !props.walletInitialized ? (
                    <>
                      <Button variant="dark" disabled size="lg">
                        Login with your wallet before minting.
                      </Button>
                    </>
                  ) : (
                    <Button variant="dark" onClick={mintHandler} size="lg">
                      Mint your dragon egg now!
                    </Button>
                  )
                ) : (
                  <Button variant="dark" disabled size="lg">
                    All egs are sold already!
                  </Button>
                )}
                </Col>
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
