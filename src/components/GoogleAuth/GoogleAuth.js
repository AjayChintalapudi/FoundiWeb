import React, { useState } from 'react';

const GoogleAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState(false);
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Google Logout</p>
        </div>
      ) : (
        <div>
          <p>Google Logged In</p>
        </div>
      )}
    </div>
  );
};

export default GoogleAuth;
