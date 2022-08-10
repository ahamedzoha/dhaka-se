import { AppProps } from 'next/app'

import '@/styles/globals.css'
import '@/styles/colors.css'

import Layout from '@/components/layout/Layout'

import ThemeContextProvider from '@/contexts/theme-context'

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeContextProvider>
  )
}

export default MyApp
