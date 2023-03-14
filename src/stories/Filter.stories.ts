import type { Meta, StoryObj } from '@storybook/react';

import Filter from '@/components/Filter';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

const meta: Meta<typeof Filter> = {
  title: 'Filter',
  component: Filter,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Filter>;

export const Default: Story = {
  args: {
    label: 'Filtrar por...',
    options: [
      'Perdidos',
      'Encontrados'
    ],
    icon: faFilter,
    onSelected: (opt: string) => console.log(opt)
  },
};

