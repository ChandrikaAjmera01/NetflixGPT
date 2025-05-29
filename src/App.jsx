import Body from './conponents/Body.jsx'
import './App.css'
import { Provider } from 'react-redux';
import { appStore } from './utils/appStore.js';

function App() {
 

  return (
    <>
    <Provider store={appStore}>
      <Body/>
    </Provider>
      
    </>
  )
}

export default App
