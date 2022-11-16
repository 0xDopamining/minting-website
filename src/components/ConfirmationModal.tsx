import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

interface IModalData {
  onHide: () => void;
  onConfirm: () => Promise<void>;
  show: boolean;
}

function ConfirmationModal(props: IModalData) {
  return (
    <Modal
      {...props}
      size="lg"
      centered
    >
      <Modal.Header>
        You are about to mint your dragon
      </Modal.Header>
      <Modal.Body>
          Press confirm to mint your dragon for <b>0.01 aETH</b> using your
          Dopamining in-app wallet.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Cancel
        </Button>
        <Button variant="success" onClick={() => props.onConfirm()}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ConfirmationModal;
