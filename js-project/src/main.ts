function render() {
  const app = document.querySelector('#root')!
  app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
  `
}

render()

// 判断是否是热更新处理 下列代码在生产环境打包的同时会被tree shaking掉
if (import.meta.hot) {
  import.meta.hot.accept((newModule) => {
    newModule.render()
  })
}
