import React, { useState } from "react";
import { Modal } from "react-bootstrap"; // You may need to install 'react-bootstrap' package.

const PDFViewer = ({ show, handleClose }) => {
  // You can replace 'cv.pdf' with the actual path to your CV PDF file.
  const pdfPath = "./Noopur_Zambare.pdf";

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Curriculum Vitae</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <embed src={pdfPath} type="application/pdf" width="100%" height="500px" />
      </Modal.Body>
    </Modal>
  );
};

export default PDFViewer;
