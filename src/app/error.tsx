/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { use, useEffect } from 'react'
import Link from 'next/link'

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <div>
      <h2>Ops algo deu errado!</h2>
      <div>
        <Link href="/">Voltar para página de home</Link>
      </div>
    </div>
  )
}

export default Error
