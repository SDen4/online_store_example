import React, { memo } from 'react';
import { Card, Col, Image } from 'react-bootstrap';

import star from '../../assets/star.png';

import { DeviceItemType } from './types';

import styles from './styles.module.css';

const DeviceItem: React.FC<DeviceItemType> = ({ device }) => {
  return (
    <Col className={styles.component}>
      <Card className={styles.card} border={'light'}>
        <Image width={150} height={150} src={device.img} />
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
