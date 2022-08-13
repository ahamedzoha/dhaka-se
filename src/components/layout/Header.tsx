import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import { useTheme } from 'next-themes'
import { Fragment, useEffect, useState } from 'react'
import DarkModeToggle from 'react-dark-mode-toggle'

import clsxm from '@/lib/clsxm'

import UnstyledLink from '@/components/links/UnstyledLink'
import NextImage from '@/components/NextImage'

export default function Header() {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [mounted, setMounted] = useState<boolean>(false)
  const { resolvedTheme, setTheme } = useTheme()

  const themeToggle = () => {
    if (resolvedTheme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const guestLinks = [
    { href: '/', label: 'Home', active: router.pathname === '/' },
    { href: '/about', label: 'About', active: router.pathname === '/about' },
    {
      href: '/contact',
      label: 'Contact',
      active: router.pathname === '/contact',
    },
  ]
  // eslint-disable-next-line unused-imports/no-unused-vars
  const userLinks = [
    {
      href: '/dashboard',
      label: 'Dashboard',
      active: router.pathname === '/dashboard',
    },
    { href: '/', label: 'Home', active: router.pathname === '/' },
    { href: '/about', label: 'About', active: router.pathname === '/about' },
    {
      href: '/contact',
      label: 'Contact',
      active: router.pathname === '/contact',
    },
  ]

  const authLinks = [
    {
      href: '/profile',
      label: 'Your Profile',
      active: router.pathname === '/profile',
    },
    {
      href: '/settings',
      label: 'Settings',
      active: router.pathname === '/settings',
    },
    {
      href: '/signout',
      label: 'Sign Out',
      active: router.pathname === '/signout',
    },
  ]

  return (
    <Disclosure as='nav' className='dark:bg-black'>
      {({ open }) => (
        <>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='flex h-16 items-center justify-between'>
              <div className='flex items-center'>
                <div className='flex-shrink-0'>
                  <UnstyledLink href='/'>
                    <h4>Stock Folio</h4>
                    {/* <LogoIndigo500 className='block h-8 w-auto text-5xl lg:hidden' />
                    <LogoIndigoWhite className='hidden text-9xl lg:block' /> */}
                  </UnstyledLink>
                </div>
                <div className='hidden sm:ml-6 sm:block'>
                  <div className='flex space-x-4'>
                    {guestLinks.map((link) => (
                      <UnstyledLink
                        key={link.href}
                        href={link.href}
                        className={clsxm(
                          `rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white`,
                          link.active && 'bg-gray-900 text-white'
                        )}
                      >
                        {link.label}
                      </UnstyledLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className='hidden sm:ml-6 sm:block'>
                <div className='flex items-center space-x-3'>
                  {/* Dark Mode Toggle Button */}
                  <DarkModeToggle
                    onChange={themeToggle}
                    checked={resolvedTheme === 'dark' ? true : false}
                    size='4rem'
                  />

                  {/* Notification Button */}
                  <button
                    type='button'
                    className='
                    focus:ring-offset-none 
                    
                    rounded-full 
                    p-1 
                    text-gray-400 
                    hover:text-black 
                    focus:outline-none 
                    focus:ring-2 
                    focus:ring-gray-400
                    
                    focus:ring-offset-gray-800
                    dark:bg-gray-800 
                    dark:text-gray-400 
                    dark:hover:text-white 
                    dark:focus:ring-white 
                    dark:focus:ring-offset-gray-800
                    '
                  >
                    <span className='sr-only'>View notifications</span>
                    <BellIcon className='h-6 w-6' aria-hidden='true' />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as='div' className='relative ml-3'>
                    <div>
                      <Menu.Button className='flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'>
                        <span className='sr-only'>Open user menu</span>
                        <NextImage
                          useSkeleton
                          className='h-8 w-8'
                          imgClassName='rounded-full'
                          src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                          alt=''
                          width={48}
                          height={48}
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-100'
                      enterFrom='transform opacity-0 scale-95'
                      enterTo='transform opacity-100 scale-100'
                      leave='transition ease-in duration-75'
                      leaveFrom='transform opacity-100 scale-100'
                      leaveTo='transform opacity-0 scale-95'
                    >
                      <Menu.Items className='absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                        {authLinks.map((link) => (
                          <Menu.Item key={link.href}>
                            <UnstyledLink
                              href={link.href}
                              className={clsxm(
                                link.active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              {link.label}
                            </UnstyledLink>
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
              <div className='-mr-2 flex sm:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='space-y-1 px-2 pt-2 pb-3'>
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              {guestLinks.map((link) => (
                <Disclosure.Button
                  key={link.href}
                  as={UnstyledLink}
                  href={link.href}
                  className={clsxm(
                    'block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white',
                    link.active && 'bg-gray-900 text-white'
                  )}
                >
                  {link.label}
                </Disclosure.Button>
              ))}
            </div>
            <div className='border-t border-gray-700 pt-4 pb-3'>
              <div className='flex items-center px-5'>
                <div className='flex-shrink-0'>
                  <NextImage
                    className='h-10 w-10 rounded-full'
                    imgClassName='rounded-full'
                    src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    alt=''
                    width={48}
                    height={48}
                  />
                </div>
                <div className='ml-3'>
                  <div className='text-base font-medium text-white'>
                    Tom Cook
                  </div>
                  <div className='text-sm font-medium text-gray-400'>
                    tom@example.com
                  </div>
                </div>
                <button
                  type='button'
                  className='ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                >
                  <span className='sr-only'>View notifications</span>
                  <BellIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>
              <div className='mt-3 space-y-1 px-2'>
                {authLinks.map((link) => (
                  <Disclosure.Button
                    key={link.href}
                    as={UnstyledLink}
                    href={link.href}
                    className={clsxm(
                      'block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white',
                      link.active && 'bg-gray-900 text-white'
                    )}
                  >
                    {link.label}
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
