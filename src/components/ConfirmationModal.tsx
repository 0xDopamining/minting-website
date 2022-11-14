import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface ModalData {
  onHide: () => void;
  onConfirm: () => void;
  show: boolean;
}

function ConfirmationModal(props: ModalData) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h4>You are about to mint your NFT dragon</h4>
        <p>
          Press confirm to mint your NFT dragon for <b>0.01 aETH</b> using your
          Dopamining in-app wallet.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Cancel
        </Button>
        <Button variant="success" onClick={props.onConfirm}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmationModal;
