import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Skill} from "features/skills/ui/components/skill/Skill";

export default {
  title: 'Portfolio/Skill',
  component: Skill,
  argTypes: {},
} as ComponentMeta<typeof Skill>;

const Template: ComponentStory<typeof Skill> = (args) =>
  <Skill {...args} />;

export const SuperSkill = Template.bind({});
SuperSkill.args = {skillData: {title: "SuperSkill", icon: "", description: "Super Skill"}};