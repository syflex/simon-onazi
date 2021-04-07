import React from 'react';
import { Home } from './Home';
import * as HeaderStories from '../../organisms/Header/Header.stories';

export default {
  title: 'Pages/Home',
  component: Home,
};

const Template = (args) => <Home {...args} />;



export const Homepage = Template.bind({});
Homepage.args = {
  
};