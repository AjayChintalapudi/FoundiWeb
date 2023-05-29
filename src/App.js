
import React from 'react';
import AppRoutes from 'routes/AppRoutes';
import { AppDataProvider } from 'providers/AppDataProvider';
function App() {
  return (
    <AppDataProvider>
        <AppRoutes />
        </AppDataProvider>
  );
}

export default App;
