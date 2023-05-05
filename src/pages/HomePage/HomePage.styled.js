import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 60vh;
  margin-top: 48px;
  padding: 24px 200px 24px 48px;
  color: #373737;
  background-image: linear-gradient(to left, #5cd3a899 25%, #5cd3a8);
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  @media screen and (max-width: 768px) {
    width: 440px;
    padding-right: 100px;
  }

  @media screen and (max-width: 480px) {
    clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 100%);
    padding-right: 48px;
    width: 400px;
  }
`;

export const HiddenTitle = styled.h1`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`;

export const Title = styled.h2`
  margin-top: 10vh;
  font-size: 24px;
  line-height: 1.5;
  text-transform: uppercase;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.5;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const Link = styled(NavLink)`
  color: #373737;
  text-decoration-line: underline;
  :hover,
  :focus {
    font-weight: 700;
  }

  @media screen and (max-width: 768px) {
  }
`;