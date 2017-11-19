import React from 'react';
import { storiesOf } from '@storybook/react';
import { Responsive } from '../dist/Responsive'

storiesOf('Responsive', module)
  .add('Responsive', () =>
    <Responsive query='(max-width: 900px)'>
      {(matches) => (<p>{matches ? 'matched!' : 'not matched!'}</p>)}
    </Responsive>);
