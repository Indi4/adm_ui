import React, { useState } from 'react';
import { Card, Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoaderComponent = () => {
  const [loaderExpanded, setLoaderExpanded] = useState(true);
  const [loaderShow, setLoaderShow] = useState(true);

  const handleExpandClick = () => {
    setLoaderExpanded(!loaderExpanded);
  };

  if (!loaderShow) return null;

  return (
      <Card>
       
        <Collapse in={loaderExpanded} timeout={9000}>
          <Card.Body className="p-0">
            <div className="dimmer active">
              <div className="lds-hourglass"></div>
            </div>
          </Card.Body>
        </Collapse>
      </Card>
  );
};

export default LoaderComponent;
