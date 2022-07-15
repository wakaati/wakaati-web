import React from 'react'
import SecureNavigation from './Navigation/SecureNavigation'
import NonSecureNavigation from './Navigation/NonSecureNavigation'
import {BrowserRouter} from 'react-router-dom' 
import { Provider } from 'react-redux';
import { store, persistor } from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import GlobalStyles from './Components/styles/Global.styles';



export default function App() {
  return (
    <Provider store={store}>
          <PersistGate persistor={persistor}>
            <BrowserRouter>
                 <GlobalStyles/>
                  <NonSecureNavigation/>      
                  <SecureNavigation/> 
            </BrowserRouter>    
        </PersistGate>
    </Provider>
  )
}
