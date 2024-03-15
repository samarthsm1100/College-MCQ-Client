import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function App() {
  return (
    <Navbar isBordered isBlurred={false} className="mb-2">
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">MCQ Problem Setter</p>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/ps/domain">
            Domain
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" >
            Create Slot
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Active Slots
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            All Slots
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Leaderboard
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="secondary" href="#" variant="flat" className="text-lg font-semibold">
            Logout
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
