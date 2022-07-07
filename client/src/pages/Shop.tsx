import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import BrandBar from '../components/BrandBar';
import TypeBar from '../components/TypeBar';
import DeviceList from '../components/DeviceList';

const Shop: React.FC = () => {
  return (
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
