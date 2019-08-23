/* eslint-disable import/first */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { UseDebounce } from './';

storiesOf('Hooks', module).add('3. custom Hook', () => <UseDebounce />);
