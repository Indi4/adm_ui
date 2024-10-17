import { Card, CardBody } from "reactstrap";

const TopCards = (props) => {
  return (
    <Card style={{ width: "100%", height: "80%", backgroundColor: props.bgColor || "#fff" }}>
      <CardBody className="d-flex flex-column justify-content-between">
        <div className="d-flex">
          <div className={`circle-box lg-box d-inline-block ${props.bg}`}>
            <i className={props.icon}></i>
          </div>
          <div className="ms-3">
            <h3 className="mb-0 font-weight-bold">{props.earning}</h3>
            <small className="text-muted">{props.subtitle}</small>
          </div>
        </div>
      </CardBody>
    </Card>
    // <Card style={{ width: "300px", height: "200px", backgroundColor: props.bgColor || "#fff" }}>
    //   <CardBody className="d-flex flex-column justify-content-between">
    //     {/* Top Section: Icon and Earning */}
    //     <div className="d-flex justify-content-between align-items-center">
    //       {/* Icon Section */}
    //       <div
    //         className={`circle-box lg-box d-inline-block ${props.bg}`}
    //         style={{
    //           padding: "10px",
    //           display: "flex", // Add flexbox for centering
    //           justifyContent: "center", // Center horizontally
    //           alignItems: "center", // Center vertically
    //           borderRadius: "50%", // Make it circular
    //           width: "70px", // Set width
    //           height: "70px", // Set height to make it a perfect circle
    //           backgroundColor: "#f0f0f0", // Example background color
    //         }}
    //       >
    //         <i className={props.icon} style={{ fontSize: "2rem" }}></i> {/* Adjust icon size */}
    //       </div>
    //       {/* Title and Value Section */}
    //       <div className="text-end">
    //         <h3 className="mb-0 font-weight-bold" style={{ fontSize: "2.5rem", color: "white" }}>{props.earning}</h3> {/* Earning */}
    //       </div>
    //     </div>

    //     {/* Bottom Section: Subtitle */}
    //     <div className="text-end mt-auto">
    //       <small style={{ fontSize: "17px", color: "white" }}>{props.subtitle}</small> {/* Subtitle */}
    //     </div>
    //   </CardBody>
    // </Card>
  );
};

export default TopCards;
