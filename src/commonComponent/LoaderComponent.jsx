import React, { useState } from 'react';
import { Card, Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoaderComponent = (props) => {
  const [loaderExpanded, setLoaderExpanded] = useState(true);
  const [loaderShow, setLoaderShow] = useState(true);

  const handleExpandClick = () => {
    setLoaderExpanded(!loaderExpanded);
  };

  if (!loaderShow) return null;

  return (
    <>
      {!props.spinner ?
        <div className="dimmer active">
          <div className="lds-hourglass"></div>
        </div>
        :
        <div className="spinner4">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      }
    </>)
};

export default LoaderComponent;
