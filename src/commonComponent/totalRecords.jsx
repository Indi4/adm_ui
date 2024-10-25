import React from 'react'
import { Badge, Button } from 'react-bootstrap'
import { Buttonsoutline } from "../components/bootstrap/badgespills/data/badgesdata";

function TotalRecords(props) {
    return (
        <React.Fragment>
            {Buttonsoutline.filter(
                (idx) => idx.color === props.color
            ).map((idx, index) => (
                <Button
                    type="button"
                    variant={idx.color}
                    className="mt-2"
                >
                    <span style={{ fontSize: "14px" }}>Total Records </span>
                    <Badge bg={idx.bg} className="ms-2">
                        {props.length}
                    </Badge>
                </Button>
            ))}
        </React.Fragment>
    )
}

export default TotalRecords
