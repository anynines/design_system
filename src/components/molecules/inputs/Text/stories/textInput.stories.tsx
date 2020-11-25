import React from 'react'

import { TextInput, TextInputProps } from '../TextInput'
import { Form as FormComponent } from '../../../../organisms/Form/Form'

export default {
  title: '🌱 Molecules/Inputs/TextInput',
  component: TextInput,
  argTypes: {
    color: {
      control: { type: 'text' },
    }
  },
}

export const Basic = (args: TextInputProps) => (
  <TextInput
    {...args}
  />
)

export const Form = () => (
  <FormComponent
    onSubmit={(data: Record<string, string> | undefined): void => { }}
  >
    <TextInput
      name='firstName'
      label='Form Input'
      autoComplete='off'
      value='Dummy'
    />
  </FormComponent>
)
