import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Assign from './components/assign';
import examination from './components/examination';


function App() {
  return (
    <div>
      <Router>
          <Routes>
              <Route path='/question/:id' element={<Assign examination={examination}/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
