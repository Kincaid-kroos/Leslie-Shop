import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './Components/Hocs/footer.jsx';
import TopItems from './Components/Hocs/topItems.jsx';
import Navbar from './Components/Hocs/navbar.jsx';

import Home from './Components/Pages/Homepages/home.jsx';
import About from './Components/Pages/Homepages/About.jsx';
import Guide from './Components/Pages/Homepages/guide.jsx';
import HowToOrder from './Components/Pages/Homepages/howTorder.jsx';
import Rules from './Components/Pages/Homepages/rules.jsx';
import Shop from './Components/Pages/Homepages/shop.jsx';

import Add from './Components/Pages/Purchasepages/add.jsx';
import Login from './Components/Pages/Purchasepages/login.jsx';
import Register from './Components/Pages/Purchasepages/register.jsx';
import Purchase from './Components/Pages/Purchasepages/purchase.jsx';
import Current from './Components/Pages/Purchasepages/current.jsx';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <TopItems />
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/guide' element={<Guide />} />
          <Route path='/how-to-order' element={<HowToOrder />} />
          <Route path='/rules' element={<Rules />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/balance' element={<Add />} />
          <Route path='/cart' element={<Current />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route exact path='/history' element={<Purchase />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
