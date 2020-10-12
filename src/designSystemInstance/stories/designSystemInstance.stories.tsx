import React from 'react';

import { createDesignSystemContext } from '../createDesignSystemContext';
import { DesignSystemInstanceProps, Theme } from '../types/types';
import { Button } from '../../components/atoms/Button/Button';
import { Avatar } from '../../components/atoms/Avatar/Avatar';

const { DesignSystemInstance, ThemeContext } = createDesignSystemContext()

export default {
  title: 'DesignSystemInstance',
  component: DesignSystemInstance,
  argTypes: {
    mode: {
      control: { type: 'options', options: ["dark", "light"] }
    },
    storagePrefix: {
      control: { type: 'text' }
    },
    useLocalStorage: {
      control: { type: 'boolean' }
    },
    useFavicon: {
      control: { type: 'boolean' }
    },
    autoDetectMode: {
      control: { type: 'boolean' }
    },
    theme: {
      control: { type: 'disabled' }
    },
  }
}

const exampletheme2 = {
  name: 'example2',
  globals: {
    radius: '0'
  },
  colors: {
    primary: "rgb(12, 19, 227)"
  },
  layout: 'center'
};

interface CustomTheme extends Theme {
  layouts: string
}

const HelperButton = () => {
  const { mode, setMode } = React.useContext(ThemeContext)
  return (
    <Button onClick={(): void => {
      setMode(mode === 'dark' ? 'light' : 'dark')
    }}>
      Change Mode
    </Button>
  )
}

export const Basic = <T extends Theme>(args: DesignSystemInstanceProps<T>) => (
  <DesignSystemInstance persistantThemeStorage={false} {...args}>
    <Button type="primary">
      <span>Button Primary</span>
    </Button>
    <br />
    <Button type="default">
      <span>Button Default</span>
    </Button>
    <br />
    <HelperButton />
    <br />
    <Avatar userName={'TestUser'} size={'md'} />
  </DesignSystemInstance >
);

export const WithStoragePrefixAndCustomTheme = <T extends CustomTheme>(args: DesignSystemInstanceProps<T>) => (
  <DesignSystemInstance theme={exampletheme2} storagePrefix='Storybook' {...args}>
    <Button type="primary">
      <span>Button Primary</span>
    </Button>
    <br />
    <Button type="default">
      <span>Button Default</span>
    </Button>
    <br />
    <HelperButton />
    <br />
    <Avatar userName={'TestUser'} size={'md'} />
    <span>{exampletheme2.layout}</span>
  </DesignSystemInstance >
);