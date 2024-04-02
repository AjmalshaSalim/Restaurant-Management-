import React from 'react';
import { Provider } from 'react-redux';
import { PhoneNumberProvider } from "./context/phoneNumberContext";
import MainRoutes from './Routes/MainRoutes';
import store from './store';

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
