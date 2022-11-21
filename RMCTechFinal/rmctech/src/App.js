import { BrowserRouter as  Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Form from "./Components/Form";
import Heropage from "./Components/Heropage";
import { Aboutpage } from "./Routes/Aboutpage";
import { FAQpage } from "./Routes/FAQpage";
import { Home } from "./Routes/Home";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Aboutpage" element={<Aboutpage/>}/>
        <Route path="/FAQpage" element={<FAQpage/>}/>
      </Routes>
    </Router>
    
 
    
  );
}

export default App;
