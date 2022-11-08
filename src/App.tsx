import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";
import Description from "./components/Description";
import Minting from "./components/Minting";

import {
  getCurrentPrice,
  getRemainingEggs,
  getTotalEggs,
} from "./hooks/contractData";

import { initializeWallet, isInitialized } from "./hooks/InitializeWallet";
import { BytesLike } from "ethers";

function App() {
  const [privateKey, setPrivateKeyState] = useState<BytesLike>("");
  const [walletInitialized, setWalletInitialized] = useState<Boolean>(false);

  function setPrivateKey(privateKey: BytesLike) {
    setPrivateKeyState(privateKey);
    initializeWallet(privateKey);
  }

  function isWalletInitialized() {
    setWalletInitialized(isInitialized());
  }

  useEffect(() => isWalletInitialized(), [privateKey]);

  useEffect(() => {
    setPrivateKey(
      "0x952450572c6faad0b4d20757e84d13e918ab8ece52ed68fbe75f7f4e48a70a13"
    ); //0x952450572c6faad0b4d20757e84d13e918ab8ece52ed68fbe75f7f4e48a70a13
  }, []);

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
          <Minting
            walletInitialized={walletInitialized}
            curPrice={getCurrentPrice()}
            remainingEggs={getRemainingEggs()}
            totalEggs={getTotalEggs()}
          />
          <Description />
        </Container>
      </body>
    </div>
  );
}

export default App;
