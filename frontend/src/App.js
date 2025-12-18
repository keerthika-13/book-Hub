import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books" element={<Books/>}/>
        <Route path="/add-book" element={<AddBook/>}/>
        <Route path="/Login" element={<Login/>}/>
         <Route path="/register" element={<Register />} />
      </Routes>
      </BrowserRouter>
      
    
  );
}

export default App;
