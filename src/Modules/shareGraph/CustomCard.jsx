import React from "react";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { InfoCircle } from "react-bootstrap-icons";

const CustomCard = ({ 
  title, 
  tooltipMessage, 
  children, 
  className = "overflow-hidden", 
  style = { height: "100%" } 
}) => {
  return (
    <Card 
    className={className} style={style}
    >
      <Card.Header className="border-bottom d-flex align-items-center justify-content-between ">
        {title&&<Card.Title className="mb-0" style={{ fontWeight: "bold", fontSize: "1.3rem", marginRight: "12px" }}>
          {title}
        </Card.Title>}

        {/* Info Icon with Tooltip */}
        {tooltipMessage && (
          <OverlayTrigger placement="top" overlay={<Tooltip>{tooltipMessage}</Tooltip>}>
            <InfoCircle
              size={18}
              style={{ cursor: "pointer", color: "#0D47A1", marginLeft: "12px" }} // Dark Blue
            />
          </OverlayTrigger>
        )}
      </Card.Header>

     {children&& <Card.Body className="p-0">
        {children} 
      </Card.Body>}
    </Card>
  );
};

export default CustomCard;
