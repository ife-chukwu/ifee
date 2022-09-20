import Index from "./Components/Index";
import Main from "./Components/Main";
import SubMain from "./Components/SubMain";
import About from "./Components/About";
import Order from "./Components/Order";
import { Routes, Route } from "react-router-dom";
import Signup from "./Components/SIgnup";

function App() {
  return (
    <div>
      <Main />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="submain" element={<SubMain />} />
        <Route path="about" element={<About />} />
        <Route path="order" element={<Order />} />
        <Route path="signup" element={<Signup />} />
        <Route path="submain" element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;
