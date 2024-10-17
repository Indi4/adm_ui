import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
  const notify = () => toast('Here is your toast.');
  return (
    <Fragment>
    <Button variant='success notice' className="btn btn-success notice" onClick={notify}>Success</Button>

    </Fragment>
  );
};

export default Home;
