import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

export const HeroDetails = ({ heroe }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { weight, height } = heroe.appearance;
  const { aliases } = heroe.biography;
  const { base } = heroe.work;

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        More details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{heroe.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>
              <h4>Weight: {weight[1]}</h4>
              <h4>Height: {height[1]}</h4>
              <h4>Full name: {heroe.biography["full-name"]}</h4>
              <h4>
                Aliases:{" "}
                {aliases.map((i) => {
                  return <li key={i}>{i}</li>;
                })}
              </h4>
              <h4>Eye color: {heroe.appearance["eye-color"]}</h4>
              <h4>Hair color: {heroe.appearance["hair-color"]}</h4>
              <h4>WorkPlace: {base}</h4>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HeroDetails;
