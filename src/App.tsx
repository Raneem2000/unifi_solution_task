import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Test from './Pages/Test';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
