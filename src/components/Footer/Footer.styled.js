import styled from "styled-components";

export const FooterWrapper = styled.header`
  position: fixed;
  bottom: 0;
  display: flex;
  gap: 72px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 24px;
  padding-right: 10vw;
  background-color: #471ca9;
  color: #ebd8ff;
  z-index: 1;

  @media screen and (max-width: 768px) {
    position: absolute;
    bottom: auto;
    flex-direction: column;
    gap: 24px;
    padding-top: 72px;
    text-align: center;
  }
`;

export const LogoWrapper = styled.div`
  position: absolute;
  top: 24px;
  left: 48px;
  width: 76px;
  height: 22px;
`;

export const ContactList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: end;
  color: #fff;
`;

export const ContactLinkList = styled.ul`
  display: flex;
  gap: 24px;
`;

export const Link = styled.a`
  color: #ffffffbf;
  :hover,
  :focus {
    color: #ffffff;
  }
`;