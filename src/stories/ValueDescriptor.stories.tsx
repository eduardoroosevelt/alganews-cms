import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import ValueDescriptor, { ValueDescriptorProps } from '../components/ValueDescriptor/ValueDescriptor';

export default {
  title: 'Example/ValueDescriptor',
  component: ValueDescriptor,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },

} as ComponentMeta<typeof ValueDescriptor>;


const Template: ComponentStory<typeof ValueDescriptor> = (args) => <ValueDescriptor {...args} />;

export const Default = Template.bind({});
Default.args = {
  description: 'ganhos no mês',
  value: 560322.02,
  color: 'default',
  isCurrency: false
}

export const Primary = Template.bind({});
Primary.args = {
  description: 'ganhos no mês',
  value: 560322.02,
  color: 'primary',
  isCurrency: false
}

export const PrimaryCurrency = Template.bind({});
PrimaryCurrency.args = {
  description: 'ganhos no mês',
  value: 560322.02,
  color: 'primary',
  isCurrency: true
}

export const DefaultCurrency = Template.bind({});
DefaultCurrency.args = {
  description: 'ganhos no mês',
  value: 560322.02,
  color: 'default',
  isCurrency: true
}