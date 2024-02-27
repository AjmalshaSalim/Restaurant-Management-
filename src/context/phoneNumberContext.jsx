import React, { createContext, useState } from 'react';

export const PhoneNumberContext = createContext();

export const PhoneNumberProvider = ({ children }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const updatePhoneNumber = (newPhoneNumber) => {
    setPhoneNumber(newPhoneNumber);
  };

  return (
    <PhoneNumberContext.Provider value={{ phoneNumber, updatePhoneNumber }}>
      {children}
    </PhoneNumberContext.Provider>
  );
};
