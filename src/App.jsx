
import React from 'react';
import { Provider } from 'react-redux';

import MainRoutes from './Routes/MainRoutes';
import store from './store';



import { PhoneNumberProvider } from "./context/phoneNumberContext"; // Import PhoneNumberProvider


function App() {
  return (

    <Provider store={store}>
      <PhoneNumberProvider>
        <MainRoutes />
      </PhoneNumberProvider>
    </Provider>

  );
}

export default App;
