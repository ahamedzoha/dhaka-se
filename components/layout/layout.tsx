import Head from "next/head"
import React, { Fragment } from "react"
import SiteNav from "./sitenav"
import { useRouter } from "next/router"

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const { pathname } = router
  const isDashboard = pathname === "/dashboard"

  const publicRoute = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const privateRoute = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Logout", href: "/logout" },
  ]

  const isPrivateRoute = privateRoute.some((item) => item.href === pathname)
  const isPublicRoute = publicRoute.some((item) => item.href === pathname)

  return (
    <Fragment>
      <Head>
        <title>DSE Watch</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {isPrivateRoute ? null : <SiteNav />}
      {children}
    </Fragment>
  )
}
export default Layout
