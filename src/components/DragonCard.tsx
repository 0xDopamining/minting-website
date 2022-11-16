import React from "react";
import { Button, Card, Col, Row, Spinner } from "react-bootstrap";

import IMG_DRAGON_EGG from "../assets/img/dragon_egg.jpg";
import { IMintData } from "./Minting";
import { StatsCard } from "./StatsCard";

interface IDragonCardProps {
    onMint: () => any;
    isMinting: boolean;
    areEggsLeft: boolean;
}

export const DragonCard = (props: IMintData & IDragonCardProps) => {
    const isMintPossible = !props.isMinting && props.areEggsLeft && props.walletInitialized;

    return <Card>
            <Card.Img
              variant="top"
              src={IMG_DRAGON_EGG}
            />
            <Card.Body>
              <Row>
                <Col xs={6}>
                  <StatsCard title="Price" content={`${props.fmtPrice} Goerli aETH`} />
                </Col>
                <Col xs={6}>
                  <StatsCard title="Left" content={`${props.remainingEggs} / ${props.totalEggs} Eggs`} />
                </Col>
              </Row>
              <Row>
                <Col className="mt-3">
                    <Button 
                      variant="dark" 
                      disabled={!isMintPossible} 
                      className="w-100" 
                      onClick={props.onMint} 
                      size="lg">

                        {props.isMinting && <Spinner className="me-2" size="sm" animation="border" />}
                        <b>
                      {(() => {
                        if (props.isMinting) {
                          return  "Your egg is breading..."
                        } else if (!props.walletInitialized) {
                          return "Login with your wallet before minting."
                        } else if (props.areEggsLeft) {
                          return "Mint"
                        } else {
                          return "Minting is closed!"
                        }})()}
                        </b>
                    </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
}