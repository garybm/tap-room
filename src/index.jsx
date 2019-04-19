import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { AppContainer } from 'react-hot-loader'
import { HashRouter } from 'react-router-dom';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer style={{margin:'0', padding:'0'}}>
      <HashRouter>
        <Component/>
      </HashRouter>
    </AppContainer>,
    document.getElementById('react-app-root')
  )
}

render(App)

/*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
/*eslint-enable */
