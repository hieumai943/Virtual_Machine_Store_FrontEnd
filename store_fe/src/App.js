import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginSignup } from './Components/LoginSignUp/LoginSignup';
import { Home } from './Components/Home/Home';
import { Navbar } from './Components/Navbar/Navbar';
import {Cart} from './Components/Cart/Cart';
import {NewsLetter} from './Components/NewsLetter/NewsLetter';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        < Navbar>
          <Routes>
            <Route path="/" component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/login" component={LoginSignup} />
          </Routes>
        </Navbar>
        <NewsLetter>
        </NewsLetter>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
