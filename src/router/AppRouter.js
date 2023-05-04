import { Routes, Route } from 'react-router-dom';
import Login from '../screens/login/Login';
import Registration from '../screens/registration/Registration';
import Dashboard from '../screens/dashboard/Dashboard';
import Search from '../screens/search/Search';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} exact />
      <Route path='/register' element={<Registration />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/search' element={<Search />} />
    </Routes>
  );
};
