import React, { createContext, useState } from 'react';

export const UserDataContext = createContext();
const UserDataProvider = (props) => {
  const [user, setUser] = useState();
  const setUserData = (data) => {
    setUser(data.user);
    localStorage.setItem('user', JSON.stringify(data.user));
    localStorage.setItem('auth', data.accessToken);
  };
  return (
    <UserDataContext.Provider value={{ user, setUserData }}>
      {props.children}
    </UserDataContext.Provider>
  );
};

export { UserDataProvider };
