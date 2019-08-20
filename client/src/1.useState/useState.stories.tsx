/* eslint-disable import/first */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { UseState } from './';

storiesOf('Hooks', module).add('1. useState', () => <UseState />);
