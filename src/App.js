import './App.css';
import { Dashboard } from './components/dashboard/Dashboard';
import { InputDetails } from './components/InputDetails/InputDetails';
import { Records } from './components/Records/Records';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
        <Routes>
            <Route exact path='/' element={<Dashboard />} />
            <Route exact path='/input-details' element={<InputDetails />} />
            <Route exact path='/records' element={<Records />} />
        </Routes>
        
    </div>
  );
}

export default App;