import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import BrandBar from '../components/BrandBar';
import TypeBar from '../components/TypeBar';
import DeviceList from '../components/DeviceList';

import { fetchDevices } from '../http/deviceAPI';
import { Context } from '..';

const Shop: React.FC = () => {
  // @ts-ignore
  const { device } = useContext(Context);

  useEffect(() => {
    fetchDevices().then((data) => device.setDevices(data.rows));
  }, []);

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
