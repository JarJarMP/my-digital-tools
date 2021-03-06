import React from 'react';
import { Grid } from 'semantic-ui-react'

import Sidebar from '../../components/Sidebar/Sidebar';
import Content from '../../components/Content/Content';

const layout = () => (
  <Grid>
    <Grid.Row columns={2}>
      <Grid.Column width={4}>
        <Sidebar />
      </Grid.Column>
      <Grid.Column width={12}>
        <Content />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default layout;