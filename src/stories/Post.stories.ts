import type { Meta, StoryObj } from '@storybook/react';
import Post, { PostI } from '@/components/Post';

const samplePost: PostI = {
  title: 'Sample Post Title',
  description: `
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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


