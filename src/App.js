import { Route, Routes } from 'react-router-dom';
import './App.css';
import Detail from './Component/Detail';
import About from './Component/About';
import Servises from './Component/Servises';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Login from './Component/Login';
import Profile from './Component/Profile';
import Supportt from './Component/Supportt';

function App() {
  return (
    <div className="App">

      <Header />
      <Routes>
        <Route path="/" element={<Detail />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/support" element={<Supportt />} />
        <Route path="/servises" element={<Servises />} />
      </Routes>
      <Footer />
    
    </div>
  );
}

export default App;
