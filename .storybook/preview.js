import { addDecorator, configure } from '@storybook/react'
import { addParameters } from '@storybook/client-api'
import { withThemesProvider } from 'storybook-addon-styled-component-theme'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import ThemeProvider from '../src/theme/theme-provider'

// V A R I A B L E S
import globals from '../src/theme/globals.json'

export const darkTheme = {
  name: 'dark',
  background: globals.colors.black,
  globals,
}

export const lightTheme = {
  name: 'light',
  background: globals.colors.white,
  globals,
}

const themes = [
  darkTheme,
  lightTheme
]

const customViewports = {
  breakpointDown: {
    name: 'Breakpoint Down',
    styles: {
      width: '59em',
      height: '34em',
    },
  },
  breakpointUp: {
    name: 'Breakpoint Up',
    styles: {
      width: '80em',
      height: '42em',
    },
  }
}

addDecorator(withThemesProvider(themes, ThemeProvider))

addParameters({
  viewport: {
    viewports: { ...customViewports, ...INITIAL_VIEWPORTS }
  },
})

export const parameters = {
  actions: { argTypesRegex: "^on.*" },
}