"use client";
import React, { use, useEffect } from "react";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/navigation";
import { Button } from "@nextui-org/react";
import { useState } from "react";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function NavigationBar() {
  const Router = useRouter();
  const [isLogged, setIsLogged] = React.useState(false);
  
  const [showNav, setshowNav] = useState(true);
  const handleNavbar = () => {
    if( (window.location.pathname == "/signin" || window.location.pathname == "/signup")){
      setshowNav(false);
    }
    else{
      setshowNav(true);
    }
  }
  
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
  }, [Router]);
  useEffect(() => {
    handleNavbar();
  },[]
  );
  return (
    
    (showNav && <Navbar className="w-full">
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
    </Navbar>)
  );
}
