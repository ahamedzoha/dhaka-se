import * as React from 'react'

import Seo from '@/components/Seo'

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
// import Vercel from '~/svg/Vercel.svg'

export default function HomePage() {
  return (
    <>
      <Seo templateTitle='Home' />

      <main>
        <div className='my-60'></div>
        <h1 className='max-w-xl text-7xl'>Track the Market</h1>
        <p className='mt-8 max-w-lg text-3xl'>
          Manage your <strong>DSE</strong> portfolio and track your investments
          in a simple and easy way.
        </p>
      </main>
    </>
  )
}
