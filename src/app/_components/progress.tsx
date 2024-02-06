'use client'

import * as React from 'react'

import { Progress } from '@/components/ui/progress'

export function ProgressDemo() {
  const [progress, setProgress] = React.useState(5)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100)
    }, 600)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return <Progress value={progress} className="w-[60%]" />
}
