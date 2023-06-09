import React from 'react';
import AppRoutes from 'routes/AppRoutes';
import { AppDataProvider } from 'providers/AppDataProvider';
import { UserDataProvider } from 'providers/UserDataProvider';
function App() {
  return (
    <AppDataProvider>
      <UserDataProvider>
        <AppRoutes />
      </UserDataProvider>
    </AppDataProvider>
  );
}

export default App;
