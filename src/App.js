import logo from './logo.svg';
import './App.css';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Vendor from './Pages/Vendor';
import Equipment from './Pages/Equipment';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Eqlogin from "./Pages/Eqlogin";



function App() {


  const classcontainer = {

    width: "400px",
    marginLeft: "1100px"
  }
  return (

        < Router >
            <Routes>
                <Route exact path='/' element={< Login />}></Route>
                <Route exact path='/login' element={< Login />}></Route>
                <Route exact path='/signup' element={< SignUp />}></Route>
                <Route exact path='/equipment' element={< Equipment />}></Route>
                <Route exact path='/vendor' element={< Vendor />}></Route>
                <Route exact path='/eqlogin/:id' element={< Eqlogin />}></Route>


            </Routes>
        </Router>


  );
}

export default App;
