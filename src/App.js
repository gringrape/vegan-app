import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import StartPage from './pages/StartPage';
import NicknamePage from './pages/NicknamePage';
import DietTypePage from './pages/DietTypePage';
import ExcludeIngredientsPage from './pages/ExcludeIngredientsPage';
import FinalMenuPage from './pages/RecipePage';
import GenderPage from './pages/GenderPage';
import BirthyearPage from './pages/BirthyearPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/nickname" element={<NicknamePage />} />
        <Route path="/userinfo/gender" element={<GenderPage />} />
        <Route path="/userinfo/birthyear" element={<BirthyearPage />} />
        <Route path="/diet-type" element={<DietTypePage />} />
        <Route path="/exclude-ingredients" element={<ExcludeIngredientsPage />} />
        <Route path="/final-menu" element={<FinalMenuPage />} />
      </Routes>
    </Router>
  );
}

export default App; 
