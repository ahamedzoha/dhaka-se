import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

import Seo from '@/components/Seo'

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
// import Vercel from '~/svg/Vercel.svg'
import HeroGraphDark from '~/svg/graph-dark.svg'
import HeroGraphLight from '~/svg/graph-light.svg'

export default function HomePage() {
  const [mounted, setMounted] = useState<boolean>(false)
  const { resolvedTheme } = useTheme()
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <Seo templateTitle='Home' />

      <main className=''>
        {/* Hero Container */}
        <div className='mt-20 flex w-full  flex-wrap items-center justify-center lg:mt-40'>
          {/* Text */}
          <div className='flex flex-col justify-center lg:w-6/12'>
            <h1 className='max-w-xl text-5xl md:text-7xl'>
              Track the <span className='animated-underline'>Market</span>
            </h1>
            <p className='mt-8 max-w-lg text-2xl md:text-3xl'>
              Manage your <strong>DSE</strong> portfolio and track your
              investments in a simple and easy way.
            </p>
          </div>
          {/* Graph */}
          <div className='lg:w-6/12'>
            {resolvedTheme === 'dark' ? (
              <HeroGraphDark className=' text-[24rem]  md:text-[34rem] lg:skew-y-6' />
            ) : (
              <HeroGraphLight className=' text-[24rem] md:text-[34rem] lg:skew-y-6' />
            )}
          </div>
        </div>
      </main>
    </>
  )
}
