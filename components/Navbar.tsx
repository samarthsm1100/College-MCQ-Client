"use client";
import React, { use, useEffect } from "react";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import Router from "next/router";
import { Button } from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function NavigationBar() {
  const [isLogged, setIsLogged] = React.useState(false);
  const handleLogout = () => {
    localStorage.clear();
    setIsLogged(false);
    Router.push("/signin");
  }
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
      Router.push("/signin");
    }
  }, []);
  return (
    <Navbar className="w-full">
      <NavbarBrand>
        <Link href="/">
          <h1 className="text-2xl font-bold text-black">MCQ Test</h1>
        </Link>
      </NavbarBrand>
      <div className="right-0">
        <Button className="mx-2 bg-purple-600 rounded-sm  text-white" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </Navbar>
  );
}
