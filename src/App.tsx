import { Route, Routes } from 'react-router';
import Enter from './pages/Enter/Enter';
import MainLayout from './pages/Main/MainLayout';
import MainScreen from './pages/Main/MainScreen';
function App() {
  return (
    <Routes>
      <Route index element={<Enter />} />
      <Route path="main">
        <Route element={<MainLayout />}>
          <Route index element={<MainScreen />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
