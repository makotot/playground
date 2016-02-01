import { describeWithDOM, shallow, mount, spyLifecycle } from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import test from 'tape'
import './setup'

import { Bar } from '../src/js/components/bar'


test.test('<Bar />', (test) => {
  test.test('render', (t) => {
    const result = shallow(<Bar />)

    t.plan(1)
    t.equal(result.find('.bar__list').length, 1)
  })

  test.test('div', (t) => {
    const result = mount(<Bar />)

    t.plan(1)
    t.equal(result.find('.bar__list').length, 1)
  })
})

