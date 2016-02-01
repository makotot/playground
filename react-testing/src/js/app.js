import React from 'react'
import ReactDOM from 'react-dom'

import { Foo } from './components/foo'
import { Bar } from './components/bar'

ReactDOM.render(<Foo />, document.getElementById('app'))
ReactDOM.render(<Bar />, document.getElementById('nav'))
