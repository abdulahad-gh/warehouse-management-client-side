import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signin from './pages/Auth/Signin';
import SignUp from './pages/Auth/SignUp';
import Home from './pages/Home/Home';
import Footer from './pages/shared/Footer';
import Navbar from './pages/shared/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='signin' element={<Signin />} />
        <Route path='signin/signup' element={<SignUp />} />


      </Routes>

      <Footer />
    </>
  );
}

export default App;
