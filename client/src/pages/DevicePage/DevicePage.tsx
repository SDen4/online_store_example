import React, { useContext } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';

import { Context } from '../../index';

import bigStart from '../../assets/bigStar.png';

import styles from './styles.module.css';

const DevicePage: React.FC = () => {
  // @ts-ignore
  const { device } = useContext(Context);

  return (
    <Container>
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={device.img} />
        </Col>
        <Col md={4}>
          <Row className={styles.row}>
            <h2>{device.name}</h2>
            <div
              className={styles.rating}
              style={{
                background: `url(${bigStart}) no-repeat center center`,
              }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card className={styles.basket}>
            <h3>From {device.price} RUR.</h3>
            <Button variant={'outline-dark'}>Add to basket</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DevicePage;
