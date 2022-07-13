import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import bigStart from '../../assets/bigStar.png';
import { fetchOneDevice } from '../../http/deviceAPI';

import styles from './styles.module.css';

const DevicePage: React.FC = () => {
  const { id } = useParams();
  const [device, setDevice] = useState<any>({ info: [] });

  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data));
  }, [id]);

  return (
    <Container>
      <Row>
        <Col md={4}>
          <Image
            width={300}
            height={300}
            src={`${process.env.REACT_APP_API_URL}/${device.img}`}
          />
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
