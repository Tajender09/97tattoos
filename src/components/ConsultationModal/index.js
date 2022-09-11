import React, { useEffect, useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "styled-components/macro";
import emailjs from "@emailjs/browser";

function ConsultationModal(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [category, setCategory] = useState("");
  const [msg, setMsg] = useState(null);

  const form = useRef();

  const handleClose = () => setShow(false);

  useEffect(() => {
    setShow(props.show);
  }, [props.num]);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6ul1ow6",
        "template_28realj",
        form.current,
        "2K_orHora9exSpYr7"
      )
      .then(
        (result) => {
          setMsg("sent");
          setTimeout(()=> {
            handleClose();
            setMsg("");
          }, 5000);
        },
        (error) => {
          setMsg("not-sent");
          setTimeout(()=> {
            handleClose();
            setMsg("");
          }, 5000);
        }
      );
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Form ref={form} onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="name"
                name="name"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                css={`
                  :focus {
                    box-shadow: 0 0 0 0.25rem #a9a9a9 !important;
                    border-color: #a9a9a9 !important;
                  }
                `}
                required
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                css={`
                  :focus {
                    box-shadow: 0 0 0 0.25rem #a9a9a9 !important;
                    border-color: #a9a9a9 !important;
                  }
                `}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                type="number"
                name="phone"
                placeholder="Mobile Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                css={`
                  :focus {
                    box-shadow: 0 0 0 0.25rem #a9a9a9 !important;
                    border-color: #a9a9a9 !important;
                  }
                `}
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea4"
            >
              <Form.Label>Tattoo Category</Form.Label>
              <Form.Control
                as="select"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select Category
                </option>
                <option value="Animal Tattoo">Animal Tattoo</option>
                <option value="Couple Tattoos">Couple Tattoos</option>
                <option value="Minimal Tattoo">Minimal Tattoo</option>
                <option value="Script Tattoo">Script Tattoo</option>
                <option value="Religious Tattoo">Religious Tattoo</option>
                <option value="Armband Tattoo">Armband Tattoo</option>
                <option value="Realism Tattoo">Realism Tattoo</option>
                <option value="Travel Tattoo">Travel Tattoo</option>
                <option value="Others">Others</option>
              </Form.Control>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer className="justify-content-center">
            <Button
              className="form-control"
              variant="outline-dark"
              type="submit"
            >
              Submit
            </Button>
            {msg === "sent" ? (
              <p className="text-success fw-bold mt-4 mb-3">
                Message sent! Our team will contact you shortly.
              </p>
            ) : msg === "not-sent" ?(
              <p className="text-danger fw-bold mt-4 mb-3">
                Message not sent! Please try again in some time.
              </p>
            ) : <></>}
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default ConsultationModal;
