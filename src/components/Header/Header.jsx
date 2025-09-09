import React from "react";
import styled from "styled-components";
import { Dialog } from "@radix-ui/react-dialog";

import { COLORS, WEIGHTS, QUERIES } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";

import Icon from "../Icon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeaderWrapper>
        <SuperHeader />
      </SuperHeaderWrapper>
      <DecorativeLine />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <MovileNav>
          <Icon id={"shopping-bag"} />
          <Icon id={"search"} />
          <Icon id={"menu"} />
        </MovileNav>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  overflow-x: auto;

  ${QUERIES.tabletAndDown} {
    align-items: center;
  }
`;

const SuperHeaderWrapper = styled.div`
  ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const DecorativeLine = styled.div`
  ${QUERIES.tabletAndDown} {
    background-color: ${COLORS.gray[900]};
    height: 4px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(16px, 20px + 3vw, 48px);
  margin: 0px 48px;

  ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const MovileNav = styled.nav`
  display: none;

  ${QUERIES.tabletAndDown} {
    display: flex;
    gap: 4vw;
    margin-left: auto;
    align-items: center;
  }
`;

const Side = styled.div`
  flex: 1;

  ${QUERIES.tabletAndDown} {
    flex-grow: 0;
    flex-shrink: 1;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
