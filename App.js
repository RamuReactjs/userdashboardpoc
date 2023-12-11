import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Header from './components/Header';
import UserAccessManagement from './components/UserAccessManagement';
import UserManagement from './components/UserManagement';
import UserAuthorization from './components/UserAuthorization';
import Reports from './components/Reports';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/useraccessmanagement' element={<UserAccessManagement />} />
        <Route path='/usermanagement' element={<UserManagement/>} />
        <Route path='/userauthorization' element={<UserAuthorization/>} />
        <Route path='/reports' element={<Reports />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
