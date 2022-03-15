import { isArray } from 'lodash-es'
const render = () => {
  if (isArray([])) {
    console.log('我是render')
  }
}

export default render
