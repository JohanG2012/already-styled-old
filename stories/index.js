import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Text, Title, FlexBox, Image, Hr, Link } from '../src';

storiesOf('Text', module).add('Default', () => <Text>Hello world</Text>);
storiesOf('Title', module).add('Default', () => <Title>Hello World</Title>);
storiesOf('FlexBox', module).add('Default', () => (
  <FlexBox>Hello World</FlexBox>
));
storiesOf('Image', module).add('Default', () => <Image scr="" alt="story" />);
storiesOf('Hr', module).add('Default', () => <Hr />);
storiesOf('Link', module).add('Default', () => <Link>Link</Link>);
