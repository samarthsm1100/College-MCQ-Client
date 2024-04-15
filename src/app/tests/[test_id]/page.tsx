import React from 'react'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
export default function TestPage({params}:{params:{test_id:string}}) {
  return (
    <main className='grid place-content-center space-y-4 w-full'>
    <div className='text-center'>TestPage {params.test_id}</div>
    <Button color='primary' variant="ghost"><Link href={`/tests/${params.test_id}/1`}>Begin Test</Link></Button>
    </main>
  )
}
