import React from "react";
import styles from "./style.module.css";
import { Container, Img } from "@components/ui";
import { assets } from "@assets";
import NavList from "./NavList/NavList";
import { navData } from "@constantData/constantData";
import NavbarRight from "./NavbarRight/NavbarRight";
import useActiveLink from "@hooks/useActiveLink";

const { navbar, navbar_content, navbar_logo } = styles;

function Navbar() {
  const { activeLink, handleActiveLink } = useActiveLink("home");
  return (
    <div className={navbar}>
      <Container>
        <div className={navbar_content}>
          <Img className={navbar_logo} imgName={assets.logo} title="logo" />
          <NavList
            data={navData}
            activeLink={activeLink}
            handleActiveLink={handleActiveLink}
          />
          <NavbarRight />
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
