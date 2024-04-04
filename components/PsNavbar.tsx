'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import instance from "@/api/axios";
import { useRouter } from "next/navigation";

export default function App() {

  const router = useRouter()

  const handleLogout = async() => {
    try {
      await instance({
        url: '/ps/logout',
        method: 'DELETE'
      })
      localStorage.removeItem("token");
      router.push('/ps/login')
    } catch (error) {
      console.log(error)
    }
  }


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
          <Link color="foreground" href="/ps/createSlot" >
            Create Slot
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/ps/activeSlots">
            Active Slots
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/ps/allSlots">
            All Slots
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="secondary" href="#" variant="flat" className="text-lg font-semibold" onClick={handleLogout}>
            Logout
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
