import { Provider, useDispatch } from 'react-redux'
import Body from './Components/Body/Body'
import 'bootstrap/dist/css/bootstrap.min.css'
import appStore from './ReduxStore/appStore'

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  )
}

export default App
