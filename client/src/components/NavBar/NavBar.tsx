import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';

import { Context } from '../../index';

import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../../utils/constants';

import styles from './styles.module.css';

const NavBar: React.FC = observer(() => {
  // @ts-ignore
  const { user } = useContext(Context);
  const navigation = useNavigate();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink to={SHOP_ROUTE} className={styles.navlink}>
          Online Store
        </NavLink>
        <Nav className="ml-auto">
          {user.isAuth ? (
            <Nav className="ml-auto">
              <Button
                variant={'outline-light'}
                className={styles.btn}
                onClick={() => navigation(ADMIN_ROUTE)}
              >
                Admin
              </Button>
              <Button
                variant={'outline-light'}
                onClick={() => navigation(LOGIN_ROUTE)}
              >
                Sign Out
              </Button>
            </Nav>
          ) : (
            <Nav className="ml-auto">
              <Button
                variant={'outline-light'}
                onClick={() => user.setIsAuth(true)}
              >
                Authorization
              </Button>
            </Nav>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
});

export default NavBar;
