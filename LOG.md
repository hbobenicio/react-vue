# Log

```
npm install --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin css-loader style-loader clean-webpack-plugin rimraf babel-core babel-loader babel-preset-env babel-preset-react babel-preset-stage-2 vue-loader vue-template-compiler
```

```
npm install --save react react-dom vue
```

```
mkdir -p src/react src/vue
touch src/index.html # adicione 2 div's root, uma para cada framework.
touch src/index.js src/react/index.jsx src/vue/index.js
```

```
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App />, document.getElementById('reactRoot'))
```

```
import Vue from 'vue'
import App from './App'

const vm = new Vue({
  el: '#vueRoot',
  render: h => h(App)
})
```

Configure o webpack.config.js:
- Entry
- Output
- Loaders
  - babel-loader para `.js` e `jsx`
  - vue-loader para `vue`
  - ['vue-style-loader', 'css-loader']
- Plugins
  - html-webpack-plugin com template
  - vue-loader-plugin
- Resolve
  - Extensions: js, jsx e vue
- Dev Server
  - content base
  - hot

Adicione os scripts em package.json
