import { Story, Meta } from '@storybook/react'

import Project from '.'

export default {
  component: Project,
  title: 'Project',
} as Meta

export const Basic: Story = () => <Project />
