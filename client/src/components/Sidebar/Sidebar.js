import React from 'react';

import SectionList from '../SectionList/SectionList';
import UserProfile from '../UserProfile/UserProfile';

const sidebar = () => (
  <React.Fragment>
    <UserProfile/>
    <SectionList/>
  </React.Fragment>
);

export default sidebar;