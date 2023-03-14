import type { Meta, StoryObj } from '@storybook/react';
import Post, { PostI } from '@/components/Post';

const samplePost: PostI = {
  title: 'Sample Post Title',
  description: `
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  `,
  type: 0,
  address: 'Some random address 123',
  user: {
    firstName: 'Joe',
    lastName: 'Doe',
    profile: ''
  },
  imagesURL: ['https://picsum.photos/1000/200', 'https://picsum.photos/300', 'https://picsum.photos/300', 'https://picsum.photos/300', 'https://picsum.photos/300'],
  tags: ['tag1', 'tag2']
}

type Story = StoryObj<typeof Post>;

const meta: Meta<typeof Post> = {
  title: 'Common/Post',
  component: Post,
  tags: ['autodocs'],
};

export default meta;

export const Primary: Story = {
  args: samplePost,
};


