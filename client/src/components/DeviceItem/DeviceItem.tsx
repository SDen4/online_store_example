import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Col, Image } from 'react-bootstrap';

import star from '../../assets/star.png';

import { DeviceItemType } from './types';

import styles from './styles.module.css';
import { DEVICE_ROUTE } from '../../utils/constants';

const DeviceItem: React.FC<DeviceItemType> = ({ device }) => {
  const navigation = useNavigate();

  return (
    <Col
      className={styles.component}
      onClick={() => navigation(`${DEVICE_ROUTE}/${device.id}`)}
    >
      <Card className={styles.card} border={'light'}>
        <Image
          width={150}
          height={150}
          src={`${process.env.REACT_APP_API_URL}/${device.img}`}
        />
        <div className={styles.cardContent}>
          <h6>Samsumg</h6>
          <div className={styles.rating}>
            <div>{device.rating}</div>
            <Image src={star} />
          </div>
        </div>
        <h6>{device.name}</h6>
      </Card>
    </Col>
  );
};

export default memo(DeviceItem);
