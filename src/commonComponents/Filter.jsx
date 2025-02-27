// import React, { useEffect, useState } from "react";
// import { Button, Modal, Form, Row, Col } from "react-bootstrap";
// import { FaFilter } from "react-icons/fa";
// import { useSelector } from "react-redux";

// const Filter = ({ getData }) => {
//   const yearList = ["2025", "2024", "2023", "2022", "2021", "2020"];
//   const monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//   const [year, setYear] = useState(new Date().getFullYear());
//   const [month, setMonth] = useState("");
//   const [show, setShow] = useState(false);
//   const {isDarkMode} = useSelector((state)=> state.auth)
//   console.log(isDarkMode)

//   // useEffect(() => {
//   //   const darkMode = localStorage.getItem("darkMode"); // Ensuring it's a boolean
//   //   setIsDarkMode(darkMode);
//   // }, []);

//   // useEffect(() => {
//   //   const handleStorageChange = () => {
//   //     const darkMode = localStorage.getItem("darkMode") ;
//   //     setIsDarkMode(darkMode);
//   //   };

//   //   window.addEventListener("storage", handleStorageChange);

//   //   // Clean up listener on component unmount
//   //   return () => {
//   //     window.removeEventListener("storage", handleStorageChange);
//   //   };
//   // }, []);

//   useEffect(() => {
//     getData(year, month);
//   }, [year, month, getData]);

//   const handleClear = () => {
//     setYear(new Date().getFullYear());
//     setMonth("");
//     setShow(false);
//   };

//   return (
//     <>
//       <div className="d-flex justify-content-end mb-1 mt-2">
//         <Button
//           variant=""
//           style={{
//             border: "1px solid #ccc",
//             backgroundColor: isDarkMode ? "#2F598C" : "#2F598C",
//             marginTop: "5px"
//           }}
//           onClick={() => setShow(true)}
//         >
//           <FaFilter style={{ fontSize: "1.5rem", color: isDarkMode ? "white" : "white", }} />
//         </Button>
//       </div>

//       <Modal show={show} onHide={() => setShow(false)} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Select Filter</Modal.Title>
//         </Modal.Header>

//         <Modal.Body>
//           <Row className="mb-3">
//             <Col md={6}>
//               <Form.Group>
//                 <Form.Label>Year</Form.Label>
//                 <Form.Select value={year} onChange={(e) => setYear(e.target.value)}>
//                   {yearList.map((y) => (
//                     <option key={y} value={y}>
//                       {y}
//                     </option>
//                   ))}
//                 </Form.Select>
//               </Form.Group>
//             </Col>
//             <Col md={6}>
//               <Form.Group>
//                 <Form.Label>Month</Form.Label>
//                 <Form.Select value={month} onChange={(e) => setMonth(e.target.value)}>
//                   <option value="">Select Month</option>
//                   {monthList.map((m) => (
//                     <option key={m} value={m}>
//                       {m}
//                     </option>
//                   ))}
//                 </Form.Select>
//               </Form.Group>
//             </Col>
//           </Row>
//         </Modal.Body>

//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClear}>
//             Clear
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default Filter;

import React, { useEffect, useState } from "react";
import { Button, Modal, Form, Row, Col } from "react-bootstrap";
import { FaFilter } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Backgroundcolor } from "../layouts/switcher/switcherdata";

const Filter = ({ getData }) => {
  const yearList = ["2025", "2024", "2023", "2022", "2021", "2020"];
  const monthList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState("");
  const [show, setShow] = useState(false);
  const { isDarkMode } = useSelector((state) => state.auth);
  console.log(isDarkMode);

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
      <div className="row mb-4 d-flex justify-content-end">
  {/* ALL Years Button */}
  <div className="col-lg-2 col-xl-1 col-md-2 col-4 p-1">
    <button
      className="btn btn-light w-100"
      style={{
        background: "white",
        color: "black",
        transition: "all 0.3s ease-in-out",
      }}
      onMouseEnter={(e) => {
        e.target.style.background =
          "linear-gradient(to bottom right, #26B5DD, #215E8A)";
        e.target.style.color = "white";
      }}
      onMouseLeave={(e) => {
        e.target.style.background = "white";
        e.target.style.color = "black";
      }}
    >
      ALL Years
    </button>
  </div>

  {/* Year Dropdown */}
  <div className="col-lg-2 col-xl-1 col-md-2 col-4 p-1">
    <select
      className="form-select"
      id="yearSelect"
      value={year}
      onChange={(e) =>
        setYear(e.target.value)
        // handleYearInputChange(e, e.target.value, "", "year")
      }
    >
      <option value={new Date().getFullYear()}>Select Year</option>
      {yearList?.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  </div>

  {/* Month Dropdown */}
  <div className="col-lg-2 col-xl-1 col-md-2 col-4 p-1">
    <select
      className="form-select"
      id="monthSelect"
      value={month}
      onChange={(e) =>
        setMonth(e.target.value)
        // handleMonthInputChange(e, e.target.value, "", "month")
      }
    >
      <option value="">Select Month</option>
      {monthList?.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  </div>
</div>


      {/* <Modal show={show} onHide={() => setShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Select Filter</Modal.Title>
        </Modal.Header>

        <Modal.Body> */}
      {/* </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClear}>
            Clear
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
};

export default Filter;
