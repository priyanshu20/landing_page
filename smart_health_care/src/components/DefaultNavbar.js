import { useState } from "react";

import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavLink from "@material-tailwind/react/NavLink";

import Icon from "@material-tailwind/react/Icon";
import Button from "@material-tailwind/react/Button";

export default function DefaultNavbar() {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <Navbar color="transparent" navbar>
      <NavbarContainer>
        <NavbarWrapper>
          <a href="#" target="_blank" rel="noreferrer">
            <NavbarBrand className="text-6xl">
              Smart Healtcare System
            </NavbarBrand>
          </a>
          <NavbarToggler
            onClick={() => setOpenNavbar(!openNavbar)}
            color="white"
          />
        </NavbarWrapper>

        <NavbarCollapse open={openNavbar}>
          <Nav>
            <div className="flex flex-col z-50 lg:flex-row lg:items-center">
              <NavLink
                href="#"
                target="_blank"
                rel="noreferrer"
                ripple="light"
              >
                <Icon name="home" size="2xl" />
                &nbsp;Home
              </NavLink>
              <NavLink href="/" target="_blank" rel="noreferrer" ripple="light">
                <Icon name="question_answer" size="2xl" />
                &nbsp;Consult
              </NavLink>
              <NavLink
                href="/register"
                target="_blank"
                rel="noreferrer"
                ripple="light"
              >
                <Icon name="person_add" size="2xl" />
                &nbsp;Register
              </NavLink>
              <a href="/login" target="_blank" rel="noreferrer">
                <Button
                  color="transparent"
                  className="bg-white text-black ml-4"
                  ripple="dark"
                >
                  Patient Login
                </Button>
              </a>
            </div>
          </Nav>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
}
