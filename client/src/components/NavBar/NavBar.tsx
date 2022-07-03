import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { Context } from '../../index';

import { SHOP_ROUTE } from '../../utils/constants';

import styles from './styles.module.css';

const NavBar: React.FC = observer(() => {
  // @ts-ignore
  const { user } = useContext(Context);

  return (
    <Navbar bg="dark" variant="dark">
      <Container className={styles.container}>
        <NavLink to={SHOP_ROUTE} className={styles.navlink}>
          Online Store
        </NavLink>
        <Nav className="ml-auto">
          {user.isAuth ? (
            <Nav className="ml-auto">
              <Button variant={'outline-light'} className={styles.btn}>
                Admin
              </Button>
              <Button variant={'outline-light'}>Login</Button>
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
