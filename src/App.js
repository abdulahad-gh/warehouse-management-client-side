import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddItem from './pages/AddItem';
import RequireAuth from './pages/Auth/RequireAuth';
import Signin from './pages/Auth/Signin';
import SignUp from './pages/Auth/SignUp';
import Home from './pages/Home/Home';
import ManageItems from './pages/ManageItems';
import MyItems from './pages/MyItems';
import PageNotFound from './pages/PageNotFound';
import Footer from './pages/shared/Footer';
import Inventory from './pages/shared/Inventory/Inventory';
import Navbar from './pages/shared/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='manageitems' element={<RequireAuth><ManageItems /></RequireAuth>} />
        <Route path='additem' element={<RequireAuth><AddItem /></RequireAuth>} />
        <Route path='myitems' element={<RequireAuth><MyItems /></RequireAuth>} />
        <Route path='signin' element={<Signin />} />
        <Route path='signin/signup' element={<SignUp />} />
        <Route path='inventory/:id' element={<RequireAuth><Inventory /></RequireAuth>} />
        <Route path='*' element={<PageNotFound />} />


      </Routes>

      <Footer />
    </>
  );
}

export default App;
