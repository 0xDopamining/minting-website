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

// window.webkit not recognized by default.
declare global {
  interface Window { webkit: any; }
}

const Minting = (props: IMintData) => {
  const [eggsLeft, setEggsLeft] = useState<bigint>(0n);
  const [isMinting, setMinting] = useState<boolean>(false);
  const [modalShow, setModalShow] = useState<boolean>(false);

  async function executeMint() {
    setModalShow(false);
    setMinting(true);

    const success = await mintNFT();
    if (success) {
      setMinting(false);
      
      // Send message to app that minting is done
      if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.iOS) {
            window.webkit.messageHandlers.iOS.postMessage({
                "message": "mint:success"
            });
        }
    } else {
      alert("An error occured.");
      setMinting(false);
    }
  }

  useEffect(() => {
    setEggsLeft(props.remainingEggs);
  }, [props.remainingEggs]);

  return (
    <>
      <ConfirmationModal
        handleHide={() => setModalShow(false)}
        handleConfirm={() => executeMint()} 
        fmtPrice={props.fmtPrice}
        show={modalShow} />
      <Row>
        <Col xs={{span: 12}} md={{offset: 3, span: 6}}>
          <DragonCard {...props} 
            areEggsLeft={eggsLeft > 0n} 
            isMinting={isMinting} 
            onMint={() => setModalShow(true)} />
        </Col>
      </Row>
    </>
  );
}

export default Minting;
