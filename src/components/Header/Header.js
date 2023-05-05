import { ReactComponent as LogoIcon } from "../../assets/logo.svg";
import { HeaderWrapper, Link, LogoWrapper, Nav } from "./Header.styled";

function Header() {
  return (
    <HeaderWrapper>
      <LogoWrapper>
        <LogoIcon />
      </LogoWrapper>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/tweets">Tweets</Link>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;