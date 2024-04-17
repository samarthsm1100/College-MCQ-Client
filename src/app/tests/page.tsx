"use client";
import React from 'react'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
export default function TestPage() {
  return (
    <main className='grid place-content-center space-y-4 w-full'>
    <div className='text-center'>TestPage 1</div>
    <Button color='primary' variant="ghost"><Link href={`/tests/1`}>Begin Test</Link></Button>
    </main>
  )
}
