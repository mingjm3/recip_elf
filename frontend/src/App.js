import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './login';
import HomePage from './HomePage';
import Practice from './practice';
import IngredientPage from './IngredientPage';
import { UserProfileProvider } from './components/auth/UserProfileProvider';
import { IngredientsProvider } from './components/IngredientsProvider'

import Profile from './profile'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <UserProfileProvider>
      <IngredientsProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<IngredientPage />} />
            <Route path='/practice' element={<Practice />} />
            <Route path='/Profile' element={<Profile />} />
            <Route path='/generate' element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </IngredientsProvider>
    </UserProfileProvider>
  );
}

export default App;
