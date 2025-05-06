import { Route, BrowserRouter as Router, Routes } from 'react-router';

import BirthyearPage from './pages/BirthyearPage';
import DietTypePage from './pages/DietTypePage';
import ExcludeIngredientsPage from './pages/ExcludeIngredientsPage';
import GenderPage from './pages/GenderPage';
import NicknamePage from './pages/NicknamePage';
import RecipePage from './pages/RecipePage';
import StartPage from './pages/StartPage';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/nickname" element={<NicknamePage />} />
        <Route path="/userinfo/gender" element={<GenderPage />} />
        <Route path="/userinfo/birthyear" element={<BirthyearPage />} />
        <Route path="/diet-type" element={<DietTypePage />} />
        <Route path="/exclude-ingredients" element={<ExcludeIngredientsPage />} />
        <Route path="/recipe" element={<RecipePage />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
