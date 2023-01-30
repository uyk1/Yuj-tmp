import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainHeader from "./main-header/mainHeader";
import MainFooter from "./mainFooter/MainFooter";
import Home from './pages/home';
import Login from './pages/login';
import Signin from './pages/signin';
import Styles from './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className={Styles.wrapper}>
          <MainHeader />
          <div className={Styles.contentWrapper}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signin" element={<Signin />} />
            </Routes>
          </div>
          <MainFooter />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;