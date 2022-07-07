import React, { memo, useContext } from 'react';
import { Card, Row } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

import { Context } from '../../index';

import styles from './styles.module.css';

const BrandBar: React.FC = observer(() => {
  // @ts-ignore
  const { device } = useContext(Context);

  return (
    <Row className={styles.component}>
      {device.brands.map((el: any) => (
        <Card
          key={el.id}
          // className={styles.card}
          className={`${
            el.id !== device.selectedBrand.id && styles.selectedCard
          } ${styles.card}`}
          onClick={() => device.setSelectedBrand(el)}
          border={el.id === device.selectedBrand.id ? 'danger' : 'light'}
        >
          {el.name}
        </Card>
      ))}
    </Row>
  );
});

export default memo(BrandBar);
