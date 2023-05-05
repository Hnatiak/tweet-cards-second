import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  gap: 48px;
  align-items: center;
  width: 100%;
  padding: 16px 48px;
  background-color: #471ca9;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  z-index: 1;
`;

export const LogoWrapper = styled.div`
  width: 76px;
  height: 22px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 24px;
  margin-left: 24px;

  @media screen and (max-width: 480px) {
    margin-left: -24px;
  }
`;

export const Link = styled(NavLink)`
  width: 94px;
  padding: 8px;
  border-radius: 10px;
  text-align: center;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: #ebd8ff;

  &.active {
    font-weight: 700;
    color: #3737a9;
    background-color: #ebd8ff;
  }

  :hover:not(&.active) {
    background-color: #ebd8ff33;
  }
`;