import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface IModalData {
  handleHide: () => void;
  show: boolean;
}

function ErrorModal(props: IModalData) {
  return (
    <Modal
      {...props}
      size="lg"
      centered
    >
      <Modal.Header>
        An error occured
      </Modal.Header>
      <Modal.Body>
          An error occured during minting. Is it possible that you don't have enough Arbitrum Ether?
          Or is the test net temporarily down?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleHide}>
          Pity!
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ErrorModal;
