import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginSignup } from './Components/LoginSignUp/LoginSignup';
import { Home } from './Components/Home/Home';
import { Navbar } from './Components/Navbar/Navbar';
import {Cart} from './Components/Cart/Cart';
import {NewsLetter} from './Components/NewsLetter/NewsLetter';
import { Footer } from './Components/Footer/Footer';
import { MachineDetail } from './Components/Machine_Detail/MachineDetail';
import { MachineCreate } from './Components/Machine_Create/MachineCreate';
import { Payment } from './Components/Payment/Payment';


function App() {
  return (
    <div>
      <BrowserRouter>
        < Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/machine" element={<MachineDetail />} />
            <Route path="/create/machine" element={<MachineCreate/>} />
            <Route path="/machine/:machineId" element={<MachineDetail />} />
            <Route path="/login" element={<LoginSignup />} />
            <Route path="/machine/:machineId/payment" element={<Payment  />} />
          </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
