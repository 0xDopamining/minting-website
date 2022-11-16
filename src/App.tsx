import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";
import Description from "./components/Description";
import Minting from "./components/Minting";

import {
  getFormattedPrice,
  getSoldEggs,
  getTotalEggs,
} from "./hooks/contractData";

import { DpmWallet } from "./hooks/InitializeWallet";
import { BytesLike, isBytesLike } from "ethers/lib/utils";

function App() {
  const [privateKey, setPrivateKeyState] = useState<BytesLike>("");
  const [walletInitialized, setWalletInitialized] = useState<boolean>(false);
  // We can store it in a number, since we format the price to floating point.
  const [fmtPrice, setCurrentPrice] = useState<number>(0);
  const [remainingEggs, setRemainingEggs] = useState<bigint>(0n);
  const [totalEggs, setTotalEggs] = useState<bigint>(0n);

  function setPrivateKey(privateKey: BytesLike) {
    setPrivateKeyState(privateKey);
    DpmWallet.privateKey = privateKey;
  }

  function privateKeyInputHandler(privateKey: BytesLike) {
    if (isBytesLike(privateKey)) {
      setPrivateKey(privateKey);
    } else {
      alert(privateKey);
    }
  }

  useEffect(() => {
    setWalletInitialized(DpmWallet.initialized);
  }, [privateKey]);

  useEffect(() => {
    // Don't worry, we are well aware that this is a leaked private key.
    // It's still good enough for testing.
    // 0x952450572c6faad0b4d20757e84d13e918ab8ece52ed68fbe75f7f4e48a70a13
  
    const fetchData = async () => {
      setCurrentPrice(await getFormattedPrice());
      const totalEggsval: bigint = await getTotalEggs();
      const soldEggs: bigint = await getSoldEggs();
      setTotalEggs(totalEggsval);
      setRemainingEggs(totalEggsval - soldEggs);
    };

    fetchData()
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
        <Container>
          <Row>
            <Col xs={12}>
              <h1>Dragon Mint</h1>
            </Col>
          </Row>
          <Minting
            walletInitialized={walletInitialized}
            fmtPrice={fmtPrice}
            remainingEggs={remainingEggs}
            totalEggs={totalEggs}
          />
          <Description />
        </Container>
    </div>
  );
}

export default App;
