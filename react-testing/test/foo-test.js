import { shallow, mount } from 'enzyme'
import sinon from 'sinon'
import React from 'react'
import test from 'tape'

import { Foo } from '../src/js/components/foo'

test.test('Foo', (t) => {
  const result = shallow(<Foo />)

  t.test('render', (t) => {
    t.plan(1)
    t.equal(result.find('.foo__title').length, 1)
  })
})
