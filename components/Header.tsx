import styled from "styled-components";
import Image from "next/image";
import Column from "./Column";
import Grid from "./Grid";
import Navigation from "./Navigation";
import FacebookIcon from "./icons/Facebook";
import InstagramIcon from "./icons/InstagramIcon";

const StyledHeader = styled.header`
  padding: 2rem 0;
  img {
    height: auto;
    margin: 0 auto;
  }
  @media screen and (max-width: 1280px) {
    padding: 1rem;
  }
`;

const NavAndIcons = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 420px) {
    flex-direction: column;
    width: 100%;
  }
`;

const SocialMediaIcons = styled.div`
  margin-left: 1rem;
  display: flex;
  border-left: 1px solid #eee;
  padding-left: 1rem;
  a {
    margin-left: 1rem;
  }
  @media screen and (max-width: 420px) {
    margin-left: 0;
    padding-left: 0;
    margin-top: 1rem;
    a:first-of-type {
      margin-left: 0;
    }
  }
`;

// const menuItems = [
//   { path: "/", title: "Hem" },
//   { path: "/about", title: "Om oss" },
//   { path: "/coworkers", title: "Medarbetare" },
//   { path: "/contact", title: "Kontakt" },
// ];

const Header = ({ links = [] }) => {
  return (
    <StyledHeader>
      <Grid spacing="small">
        <Column lg="3" md="3" sm="3" xs="12">
          <Image
            src="/images/logo.jpg"
            alt="Nordic Trax"
            width="311"
            height="65"
          />
        </Column>
        <Column
          lg="9"
          md="9"
          sm="9"
          xs="12"
          alignItems="flex-end"
          justifyContent="center"
          flexDirection="row"
        >
          <NavAndIcons>
            <Navigation menuItems={links} />
            <SocialMediaIcons>
              <a href="https://www.facebook.com/NordicTraxAB" target="_blank">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/nordictraxab/" target="_blank">
                <InstagramIcon />
              </a>
            </SocialMediaIcons>
          </NavAndIcons>
        </Column>
      </Grid>
    </StyledHeader>
  );
};

export default Header;
