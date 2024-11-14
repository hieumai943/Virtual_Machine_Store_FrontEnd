import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './Components/Login/Login';
import { Register } from './Components/Register/Register';
import { Store } from './Components/Store/Store';
import { Navbar } from './Components/Navbar/Navbar';
import {Cart} from './Components/Cart/Cart';
import {NewsLetter} from './Components/NewsLetter/NewsLetter';
import { Footer } from './Components/Footer/Footer';
import { MachineDetail } from './Components/Machine_Detail/MachineDetail';
import { MachineCreate } from './Components/Machine_Create/MachineCreate';
import { Payment } from './Components/Payment/Payment';
import { AuthProvider } from './Components/AuthContext/AuthContext';
import { ContainerList } from './Components/ContainerList/ContainerList';
import { Account } from './Components/Account/Account';
import { Home } from './Components/Home/Home';


function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
        < Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/machine" element={<MachineDetail />} />
            <Route path="/create/machine" element={<MachineCreate/>} />
            <Route path="/machine/:machineId" element={<MachineDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/machine/:machineId/payment" element={<Payment  />} />
            <Route path="/admin/container/list" element={<ContainerList  />} />
            <Route path="/account" element={<Account  />} />
          </Routes>
        <Footer/>
      </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
