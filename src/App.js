/* import LoginRegister from './Components/LoginRegister/LoginRegister';
import Dashboard from "./Components/DashBoard/DashBoard";
import LandingPage from './Components/LandingPage/LandingPage';

function App() {
  return (
    <div>

      <LandingPage />      
      
    </div>
  );
}

export default App;*/

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import LoginRegister from './Components/LoginRegister/LoginRegister';
import DashBoard from './Components/DashBoard/DashBoard'; 


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginRegister />} />  {/* Login button >>> LoginRegister */}
                <Route path="/dashboard" element={<DashBoard />} /> {/*Continue button >>> Dash Board*/}  {/*new change under construction*/}
            </Routes>
        </Router>
    );
}

export default App;

