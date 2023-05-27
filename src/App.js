import CheckOut from 'pages/CheckOut/CheckOut';
import React, { useEffect } from 'react';
import AppRoutes from 'routes/AppRoutes';
function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <AppRoutes />
      <CheckOut />
    </div>
  );
}

export default App;
