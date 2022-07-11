import React, { useContext, useState } from 'react';
import { Button, Card, Container, Form } from 'react-bootstrap';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import { login, registration } from '../../http/userAPI';

import {
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from '../../utils/constants';

import styles from './styles.module.css';
import { Context } from '../..';

const Auth = observer(() => {
  const location = useLocation();
  const navigation = useNavigate();
  // @ts-ignore
  const { user } = useContext(Context);

  const isLogin = location.pathname === LOGIN_ROUTE;

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const click = async () => {
    try {
      let data;

      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
      }
      user.setUser(data);
      user.setIsAuth(true);
      navigation(SHOP_ROUTE);
    } catch (error: any) {
      alert(error.response.data.message);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 55 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Authorization' : 'Registration'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form>
        <div className={styles.btnsWrapper}>
          {isLogin ? (
            <div>
              Don't have an account?{' '}
              <NavLink to={REGISTRATION_ROUTE}>Registration</NavLink>{' '}
            </div>
          ) : (
            <div>
              Have an account? <NavLink to={LOGIN_ROUTE}>Login</NavLink>{' '}
            </div>
          )}
          <Button variant={'outline-success'} onClick={click}>
            {isLogin ? 'Login' : 'Registration'}
          </Button>
        </div>
      </Card>
    </Container>
  );
});

export default Auth;
