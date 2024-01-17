"use client";
import Image from 'next/image'
import { Button, NextUIProvider } from '@nextui-org/react'
export default function Home() {
  return (
    <NextUIProvider>
      <Button color='danger'>
        Button
      </Button>
    </NextUIProvider>
  )
}
