import React, { useState, useEffect } from "react";

import { Row, Col } from "react-bootstrap";
import { mintNFT } from "../hooks/mintNFT";
import ConfirmationModal from "./ConfirmationModal";
import { DragonCard } from "./DragonCard";

export interface IMintData {
  walletInitialized: boolean;
  fmtPrice: number;
  remainingEggs: bigint;
  totalEggs: bigint;
}

function Minting(props: IMintData) {
  const [eggsLeft, setEggsLeft] = useState<bigint>(0n);
  const [isMinting, setMinting] = useState<boolean>(false);
  const [modalShow, setModalShow] = useState<boolean>(false);

  async function executeMint() {
    setModalShow(false);
    setMinting(true);
    let res = await mintNFT(props.fmtPrice);
    if (res) {
      alert("Successful mint");
      setMinting(false);
    } else {
      alert("There was an error");
      setMinting(false);
    }
  }

  useEffect(() => {
    setEggsLeft(props.totalEggs);
  }, [props.remainingEggs, props.totalEggs]);

  return (
    <>
      <ConfirmationModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        onConfirm={executeMint} />
      <Row>
        <Col xs={12} md={6}>
          <DragonCard {...props} 
            areEggsLeft={eggsLeft > 0n} 
            isMinting={isMinting} 
            onMint={() => setModalShow(true)} />
        </Col>
        <Col xs={0} md={3}></Col>
      </Row>
    </>
  );
}

export default Minting;
