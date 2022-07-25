import Head from "next/head"
import React, { Fragment } from "react"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <Head>
        <title>DSE Watch</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </Fragment>
  )
}
export default Layout
