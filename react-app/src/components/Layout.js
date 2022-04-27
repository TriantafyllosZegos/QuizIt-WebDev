import React from 'react';

import Nav from '../components/Nav'
import Body from '../components/Body'

const Layout =({children}) =>{
    return (
      <>
        <Nav></Nav>
        <Body></Body>
      </>
    );
}

export default Layout;