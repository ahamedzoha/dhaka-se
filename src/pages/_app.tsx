import { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import '@/styles/globals.css'
import '@/styles/colors.css'

import Layout from '@/components/layout/Layout'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem={true}>
      <Layout router={router}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
