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

      <main></main>
    </>
  )
}
