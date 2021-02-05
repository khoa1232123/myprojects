import React from 'react';
import { Col, Row } from 'react-bootstrap';
import AddForm from './AddForm';
import Search from './Search';

const Actions = () => {
  return (
    <Row>
      <Col md={9}>
        <Search />
      </Col>
      <Col md={3}>
        <AddForm />
      </Col>
    </Row>
  );
};

export default Actions;
