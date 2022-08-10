import React from 'react';
import { Link } from 'react-router-dom';

function RouteTest() {
  return (
    <React.Fragment>
      <Link to={'/'}>HOME</Link>
      <br />
      <Link to={'/diary'}>DIARY</Link>
      <br />
      <Link to={'/new'}>NEW</Link>
      <br />
      <Link to={'/edit'}>EDIT</Link>
    </React.Fragment>
  );
}

export default RouteTest;
