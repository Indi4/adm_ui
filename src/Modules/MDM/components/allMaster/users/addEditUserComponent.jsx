import React, { useEffect, useState } from "react";
import {
  Autocomplete,
  FormControl,
  Box,
  Grid,
  IconButton,
  InputLabel,
  Modal,
  TextField,
  Typography,
  Tooltip,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  callCommonUpdateAPI,
  callCommonSaveAPI,
  callCommonRefreshProps,
  callCommonGetAPI,
} from "../../../../../store/action/action";
import { connect } from "react-redux";
import {
  SAVE_USER,
  GETALL_LIST,
  UPDATE_USER,
} from "../../../../endPointConfig";
import {
  initialState,
  initialRegisterUser,
} from "../../../../DataManagement/config";
import { Button } from "react-bootstrap";
import {
  Appbtn,
  Outline,
} from "../../../../../components/bootstrap/buttons/data/buttondata";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  borderRadius: "6",
  boxShadow: "none",
  p: 4,
};

function AddEditUserComponent(props) {
  const [openModal, setOpenModal] = useState(0);
  const [endPoint, setEndPoint] = useState();
  const {
    handleAddEditOpenModal,
    openPopUp,
    type,
    rowId,
    userList,
    errorData,
    getCustomerNameUser,
    customerNameUserData,
    saveUserDetailsData,
    saveUserDetails,
    updateUserDetails,
    updateUserDetailsData,
    role,
  } = props;
  const [isSave, setIsSave] = useState(0);
  const [state, setState] = useState({ ...initialState });
  const [registerUser, setRegisterUser] = useState({ ...initialRegisterUser });
  const [errors, setErrors] = useState({ user_name: null });

  useEffect(() => {
    if (!!openPopUp) {
      getCustomerNameUser(GETALL_LIST);
      setOpenModal(openPopUp);
      if (type === "Edit") {
        if (!!userList && userList.length > 0) {
          let result = userList.filter((data) => data.id === rowId);
          if (result && result.length > 0) {
            let rowData = result[0];
            setRegisterUser(rowData);
          }
        }
      }
    } else setOpenModal(0);
  }, [openPopUp]);

  useEffect(() => {
    if (customerNameUserData && Object.keys(customerNameUserData).length > 0) {
      if (
        customerNameUserData.data &&
        Object.keys(customerNameUserData.data).length > 0
      ) {
        setRegisterUser({
          ...registerUser,
          roleList:
            customerNameUserData?.data.roles &&
            customerNameUserData?.data.roles.length > 0 &&
            customerNameUserData?.data.roles,
          departmentList:
            customerNameUserData.data.department_list &&
            customerNameUserData.data.department_list.length > 0 &&
            customerNameUserData.data.department_list,
        });
      }
    }
  }, [customerNameUserData]);

  useEffect(() => {
    if (!!isSave && Object.keys(saveUserDetailsData).length > 0) {
      setIsSave(0);
      handleClose();
      handleAddEditOpenModal(
        0,
        0,
        saveUserDetailsData.is_success,
        "",
        saveUserDetailsData.message
      );
    }
    if (!!isSave && Object.keys(updateUserDetailsData).length > 0) {
      setIsSave(0);
      handleClose();
      handleAddEditOpenModal(
        0,
        0,
        updateUserDetailsData.is_success,
        "",
        updateUserDetailsData.message
      );
    }
    if (!!isSave && Object.keys(errorData).length > 0) {
      setIsSave(0);
      handleClose();
      handleAddEditOpenModal(0, 0, 0, "", errorData.error);
    }
  }, [saveUserDetailsData, updateUserDetailsData, errorData]);

  const valdationForm = () => {
    let valid = true;
    let errors = {};

    if (!registerUser.full_name || registerUser.full_name.trim() === "") {
      errors.full_name = "Full Name is required";
      valid = false;
    }

    if (!registerUser.email || registerUser.email.trim() === "") {
      errors.email = "Email ID is required";
      valid = false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(registerUser.email)
    ) {
      errors.email = "Invalid email address";
      valid = false;
    }

    if (!registerUser.mobile_no || registerUser.mobile_no.trim() === "") {
      errors.mobile_no = "Mobile No. is required";
      valid = false;
    } else if (!/^\d{10}$/.test(registerUser.mobile_no)) {
      errors.mobile_no = "Mobile No. should be 10 digits";
      valid = false;
    }

    if (!registerUser.role || registerUser.role.trim() === "") {
      errors.role = "Role is required";
      valid = false;
    }

    if (!registerUser.department || registerUser.department === "") {
      errors.department = "Department is required";
      valid = false;
    } else {
      const selectedDepartment = registerUser.departmentList?.find(
        (dept) => dept.dept_id === registerUser.department
      );
      if (!selectedDepartment || !selectedDepartment.dept_name) {
        errors.department = "Invalid department selected";
        valid = false;
      }
    }

    setErrors(errors);
    return valid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile_no") {
      const numericValue = value.replace(/[^0-9]/g, "");
      setRegisterUser({ ...registerUser, [name]: numericValue });

      if (numericValue.length !== 10) {
        setErrors({
          ...errors,
          mobile_no: "Mobile number must be exactly 10 digits",
        });
      } else {
        setErrors({ ...errors, mobile_no: "" });
      }
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setRegisterUser({ ...registerUser, [name]: value });

      if (!emailRegex.test(value)) {
        setErrors({ ...errors, email: "Invalid email format" });
      } else {
        setErrors({ ...errors, email: "" });
      }
    } else {
      setRegisterUser({ ...registerUser, [name]: value });
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSave = () => {
    props.refreshProps("saveUserDetailsData");
    props.refreshProps("updateUserDetailsData");
    props.refreshProps("errorData");

    if (!valdationForm()) {
      return;
    }

    const payLoad = registerUser;
    payLoad.role = payLoad.role.charAt(0).toLowerCase() + payLoad.role.slice(1);
    delete payLoad.roleList;
    delete payLoad.departmentList;

    if (type === "Edit") {
      delete payLoad.department_name;
      delete payLoad.id;
      delete payLoad.is_active;
      delete payLoad.is_admin;
      delete payLoad.last_login;
      delete payLoad.password;
    }

    type === "Add"
      ? saveUserDetails(`${SAVE_USER}`, payLoad)
      : updateUserDetails(`${UPDATE_USER}${rowId}`, payLoad);
    setIsSave(1);
  };

  const handleClose = (e, reason) => {
    props.refreshProps("saveUserDetailsData");
    props.refreshProps("updateUserDetailsData");
    props.refreshProps("errorData");

    setRegisterUser({ ...initialRegisterUser });

    setErrors({});

    setOpenModal(0);

    if (reason === "cancel") {
      handleAddEditOpenModal(0, 0, 0, "", "");
    }
  };

  return (
    <>
      <Modal
        open={openModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ borderBottom: "1px solid #e0e0e0", padding: 2 }}
          >
            {type + " " + "User" || ""}
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            onClick={(event, reason) => handleClose(event, "cancel")}
            aria-label="close"
            sx={{ position: "absolute", top: 5, right: 15 }}
          >
            <CloseIcon />
          </IconButton>
          <Grid container spacing={2} style={gridContainerStyle}>
            <Grid item xs={6} >
              <InputLabel id="category-label">
                Full Name<span>*</span>
              </InputLabel>
              <TextField
                variant="outlined"
                margin="none"
                required
                fullWidth
                id="full_name"
                name="full_name"
                value={registerUser.full_name || ""}
                onChange={(e) => handleInputChange(e)}
                error={!!errors.full_name}
                helperText={errors.full_name}
              />
            </Grid>
            <Grid item xs={6} >
              <InputLabel id="category-label">
                Email Id<span>*</span>
              </InputLabel>
              <TextField
                variant="outlined"
                margin="none"
                required
                fullWidth
                id="email"
                name="email"
                value={registerUser.email || ""}
                onChange={(e) => handleInputChange(e)}
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={6} >
              <InputLabel id="category-label">
                Mobile No.<span>*</span>
              </InputLabel>
              <TextField
                variant="outlined"
                margin="none"
                required
                fullWidth
                id="mobile_no"
                name="mobile_no"
                value={registerUser.mobile_no || ""}
                onChange={(e) => handleInputChange(e)}
                error={!!errors.mobile_no}
                helperText={errors.mobile_no}
                inputProps={{ maxLength: 10 }}
              />
            </Grid>
            <Grid item xs={6} >
              <InputLabel id="category-label">Role</InputLabel>
              <FormControl fullWidth>
                <Autocomplete
                  id="roles"
                  value={
                    registerUser.role &&
                    registerUser.role.charAt(0).toUpperCase() +
                      registerUser.role.slice(1).toLowerCase()
                  }
                  options={
                    registerUser.roleList && registerUser.roleList?.length > 0
                      ? registerUser.roleList?.map(
                          (option) =>
                            option.charAt(0).toUpperCase() +
                            option.slice(1).toLowerCase()
                        )
                      : []
                  }
                  onChange={(event, newValue) => {
                    handleInputChange({
                      target: {
                        name: "role",
                        value: newValue ? newValue : "",
                      },
                    });
                  }}
                  sx={{
                    "& .MuiInputBase-input::placeholder": {
                      color: "inherit",
                      opacity: 1,
                    },
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Select"
                      variant="outlined"
                      error={!!errors.role}
                      helperText={errors.role}
                    />
                  )}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6} >
              <InputLabel id="category-label"> Department</InputLabel>
              <FormControl fullWidth>
                <Autocomplete
                  id="department"
                  value={
                    (registerUser.departmentList &&
                      registerUser.departmentList.length > 0 &&
                      registerUser.departmentList.find(
                        (el) => el.dept_id === registerUser.department
                      )) ||
                    null
                  }
                  options={
                    registerUser?.departmentList &&
                    registerUser.departmentList.length > 0
                      ? registerUser.departmentList.map((option) =>
                          option.dept_id && option.dept_name
                            ? {
                                dept_id: option.dept_id,
                                dept_name:
                                  option.dept_name.charAt(0).toUpperCase() +
                                  option.dept_name.slice(1).toLowerCase(),
                              }
                            : {}
                        )
                      : []
                  }
                  getOptionLabel={(option) => option.dept_name || ""}
                  onChange={(event, newValue) => {
                    handleInputChange({
                      target: {
                        name: "department",
                        value: newValue ? newValue.dept_id : "",
                      },
                    });
                  }}
                  sx={{
                    "& .MuiInputBase-input::placeholder": {
                      color: "inherit",
                      opacity: 1,
                    },
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      placeholder="Select"
                      variant="outlined"
                      error={!!errors.department}
                      helperText={errors.department}
                    />
                  )}
                />
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={12} style={gridItemStyle}>
            <div
              style={{
                marginTop: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
              }}
            >
              {Outline.filter((idx) => idx.color === "outline-danger").map(
                (idx, out) => (
                  <Button
                    key={out}
                    variant={idx.color}
                    onClick={(event, reason) => handleClose(event, "cancel")}
                    style={{ width: "100px", height: "30px" }}
                  >
                    Cancel
                  </Button>
                )
              )}

              {Appbtn.filter((idx) => idx.icon === "save").map((idx, ap) => (
                <Button
                  key={ap}
                  variant="secondary"
                  className="btn btn-app"
                  onClick={handleSave}
                  style={{ width: "100px", height: "30px" }}
                >
                  <i className={`me-2 fs-13 fa fa-${idx.icon}`}></i>Save
                </Button>
              ))}
            </div>
          </Grid>
        </Box>
      </Modal>
    </>
  );
}
const gridContainerStyle = {
  marginTop: 10,
};

const gridItemStyle = {
  marginBottom: 10,
};
const mapStatetoProps = (state) => {
  return {
    saveUserDetailsData: state.commonReducer.saveUserDetailsData,
    updateUserDetailsData: state.commonReducer.updateUserDetailsData,
    customerNameUserData: state.commonReducer.customerNameUserData,
    errorData: state.commonReducer.errorData,
  };
};
const mapDispatchtoProps = (dispatch) => {
  return {
    saveUserDetails: (endPoint, payLoad) =>
      dispatch(callCommonSaveAPI(endPoint, payLoad, "userDetails")),
    updateUserDetails: (endPoint, payLoad) =>
      dispatch(callCommonUpdateAPI(endPoint, payLoad, "userDetails")),
    getCustomerNameUser: (endPoint) =>
      dispatch(callCommonGetAPI(endPoint, "customerNameUser")),
    refreshProps: (title) => dispatch(callCommonRefreshProps(title)),
  };
};
export default connect(
  mapStatetoProps,
  mapDispatchtoProps
)(AddEditUserComponent);
