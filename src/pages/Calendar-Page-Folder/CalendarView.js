import React from 'react';
import NavbarComponent from '../Components/Navbar';
import SideMenu from './SideMenu';
import { styled } from 'styled-components';

const NavbarStyled = styled('div')`
  .kcRayQ {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.06);
    position: relative;
    z-index: 100;
  }
`;
const SideMenuStyled = styled('div')`
  .css-12i7wg6-MuiPaper-root-MuiDrawer-paper {
    z-index: 0;
    position: relative;
  }
`;
export default function CalendarView() {
  return (
    <div>
      <NavbarStyled>
        <NavbarComponent />
      </NavbarStyled>
      <SideMenuStyled>
        <SideMenu />
      </SideMenuStyled>
    </div>
  );
}
