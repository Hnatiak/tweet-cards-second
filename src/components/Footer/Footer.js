import { BsTelephone, BsGithub, BsLinkedin, BsTelegram } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { ReactComponent as LogoIcon } from "../../assets/logo.svg";
import {
  ContactLinkList,
  ContactList,
  FooterWrapper,
  Link,
  LogoWrapper,
} from "./Footer.styled";

function Footer() {
  const name = "Roman Hnatiak";
  const phoneNumber = "+33745129032";
  const email = "romanhnatiak@gmail.com";
  const githubLink = "https://github.com/Hnatiak";
  const linkedinLink = "https://www.linkedin.com/in/roman-hnatiak";
  const telegramLink = "https://t.me/gnatiakroman";

  return (
    <FooterWrapper>
      <LogoWrapper>
        <LogoIcon />
      </LogoWrapper>
      <ContactList>
        <li>© 2023 {name}</li>
        <li>
          <BsTelephone /> <Link href={`tel:${phoneNumber}`}>{phoneNumber}</Link>
        </li>
        <li>
          <FiMail /> <Link href={`mailto:${email}`}>{email}</Link>
        </li>
      </ContactList>
      <ContactLinkList>
        <li>
          <Link href={githubLink} target="_blank">
            <BsGithub size={28} />
          </Link>
        </li>
        <li>
          <Link href={linkedinLink} target="_blank">
            <BsLinkedin size={28} />
          </Link>
        </li>
        <li>
          <Link href={telegramLink} target="_blank">
            <BsTelegram size={28} />
          </Link>
        </li>
      </ContactLinkList>
    </FooterWrapper>
  );
}

export default Footer;