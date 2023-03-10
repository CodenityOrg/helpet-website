import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/basics/Button';

const meta: Meta<typeof Button> = {
  title: 'Basics/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Hello world'
  },
};

export const Active: Story = {
  args: {
    children: 'Hello world',
    variant: 'active'
  }
}

