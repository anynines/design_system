import React from 'react'
import { action } from '@storybook/addon-actions'

import { Button, ButtonProps } from '../Button'

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    type: {
      control: { type: 'select', options: ['dark', 'darker', 'default', 'primary', 'submit'] }
    },
    size: {
      control: { type: 'select', options: { Default: 'default', Sm: 'sm' } }
    },
    width: {
      control: { type: 'select', options: { Default: 'inline', Block: 'Block' } }
    },
    onClick: {
      control: { type: 'disabled' },
    },
  }
}

export const Basic = (args: ButtonProps) => (
  <Button
    {...args}
    onClick={action('button-click')}
  >
    Button default
  </Button>
)

export const Primary = () => (
  <Button type='primary'>
    Button Primary
  </Button>
)

export const Submit = () => (
  <Button
    type='submit'
    onClick={action('button-click - Use this one for forms since the button will be from type submit and get the styles from a primary button.')}
  >
    Button Submit
  </Button>
)

export const OnClick = () => (
  <Button
    type='default'
    onClick={action('button-click - I can do something in case you want)')}
  >
    Button onClick
  </Button>
)
