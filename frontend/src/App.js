import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './login';
import HomePage from './HomePage';
import Practice from './practice';
import IngredientPage from './IngredientPage';
import { IngredientsProvider } from './components/IngredientsProvider'

import Profile from  './profile'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
    return (
    <IngredientsProvider>
      <BrowserRouter>
        <Routes>
         <Route path='/login' element={<Login/>}/>
         <Route path='/' element={<IngredientPage />}/>
         <Route path='/practice' element={<Practice/>}/>
         <Route path = '/Profile' element = {<Profile/>}/>
         <Route path='/generate' element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </IngredientsProvider>
  );
}

export default App;
