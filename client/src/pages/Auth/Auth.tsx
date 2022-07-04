import React from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { REGISTRATION_ROUTE } from '../../utils/constants';

import styles from './styles.module.css';

const Auth = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 55 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">Authorization</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" placeholder="Enter email" />
          <Form.Control
            className="mt-3"
            type="password"
            placeholder="Enter password"
          />
        </Form>
        <div className={styles.btnsWrapper}>
          <div>
            Don't have an account?{' '}
            <NavLink to={REGISTRATION_ROUTE}>Registration</NavLink>{' '}
          </div>
          <Button variant={'outline-success'}>Auth</Button>
        </div>
      </Card>
    </Container>
  );
};

export default Auth;
