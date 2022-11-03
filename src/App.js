import {BrowserRouter as Router,Route,Routes} from  'react-router-dom';
import './App.css';
import Login from './components/login/login'

import SignUp from './components/register/signup';

import Navbar from './components/home/Navbar';
import Index from './components/home/index';
function App() {
  return (
     <Router>
    <div className="App">
        <Navbar/>
         <Routes>
           <Route path='/' element={<Index/>}/>
            <Route path='/signup' element={<SignUp/>} />
            <Route path='/login' element={<Login/>} />
         </Routes>
      
    </div>
    </Router>
  );
}

export default App;
