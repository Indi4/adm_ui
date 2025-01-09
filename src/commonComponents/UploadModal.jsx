import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import {
  uploadFinanceExcel,
  uploadHrExcel,
  uploadProductionExcel,
  uploadQualityExcel,
  uploadSafetyExcel,
  uploadSalesExcel,
  uploadUtilityExcel,
} from "../store/upload/uploadSlice";
// import { uploadOtherExcel } from "../store/upload/otherUploadSlice"; // Example for another slice

const UploadComponent = ({ label }) => {
  console.log(label);
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.upload);

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);

      console.log("File to upload:", file); // Debug log
      console.log("FormData content:", formData.get("file")); // Debug log

      // Dispatch different APIs based on the label value
      let action;
      switch (label) {
        case "Upload Quality":
          action = uploadQualityExcel;
          break;
        case "Upload Utility":
          action = uploadUtilityExcel;
          break;
        case "Upload Safety":
          action = uploadSafetyExcel; 
          break;
        case "Upload Finance":
          action = uploadFinanceExcel; 
          break;
        case "Upload Production":
          action = uploadProductionExcel;
          break;
        case "Upload Sales":
          action = uploadSalesExcel; 
          break;
        case "Upload HR":
          action = uploadHrExcel; 
          break;
        default:
          toast.error("Invalid label. Cannot determine upload action.");
          return;
      }

      dispatch(action(formData))
        .unwrap()
        .then((response) => {
          toast.success(`File "${file.name}" uploaded successfully!`);
          setFile(null); // Clear file input
        })
        .catch((err) => {
          console.error("Error response:", err); // Debug log
          toast.error(`Error uploading file: ${err}`);
        });
    } else {
      toast.error("Please select a file before submitting.");
    }
  };

  return (
    <>
      <ToastContainer />
      <div
        className="upload-container"
        style={{
          padding: "20px",
          width: "80%",
          margin: "auto",
          boxShadow: "2px 2px 2px black",
          backgroundColor: "#2b7fe230",
          borderRadius: "10px",
        }}
      >
        <h5
          style={{
            textAlign: "center",
            fontSize: "2rem",
            color: "black",
            fontWeight: "bold",
          }}
        >
          Upload Excel File {label.slice(7)}
        </h5>
        <Form>
          <Form.Group controlId="formFile">
            <Form.Control
              type="file"
              accept=".xls,.xlsx"
              onChange={handleFileUpload}
            />
          </Form.Group>
          <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
            <Button
              variant="primary"
              onClick={handleSubmit}
              disabled={loading} // Disable button when loading
            >
              {loading ? "Uploading..." : "Upload"}
            </Button>
            {file && (
              <Button variant="secondary" onClick={() => setFile(null)}>
                Clear
              </Button>
            )}
          </div>
        </Form>
      </div>
    </>
  );
};

export default UploadComponent;
