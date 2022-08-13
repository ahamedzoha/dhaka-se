import * as React from 'react'

import Header from '@/components/layout/Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      <Header />
      <div className=' mx-auto max-w-7xl px-4 dark:bg-black sm:px-6 lg:px-8'>
        {children}
      </div>
    </>
  )
}
