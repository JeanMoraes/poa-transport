import React from 'react';
import { Link } from 'react-router-dom';

import { Head, Brand, NavBar } from './style';

import logo from '../../assets/images/logo-poa-transport.png';

function Header(){
    return(
      <Head>
        <Brand>
          <Link to="/">
            <img src={logo} alt="Logo Poa Transport"/>
          </Link>
        </Brand>
        <NavBar>
          <Link to="/">HOME</Link>
          <Link to="/bus">LINHAS DE ÔNIBUS</Link>
          <Link to="/lotation">LINHAS DE LOTADAS</Link>
          <Link to="/info">INFO</Link>
        </NavBar>
      </Head>
    )
}

export default Header;