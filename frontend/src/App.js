import './App.css';
import Before from './components/beforesignin'
import Home from './components/home'; // Import your Home component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="container">
      <Routes>
      <Route path="/" element={<Before />} />  {/* Default route */}
      <Route path="/home" element={<Home />} />  {/* Route for home page */}
    </Routes>
    </div>
  );
};


export default App;
