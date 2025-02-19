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
  uploadToolExcel,
  uploadStoreExcel,
  UploadMaintenance,
  UploadPPC
} from "../store/upload/uploadSlice";

const UploadComponent = ({ label }) => {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.upload);

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = () => {
    if (file) {
      if (file.name.split(".")[0] !== label.slice(7)) {
        toast.error(`Please Upload proper ${label.slice(7)} file`);
        return;
      }
      const formData = new FormData();
      formData.append("file", file);

      // Dispatch different APIs based on the label value
      let action;
      switch (label) {
        case "Upload Quality":
          action = uploadQualityExcel;
          break;
        case "Upload PPC":
          action = UploadPPC;
          break;
        case "Upload Safety":
          action = uploadSafetyExcel;
          break;
        case "Upload Maintenance":
          action = UploadMaintenance;
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
        case "Upload Toolroom":
          action = uploadToolExcel;
          break;
          case "Upload Store and Purchase":
            action = uploadStoreExcel;
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
          justifyContent: "center",
          marginTop: "8rem",
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
              disabled={loading}
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
