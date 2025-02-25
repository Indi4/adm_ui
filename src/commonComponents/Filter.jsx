import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { FaFilter } from "react-icons/fa";
import { useSelector } from "react-redux";

const Filter = ({ getData }) => {
  const yearList = ["2025", "2024", "2023", "2022", "2021", "2020"];
  const monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState("");
  const [show, setShow] = useState(false);
  const {isDarkMode} = useSelector((state)=> state.auth)
  console.log(isDarkMode)

  // useEffect(() => {
  //   const darkMode = localStorage.getItem("darkMode"); // Ensuring it's a boolean
  //   setIsDarkMode(darkMode);
  // }, []);

  // useEffect(() => {
  //   const handleStorageChange = () => {
  //     const darkMode = localStorage.getItem("darkMode") ;
  //     setIsDarkMode(darkMode);
  //   };
    
  //   window.addEventListener("storage", handleStorageChange);
    
  //   // Clean up listener on component unmount
  //   return () => {
  //     window.removeEventListener("storage", handleStorageChange);
  //   };
  // }, []);


  useEffect(() => {
    getData(year, month);
  }, [year, month, getData]);

  const handleClear = () => {
    setYear(new Date().getFullYear());
    setMonth("");
    setShow(false);
  };

  return (
    <>
      <div className="d-flex justify-content-end mb-3 me-3">
        <Button
          variant=""
          style={{
            border: "1px solid #ccc",
            backgroundColor: isDarkMode ? "black" : "white",
          }}
          onClick={() => setShow(true)}
        >
          <FaFilter style={{ fontSize: "1.5rem", color: isDarkMode ? "black" : "black", }} />
        </Button>
      </div>

      <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Select Filter</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group>
                <Form.Label>Year</Form.Label>
                <Form.Select value={year} onChange={(e) => setYear(e.target.value)}>
                  {yearList.map((y) => (
                    <option key={y} value={y}>
                      {y}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label>Month</Form.Label>
                <Form.Select value={month} onChange={(e) => setMonth(e.target.value)}>
                  <option value="">Select Month</option>
                  {monthList.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClear}>
            Clear
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Filter;
