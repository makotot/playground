import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import test from 'tape'

import { Bar } from '../src/js/components/bar'


test.test('Bar', (t) => {
  const result = shallow(<Bar />)

  t.test('render', (t) => {
    t.plan(1)
    t.equal(result.find('.bar__list').length, 1)
  })
})
