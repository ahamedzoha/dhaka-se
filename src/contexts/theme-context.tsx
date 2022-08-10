import { createContext, ReactElement, useEffect, useState } from 'react'

export const ThemeContext = createContext({
  isDarkTheme: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleThemeHandler: () => {},
})

interface ThemePropsInterface {
  children: JSX.Element | Array<JSX.Element>
}

const ThemeContextProvider = (props: ThemePropsInterface): ReactElement => {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true)

  useEffect(() => initialThemeHandler())

  const isLocalStorageEmpty = (): boolean => {
    return !localStorage.getItem('isDarkTheme')
  }

  const initialThemeHandler = (): void => {
    if (isLocalStorageEmpty()) {
      localStorage.setItem('isDarkTheme', `true`)
      document?.querySelector('body')?.classList.add('dark')
      setIsDarkTheme(true)
    } else {
      const isDarkTheme: boolean = JSON.parse(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        localStorage.getItem('isDarkTheme')!
      )
      isDarkTheme && document?.querySelector('body')?.classList.add('dark')
      setIsDarkTheme(() => isDarkTheme)
    }
  }

  const toggleThemeHandler = (): void => {
    const isDarkTheme: boolean = JSON.parse(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      localStorage.getItem('isDarkTheme')!
    )

    setIsDarkTheme(!isDarkTheme)
    toggleDarkClassToBody()
    setValueToLocalStorage()
  }

  const toggleDarkClassToBody = (): void => {
    document?.querySelector('body')?.classList.toggle('dark')
  }

  const setValueToLocalStorage = (): void => {
    localStorage.setItem('isDarkTheme', `${!isDarkTheme}`)
  }

  return (
    <ThemeContext.Provider value={{ isDarkTheme: true, toggleThemeHandler }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
