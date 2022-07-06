import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

import { Context } from '../..';

import styles from './styles.module.css';

const TypeBar: React.FC = observer(() => {
  // @ts-ignore
  const { device } = useContext(Context);

  return (
    <ListGroup>
      {device.types.map((el: any) => (
        <ListGroup.Item
          className={`${el.id !== device.selectedType.id && styles.item}`}
          active={el.id === device.selectedType.id}
          key={el.id}
          onClick={() => device.setSelectedType(el)}
        >
          {el.name}
        </ListGroup.Item>
      ))}
      {/* <ListGroup.Item>Cras justo odio</ListGroup.Item>/// */}
    </ListGroup>
  );
});

export default TypeBar;
