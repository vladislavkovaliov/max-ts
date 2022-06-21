import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import store from './store/store'
import Users from './modules/Users/Users'

const App = () => (
  <Provider store={store}>
    <Users />
  </Provider>
)

export default App
