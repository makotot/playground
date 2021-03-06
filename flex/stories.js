import React from 'react'
import { storiesOf } from '@storybook/react'
import './flex.scss'
import { Flex, FlexItem } from './flex'

const Dummy = (props) => {
  return (
    <div style={{
      'padding': '1rem',
      'border': '1px solid #4a23dd',
    }}>{ props.children }</div>
  )
}

storiesOf('flex', module)
  .add('flex', () => (
    <div>
      <Flex>
        <FlexItem><Dummy>flex</Dummy></FlexItem>
        <FlexItem><Dummy>flex</Dummy></FlexItem>
      </Flex>
      <Flex s>
        <FlexItem><Dummy>flex</Dummy></FlexItem>
        <FlexItem><Dummy>flex</Dummy></FlexItem>
      </Flex>
      <Flex>
        <FlexItem><Dummy>flex</Dummy></FlexItem>
        <FlexItem right><Dummy>flex</Dummy></FlexItem>
      </Flex>
      <Flex align="center">
        <FlexItem><Dummy>flex<br />flex</Dummy></FlexItem>
        <FlexItem><Dummy>flex</Dummy></FlexItem>
        <FlexItem><Dummy>flex</Dummy></FlexItem>
      </Flex>
      <Flex>
        <FlexItem><Dummy>flex<br />flex</Dummy></FlexItem>
        <FlexItem align="center"><Dummy>flex</Dummy></FlexItem>
        <FlexItem><Dummy>flex</Dummy></FlexItem>
      </Flex>
      <Flex>
        <FlexItem growed={ 1 }><Dummy>flex</Dummy></FlexItem>
        <FlexItem growed={ 2 }><Dummy>flex</Dummy></FlexItem>
        <FlexItem growed={ 3 }><Dummy>flex</Dummy></FlexItem>
      </Flex>
      <Flex>
        <FlexItem growed={ 10 }><Dummy>flex</Dummy></FlexItem>
        <FlexItem growed={ 1 }><Dummy>flex</Dummy></FlexItem>
        <FlexItem growed={ 1 }><Dummy>flex</Dummy></FlexItem>
      </Flex>
      <Flex>
        <FlexItem growed={ 10 }><Dummy>flex</Dummy></FlexItem>
        <FlexItem growed={ 0 }><Dummy>flex</Dummy></FlexItem>
      </Flex>
      <Flex s>
        <FlexItem growed={ 3 }><Dummy>flex</Dummy></FlexItem>
        <FlexItem growed={ 2 }><Dummy>flex</Dummy></FlexItem>
      </Flex>
    </div>
  ))