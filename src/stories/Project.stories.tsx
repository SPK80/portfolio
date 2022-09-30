import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {projectsData} from "common/bll/projectsData";
import {Project} from "features/projects/ui/components/project/Project";

export default {
  title: 'Portfolio/Project',
  component: Project,
  argTypes: {},
} as ComponentMeta<typeof Project>;

const Template: ComponentStory<typeof Project> = (args) =>
  <Project {...args} />;

export const Primary = Template.bind({});
Primary.args = {projectData: projectsData[2]};