import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Footer from './Components/Hocs/footer.jsx';
import TopItems from './Components/Hocs/topItems.jsx';
import Navbar from './Components/Hocs/navbar.jsx';

import Home from './Components/Pages/Homepages/home.jsx';
import HowToOrder from './Components/Pages/Homepages/howTorder.jsx';
import Rules from './Components/Pages/Homepages/rules.jsx';
import Shop from './Components/Pages/Homepages/shop.jsx';
import About from './Components/Pages/Homepages/About.jsx';


import Add from './Components/Pages/Purchasepages/add.jsx';


import Purchase from './Components/Pages/Purchasepages/purchase.jsx';
import Current from './Components/Pages/Purchasepages/current.jsx';
import Payment from './Components/Pages/Purchasepages/Payment.jsx';
import { AuthProvider } from './Context/Acontext.jsx';
//import PrivateRoute from './utils/privateroute.jsx';
import PrivateRoute from './utils/privateroute.jsx';

import './App.css';

const App = () => {
  return (
    <div className="app">
      <Router>
      <AuthProvider> 
        <TopItems />
        <Navbar />
        
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/how-to-order' element={<HowToOrder />} />
          <Route path='/about' element={<About />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/rules' element={<Rules />} />
          <Route path='/balance' element={<Add />} />
          <Route path='/cart' element={<Current />} />
          <Route exact path='/history' element={<Purchase />} />
          <PrivateRoute path='/cart-payment' element={<Payment />} />
        </Routes>

        
        <Footer />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
