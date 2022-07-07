import React, { memo, useContext } from 'react';
import { Row } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

import { Context } from '../../index';

import DeviceItem from '../DeviceItem';

import styles from './styles.module.css';

const DeviceList: React.FC = observer(() => {
  // @ts-ignore
  const { device } = useContext(Context);

  return (
    <Row className={styles.component}>
      {device.devices.map((el: any) => (
        <DeviceItem device={el} />
      ))}
    </Row>
  );
});

export default memo(DeviceList);
