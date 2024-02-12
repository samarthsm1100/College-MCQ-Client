"use client";
import { useState } from "react";
import { Card, Input, Button } from "@nextui-org/react";
import Link from "next/link";
const Home: React.FC = () => {
  return (
    <>
      <h1 className="text-purple-600 text-5xl text-center">Welcome</h1>
      <Link href="/signin">
        <button className="bg-purple-600  font-bold py-1 px-4 mx-auto  rounded-xl ">
          <p className="font-bold text-xl">Login</p>
        </button>
      </Link>
    </>
  );
};
export default Home;
