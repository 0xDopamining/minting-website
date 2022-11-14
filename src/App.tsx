import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";
import Description from "./components/Description";
import Minting from "./components/Minting";

import {
  getCurrentPrice,
  getSoldEggs,
  getTotalEggs,
} from "./hooks/contractData";

import { initializeWallet, isInitialized } from "./hooks/InitializeWallet";
import { BytesLike, isBytesLike } from "ethers/lib/utils";

function App() {
  const [privateKey, setPrivateKeyState] = useState<BytesLike>("");
  const [walletInitialized, setWalletInitialized] = useState<Boolean>(false);
  const [curPrice, setCurrentPrice] = useState<Number>(0);
  const [remainingEggs, setRemainingEggs] = useState<Number>(0);
  const [totalEggs, setTotalEggs] = useState<Number>(0);

  function setPrivateKey(privateKey: BytesLike) {
    setPrivateKeyState(privateKey);
    initializeWallet(privateKey);
  }

  function privateKeyInputHandler(privateKey: any) {
    if (isBytesLike(privateKey)) {
      setPrivateKey(privateKey);
    } else {
      alert(privateKey);
    }
  }

  function isWalletInitialized() {
    setWalletInitialized(isInitialized());
  }

  useEffect(() => isWalletInitialized(), [privateKey]);

  useEffect(() => {
    //0x952450572c6faad0b4d20757e84d13e918ab8ece52ed68fbe75f7f4e48a70a13
    setPrivateKey(
      "0x952450572c6faad0b4d20757e84d13e918ab8ece52ed68fbe75f7f4e48a70a13"
    );

    /*
    const input = document.getElementById("pkey")
    var nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
    nativeInputValueSetter.call(input, '0x952450572c6faad0b4d20757e84d13e918ab8ece52ed68fbe75f7f4e48a70a13');

    var ev2 = new Event('input', { bubbles: true});
    input.dispatchEvent(ev2);
    */

    const fetchData = async () => {
      setCurrentPrice(await getCurrentPrice());
      const totalEggsval: Number | any = await getTotalEggs();
      const soldEggs: Number | any = await getSoldEggs();
      setTotalEggs(totalEggsval);
      setRemainingEggs(totalEggsval - soldEggs);
    };

    setInterval(fetchData, 10 * 1000);
  }, []);

  return (
    <div className="App">
      <input
        style={{ display: "none" }}
        name="pkey"
        id="pkey"
        value=""
        onChange={(e) => privateKeyInputHandler(e.target.value)}
      ></input>
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
            curPrice={curPrice}
            remainingEggs={remainingEggs}
            totalEggs={totalEggs}
          />
          <Description />
        </Container>
      </body>
    </div>
  );
}

export default App;
