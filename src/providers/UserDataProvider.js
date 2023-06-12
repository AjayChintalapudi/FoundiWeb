import { deleteAcccount } from 'networking/apis/deleteAccount';
import React, { createContext, useEffect, useState } from 'react';
import { useMemo } from 'react';
export const UserDataContext = createContext();
const UserDataProvider = (props) => {
  // user details
  const [user, setUser] = useState();

  // getting  user details

  const setUserData = (data) => {
    console.log('user data in context', data);
    setUser(data.user);
    localStorage.setItem('user', JSON.stringify(data.user));
    localStorage.setItem('auth', data.accessToken);
  };

  // update profile

  const updateProfile = (data) => {
    setUser(data.data);
    localStorage.setItem('user', JSON.stringify(data.data));
  };

  // logout

  const logOut = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('auth');
  };

  // onload the page get the user data

  useEffect(() => {
    let userDeatils = localStorage.getItem('user');
    if (userDeatils) {
      setUser(JSON.parse(userDeatils));
    }
  }, []);

  // deleteAccount

  const handleDeleteAccount = async () => {
    try {
      const deleteResponse = await deleteAcccount(user._id);
      console.log(deleteResponse);
      if (deleteResponse.data.type === 'success') {
        logOut();
        alert(deleteResponse.data.message);
      }
    } catch {
      console.log('some error account not delted');
    }
  };

  const memoizedValues = useMemo(
    () => ({ user, setUserData, logOut, updateProfile, handleDeleteAccount }),
    [user, setUserData, logOut, updateProfile, handleDeleteAccount]
  );

  return (
    <UserDataContext.Provider value={memoizedValues}>
      {props.children}
    </UserDataContext.Provider>
  );
};

export { UserDataProvider };
