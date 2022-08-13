import { motion } from 'framer-motion'
import { AppProps } from 'next/app'
import React from 'react'

import Header from '@/components/layout/Header'

type LayoutProps = {
  children: React.ReactNode
  router: AppProps['router']
}

export default function Layout({ children, router }: LayoutProps) {
  // Put Header or Footer Here
  return (
    <>
      <Header />
      <motion.div
        key={router.route}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className=' mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'
      >
        {children}
      </motion.div>
    </>
  )
}
