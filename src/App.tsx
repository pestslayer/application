import { HashRouter, Route, Routes } from 'react-router-dom';
import routes from './config/routes';
import Navbar from './components/Navbar';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<route.componenet />} // Remove the enclosing < >
          />
        ))}
      </Routes>
    </HashRouter>
  );
}

export default App;
