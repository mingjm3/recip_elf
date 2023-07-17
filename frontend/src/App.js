import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Auth from './Auth';
import HomePage from './HomePage';
import Practice from './practice';
import IngredientPage from './IngredientPage';
import { UserProfileProvider } from './components/auth/UserProfileProvider';
import { IngredientsProvider } from './components/IngredientsProvider'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  return (
      <UserProfileProvider>
        <IngredientsProvider>
          <BrowserRouter>
            <Routes>
              <Route path='/auth' element={<Auth />} />
              <Route 
                path='/' 
                element={
                  <ProtectedRoute>
                    <IngredientPage />
                  </ProtectedRoute>
                }
              />
              <Route path='/practice' element={<Practice />} />
              <Route path='/generate' element={<HomePage />} />
            </Routes>
          </BrowserRouter>
        </IngredientsProvider>
      </UserProfileProvider>
  );
}

export default App;
